import { Modal, ModalBody, ModalContent, ModalHeader } from "@heroui/react";
import { FC } from "react";

//Interfaces
import { IAudio, INextUIModalProps } from "@/common/interfaces";

interface IProps {
  audio: IAudio;
}
export const AudioDescriptionModal: FC<INextUIModalProps & IProps> = ({
  onOpenChange,
  isOpen,
  audio,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      scrollBehavior={"inside"}
      onOpenChange={onOpenChange}
      size="3xl"
    >
      <ModalContent className="bg-secondary-100">
        {() => (
          <>
            <ModalHeader>توضیحات کامل</ModalHeader>
            <ModalBody>
              <p className="whitespace-pre-wrap">{audio.description}</p>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
