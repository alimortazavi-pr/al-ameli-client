//Components
import { BackIcon } from "./BackIcon";
import { BookTitle } from "./BookTitle";

export const NavBarContainer = () => {
  return (
    <div
      dir="rtl"
      className={`flex items-center justify-between fixed top-0 bg-default-50 w-screen h-16 px-4 gap-4 py-2 opacity-100 z-10 duration-300`}
    >
      <div className="flex items-center gap-1 w-full max-w-[calc(110%-76px)]">
        <BackIcon />
        <BookTitle />
      </div>
    </div>
  );
};
