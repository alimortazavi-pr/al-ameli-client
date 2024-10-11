import Image from "next/image";

//Assets
import alAmeliLogo from "@/assets/images/svgs/al-ameli-logo.svg";

//Components
import { OpenDrawerBtn, MobileBackgroundLogo } from ".";
import { AsideContainer } from "./aside";

export const HomePage = () => {
  return (
    <div className="w-screen h-[100dvh] flex">
      <AsideContainer />
      <div className="w-full lg:w-8/12 2xl:w-9/12 h-full bg-blue-300 bg-[url(./../images/bg-hero.jpg)] bg-center bg-cover relative flex flex-col justify-end items-center lg:pe-[10vh] pb-[10vh]">
        <div className="text-white flex items-end gap-2">
          <div className="flex flex-col gap-2 items-center lg:hidden">
            <OpenDrawerBtn />
            <MobileBackgroundLogo />
          </div>
          <div className="flex flex-col items-center gap-1">
            <h6 className="text-xl font-normal lg:text-4xl">
              المرحوم العلامة آية اللّٰه الشيخ
            </h6>
            <Image
              src={alAmeliLogo}
              alt="Al-Ameli Logo"
              className="w-[230px] lg:w-[420px]"
            />
            <div className="flex items-center w-full justify-between">
              <span className="lg:text-2xl lg:tracking-wider">ولادته ١٣٦٣ ه.ق</span>
              <span className="w-4 h-4 lg:w-6 lg:h-6 rounded-full bg-primary"></span>
              <span className="lg:text-2xl lg:tracking-wider">وفاته ١٤٤٥ ه.ق</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
