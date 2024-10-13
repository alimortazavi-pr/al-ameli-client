"use client";

import { Button, Chip } from "@nextui-org/react";
import { Document } from "iconsax-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const ArticlesItem = () => {
  //Responsive
  const isLg = useMediaQuery({ query: "(min-width: 1024px)" });

  //States
  const [isClient, setIsClient] = useState(false);

  //Lifecycle
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <div className="bg-white/90 pt-10 p-5 shadow-lg w-full rounded-xl">
        <div className="flex gap-3 lg:gap-7 mb-5">
          <div className="bg-white shadow rounded-xl min-w-32 h-44 lg:min-w-52 lg:h-72 p-4 lg:p-6">
            <div className="w-full h-full bg-secondary"></div>
          </div>
          <div>
            <Link
              href={"#"}
              className="text-xl lg:text-4xl font-bold truncate"
            >
              ﺑﻄﻮن ﻗﺮﻳﺶ
            </Link>
            <p className="mb-3 lg:mb-16 text-default-500 lg:text-2xl mb-t lg:mt-7">
              دراﺳـــﺔ ﻣﻮاﺟﻬﺔ ﺑﻄﻮن ﻗﺮﻳﺶ ﻟﻠﻨﺒﻲ واﻹﺳﻼم إﱃ ﻳﻮﻣﻨﺎ ﻫﺬا
            </p>
            <div className="flex flex-wrap items-center gap-1">
              <Chip
                className="text-white font-medium"
                size={isLg ? "lg" : "md"}
              >
                ﺗﺎرﻳﺦ
              </Chip>
              <Chip
                className="text-white font-medium"
                size={isLg ? "lg" : "md"}
              >
                ﺳﻴﺮة اﻟﻤﻌﺼﻮﻣﻴﻦ ع
              </Chip>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-2">
          <Button
            size={isLg ? "lg" : "sm"}
            color="primary"
            className="font-semibold lg:text-xl"
            as={Link}
            href={"#"}
          >
            ﻣﻄﺎﻟﻌﺔ
          </Button>
          <Button
            isIconOnly
            size={isLg ? "lg" : "sm"}
            color="primary"
            variant="flat"
          >
            <Document className="w-5 h-5 lg:w-7 lg:h-7" />
          </Button>
          <Button
            isIconOnly
            size={isLg ? "lg" : "sm"}
            color="primary"
            variant="flat"
          >
            <Document className="w-5 h-5 lg:w-7 lg:h-7" />
          </Button>
        </div>
      </div>
    )
  );
};
