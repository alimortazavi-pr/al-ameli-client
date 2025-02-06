import { Button } from "@heroui/react";

//Assets
import youtubeLogo from "@/assets/images/svgs/youtube-logo.svg";
import facebookLogo from "@/assets/images/svgs/facebook-logo.svg";
import Image from "next/image";

export const DrawerFooter = () => {
  return (
    <div className=" border-t border-primary flex items-center justify-center gap-2 pt-5 pb-8 mx-3">
      <Button isIconOnly className="rounded-lg bg-[#E86B6B]" color="danger">
        <Image src={youtubeLogo} alt="youtube-logo" className="w-8" />
      </Button>
      <Button isIconOnly className="rounded-lg" color="primary">
        <Image src={facebookLogo} alt="youtube-logo" className="w-3" />
      </Button>
    </div>
  );
};
