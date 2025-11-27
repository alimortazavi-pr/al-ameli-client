"use client";

import { FC } from "react";
import { Button } from "@heroui/react";
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
      <Button isIconOnly variant="light" onPress={onBackHandler}>
        <span className="material-symbols-outlined !text-3xl">
          arrow_right_alt
        </span>
      </Button>
      <h6 className="text-xl lg:text-3xl xl:text-4xl font-semibold truncate py-3">
        {bookDetail?.title}
      </h6>
    </div>
  );
};
