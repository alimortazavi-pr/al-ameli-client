import { Button } from "@nextui-org/react";
import Image from "next/image";

//Assets
import alAmeliLogo from "@/assets/images/ali-al-kourani-blue1.png";

export const HomePage = () => {
  return (
    // bg-[url(./../images/hero.JPG)]
    <div className="w-screen h-screen bg-blue-300 bg-[url(./../images/hero.JPG)] bg-center bg-cover relative flex flex-col justify-between">
      <div className="flex items-center justify-center mt-[6vh] z-10">
        <Image src={alAmeliLogo} width={"200"} alt="logo" />
      </div>
      <div className="flex flex-col items-center justify-center gap-16 w-full p-2 z-10">
        <div className="flex flex-col items-center gap-2 text-white border-x-3 border-cyan-400 px-4">
          <p className="text-lg tracking-wide">
            اﻟﻤﺮﺣﻮم اﻟﻌﻼﻣﺔ آﯾﺔ اﻟﻠّﻪ اﻟﺸﯿﺦ
          </p>
          <p className="text-3xl font-semibold tracking-wide">
            علی الکورانی العاملی
          </p>
          <div className="flex items-center gap-3">
            <p className="text-lg font-medium">ولادته ١٣٦٣ هـ.ق</p>
            <span className="w-3 h-3 rounded-full bg-cyan-400"></span>
            <p className="text-lg font-medium">وفاته ١٤٤٥ هـ.ق</p>
          </div>
        </div>
        <div className="flex items-center justify-around w-full">
          <Button
            variant="light"
            size="lg"
            className="text-white rounded-full"
            startContent={
              <span className="material-symbols-outlined !text-xl">
                subscriptions
              </span>
            }
          >
            صوت ها و ویدیو ها
          </Button>
          <Button
            variant="light"
            size="lg"
            className="text-white rounded-full"
            startContent={
              <span className="material-symbols-outlined !text-xl">
                article
              </span>
            }
          >
            مقالات
          </Button>
          <Button
            variant="light"
            size="lg"
            className="text-white rounded-full"
            startContent={
              <span className="material-symbols-outlined !text-xl">
                library_books
              </span>
            }
          >
            کتاب ها
          </Button>
          <Button
            variant="light"
            size="lg"
            className="text-white rounded-full"
            startContent={
              <span className="material-symbols-outlined !text-xl">
                photo_library
              </span>
            }
          >
            عکسها و اسناد
          </Button>
        </div>
      </div>
      <div className="w-full h-full absolute top-0 left-0 bg-default-900/60 z-0"></div>
    </div>
  );
};
