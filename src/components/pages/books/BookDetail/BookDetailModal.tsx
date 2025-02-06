import {
  Modal,
  ModalContent,
  ModalBody,
  Spinner,
  ModalHeader,
} from "@heroui/react";
import { FC, useEffect } from "react";

//Types
import { INextUIModalProps } from "@/common/interfaces";
import { Book } from "@/grpc/proto/ablibrary/types/book_pb";

//Redux
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { selectedBookIdForBookDetailSelector } from "@/lib/books/selectors";
import {
  setSelectedBookDetail,
  setSelectedBookIdForBookDetail,
} from "@/lib/books/actions";
import { setIsLoadingBookDetail } from "@/lib/loading/actions";
import { isLoadingBookDetailSelector } from "@/lib/loading/selectors";

//gRPC
import { bookServiceClientWeb } from "@/grpc/services/book/book-web.service";

//Components
import { BookDetailButtons, BookDetailItems } from ".";

export const BookDetailModal: FC<INextUIModalProps> = ({
  isOpen,
  onOpen,
  onOpenChange,
  onClose,
}) => {
  //Redux
  const dispatch = useAppDispatch();
  const selectedBookIdForBookDetail = useAppSelector(
    selectedBookIdForBookDetailSelector
  );
  const isLoading = useAppSelector(isLoadingBookDetailSelector);

  //Life cycle
  useEffect(() => {
    if (selectedBookIdForBookDetail) {
      (onOpen as () => void)();
      getBookDetail();
    } else {
      (onClose as () => void)();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedBookIdForBookDetail]);

  //Functions
  async function getBookDetail() {
    dispatch(setIsLoadingBookDetail(true));
    try {
      const res = await bookServiceClientWeb.details({
        id: selectedBookIdForBookDetail,
      });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const bookDetail = (res.toJson as any)().book as Book;
      dispatch(setSelectedBookDetail(bookDetail));
      dispatch(setIsLoadingBookDetail(false));
    } catch (error) {
      console.log(error);
      dispatch(setIsLoadingBookDetail(false));
    }
  }

  function onCloseHandler() {
    dispatch(setSelectedBookIdForBookDetail(undefined));
    dispatch(setSelectedBookDetail(undefined));
  }

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      onClose={onCloseHandler}
      // size="3xl"
      placement="auto"
      className="bg-secondary-100"
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader>شناسنامه کتاب</ModalHeader>
            <ModalBody className="p-0 gap-0">
              {isLoading ? (
                <div className="flex h-full items-center justify-center min-h-96">
                  <Spinner />
                </div>
              ) : (
                <>
                  <BookDetailItems />
                  <BookDetailButtons />
                </>
              )}
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
