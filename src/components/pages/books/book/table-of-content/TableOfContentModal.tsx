import { FC } from "react";
import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";

//Types
import { INextUIModalProps } from "@/common/interfaces";

//Components
import { TableOfContentBody } from ".";

//Translation
// import { useClientTranslation } from "@/hooks/translation";

// //Utils
// import { storage } from "@/common/utils";

export const TableOfContentModal: FC<INextUIModalProps> = ({
  isOpen,
  onOpenChange,
}) => {
  //Translation
  // const { t } = useClientTranslation(storage.getLanguage());

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="auto">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="">
              <h5 className="text-lg">
                {/* {t("table-of-content")} */}
                فهرست مطالب
              </h5>
            </ModalHeader>
            <ModalBody className="pb-5">
              <TableOfContentBody
                isOpen={isOpen as boolean}
                onClose={onClose}
              />
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
