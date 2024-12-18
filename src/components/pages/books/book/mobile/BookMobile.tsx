// import { useDisclosure } from "@nextui-org/react";

//Components
import { ContentContainer } from "./../content";
import { NavBarContainer } from "./nav-bar";
import { TabBarContainer } from "./tab-bar";
import { FABIcon } from "./FAB";

export const BookMobile = () => {
  //NextUI
  // const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  return (
    <>
      <div className="mt-16 mb-[80px] flex flex-col h-[calc(100dvh-144px)] relative overflow-y-hidden">
        <NavBarContainer />
        <ContentContainer />
        <TabBarContainer />
        <FABIcon />
      </div>
      {/* <BookDetailModal
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
        onClose={onClose}
      /> */}
    </>
  );
};
