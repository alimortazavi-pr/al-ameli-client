import Image from "next/image";

//Assets
import alAmeliLogo from "@/assets/images/svgs/al-ameli-logo.svg";

//Components
import { OpenDrawerBtn, MobileBackgroundLogo } from ".";

export const HomePage = () => {
  return (
    <div className="w-screen h-screen bg-blue-300 bg-[url(./../images/bg-hero.jpg)] bg-center bg-cover relative flex flex-col justify-end items-center pb-[10vh]">
      <div className="text-white flex items-end gap-2">
        <div className="flex flex-col gap-2 items-center">
          <OpenDrawerBtn />
          <MobileBackgroundLogo />
        </div>
        <div className="flex flex-col items-center gap-1">
          <h6 className="text-xl font-normal">
            المرحوم العلامة آية اللّٰه الشيخ
          </h6>
          <Image src={alAmeliLogo} alt="Al-Ameli Logo" className="w-[230px]" />
          <div className="flex items-center w-full justify-between">
            <span>ولادته ١٣٦٣ ه.ق</span>
            <span className="w-4 h-4 rounded-full bg-primary"></span>
            <span>وفاته ١٤٤٥ ه.ق</span>
          </div>
        </div>
      </div>
    </div>
  );
};
