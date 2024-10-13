import Image from "next/image";

//Assets
import alAmeliBackgroundLogo from "@/assets/images/svgs/al-ameli-background-logo.svg";

export const BackLineLogo = () => {
  return (
    <div className="hidden lg:block absolute end-40 lg:end-52 2xl:end-72 top-0 h-full">
      <div className="border-s border-secondary-200 h-[calc(70dvh-80px)] ms-1"></div>
      <Image
        src={alAmeliBackgroundLogo}
        alt="Logo"
        className=""
      />
      <div className="border-e me-1 border-secondary-200 h-[calc(100%-70dvh-80px)]"></div>
    </div>
  );
};
