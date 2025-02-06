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

//Redux
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { isOpenBookInfoSelector } from "@/lib/book/selectors";
import { isLoadingBookDetailSelector } from "@/lib/loading/selectors";
import { setIsOpenBookInfo } from "@/lib/book/actions";

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
  const isOpenBookInfo = useAppSelector(isOpenBookInfoSelector);
  const isLoading = useAppSelector(isLoadingBookDetailSelector);

  //Life cycle
  useEffect(() => {
    if (isOpenBookInfo) {
      (onOpen as () => void)();
    } else {
      (onClose as () => void)();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpenBookInfo]);

  function onCloseHandler() {
    dispatch(setIsOpenBookInfo(false));
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
