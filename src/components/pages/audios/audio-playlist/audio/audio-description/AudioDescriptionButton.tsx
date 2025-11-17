import { Button, useDisclosure } from "@heroui/react";
import { FC } from "react";

//Interfaces
import { IAudio } from "@/common/interfaces";

//Components
import { AudioDescriptionModal } from "./AudioDescriptionModal";

interface IProps {
  audio: IAudio;
}
export const AudioDescriptionButton: FC<IProps> = ({ audio }) => {
  //NextUI
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  return (
    audio.description && (
      <>
        <Button onPress={onOpen} size="sm" color="primary" variant="light">
          النص الكامل
        </Button>
        <AudioDescriptionModal
          isOpen={isOpen}
          onOpen={onOpen}
          onOpenChange={onOpenChange}
          onClose={onClose}
          audio={audio}
        />
      </>
    )
  );
};
