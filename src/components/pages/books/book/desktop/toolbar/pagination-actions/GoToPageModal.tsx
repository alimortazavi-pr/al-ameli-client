/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useEffect, useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import useQuery from "next-app-use-query";
import convertAPToEnglish from "ap-to-english";
import Select, { SingleValue } from "react-select";

//Types
import { INextUIModalProps } from "@/common/interfaces";
import { Page } from "@/grpc/proto/ablibrary/types/page_pb";

//Redux
import { selectedBookSelector } from "@/lib/book/selectors";
import { useAppSelector } from "@/lib/hooks";
import convertToPersian from "num-to-persian";
// import { setScrollToPage } from "@/lib/book/actions";

//Translation
// import {
//   useClientTranslation,
//   useConvertNumbersFormat,
// } from "@/hooks/translation";

//Utils
// import { storage } from "@/common/utils";

export const GoToPageModal: FC<INextUIModalProps> = ({
  isOpen,
  onOpenChange,
  onClose,
}) => {
  //Redux
  // const dispatch = useAppDispatch();
  const selectedBook = useAppSelector(selectedBookSelector);

  //Translation
  // const { t } = useClientTranslation(storage.getLanguage());
  // const convertNumbersFormat = useConvertNumbersFormat();

  //States
  const [page, setPage] = useState("");

  //Other hooks
  const query = useQuery();

  //Life cycles
  useEffect(() => {
    if (isOpen) {
      const pageQuery = query.get("page");
      if (page != pageQuery) {
        setPage(pageQuery);
      }
    }
  }, [query.get("page"), isOpen]);

  //Functions
  function onChangeHandler(value: SingleValue<Page>) {
    setPage(value?.number?.toString() || "");
  }

  async function goToPageHandler() {
    if (page) {
      await window.history.replaceState(
        null,
        "",
        query.add("page", convertAPToEnglish(page))
      );
      // await dispatch(setScrollToPage(true));
      (onClose as () => void)();
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      hideCloseButton
      placement="center"
      className="overflow-visible"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="">
              <h5 className="text-lg">
                {/* {t("GoToPageLabel_Title")} */}
                برو به صفحه
              </h5>
            </ModalHeader>
            <ModalBody>
              <Select
                getOptionLabel={(option: any) =>
                  convertToPersian(option.label || "")
                }
                getOptionValue={(option: any) => option.number.toString() || ""}
                options={selectedBook}
                onChange={onChangeHandler}
                placeholder={"صفحه"}
                noOptionsMessage={() => "صفحه ای یافت نشد"}
                className="my-react-select-container"
                classNamePrefix="my-react-select"
                value={selectedBook.find((item) => item.number == +page)}
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                {/* {t("CancelLabel_Button")} */}
                انصراف
              </Button>
              <Button color="primary" onPress={goToPageHandler}>
                {/* {t("Go_Label")} */}
                برو
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
