"use client";

import { Chip } from "@heroui/react";
import { FC, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

//Redux
import { useAppSelector } from "@/lib/hooks";
import { bookDetailSelector } from "@/lib/book/selectors";

export const BookCategories: FC = () => {
  //Redux
  const bookDetail = useAppSelector(bookDetailSelector);

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
      <div className="flex flex-wrap items-center gap-1.5">
        {bookDetail?.categories?.map((category) => (
          <Chip
            key={category.id}
            className="font-medium"
            size={isLg ? "lg" : "md"}
          >
            {category.name}
          </Chip>
        ))}
      </div>
    )
  );
};
