"use client";

import { FC } from "react";
import { Button } from "@nextui-org/react";
import { ArrowRight } from "iconsax-react";
import { useRouter } from "next-nprogress-bar";

//Redux
import { useAppSelector } from "@/lib/hooks";
import { bookDetailSelector } from "@/lib/book/selectors";

export const BookTitle: FC = () => {
  //Redux
  const bookDetail = useAppSelector(bookDetailSelector);

  //Next
  const router = useRouter();

  //Functions
  function onBackHandler() {
    router.back();
  }

  return (
    <div className="flex items-center gap-2 lg:max-w-full">
      <Button isIconOnly variant="light" onClick={onBackHandler}>
        <ArrowRight className="w-7 h-7 xl:w-9 xl:h-9 text-default-900" />
      </Button>
      <h6 className="text-xl lg:text-3xl xl:text-4xl font-semibold truncate">
        {bookDetail?.title}
      </h6>
    </div>
  );
};
