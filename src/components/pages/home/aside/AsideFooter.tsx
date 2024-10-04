import { Button } from "@nextui-org/react";

//Assets
import youtubeLogo from "@/assets/images/svgs/youtube-logo.svg";
import facebookLogo from "@/assets/images/svgs/facebook-logo.svg";
import Image from "next/image";

export const AsideFooter = () => {
  return (
    <div className="border-t lg:border-t-2 border-primary flex items-center justify-center gap-2 pt-5 lg:pt-6 xl:pt-8 pb-8 mx-3">
      <Button isIconOnly className="rounded-lg lg:w-12 xl:w-16 lg:h-12 xl:h-16 bg-[#E86B6B]" color="danger">
        <Image src={youtubeLogo} alt="youtube-logo" className="w-8 lg:w-10 xl:w-14" />
      </Button>
      <Button isIconOnly className="rounded-lg lg:w-12 xl:w-16 lg:h-12 xl:h-16" color="primary">
        <Image src={facebookLogo} alt="youtube-logo" className="w-3 lg:w-4 xl:w-5" />
      </Button>
    </div>
  );
};
