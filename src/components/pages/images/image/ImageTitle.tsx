import { FC } from "react";
import { Button } from "@heroui/react";
import { ArrowRight } from "iconsax-react";
import { useRouter } from "next-nprogress-bar";

//Interface
import { ICategoryImage } from "@/common/interfaces";

interface IProps {
  imagesByCategory: ICategoryImage | undefined;
}
export const ImageTitle: FC<IProps> = ({ imagesByCategory }) => {
  //Next
  const router = useRouter();

  //Functions
  function onBackHandler() {
    router.back();
  }

  return (
    <div className="flex items-center gap-2 lg:max-w-[50%]">
      <Button isIconOnly variant="light" onPress={onBackHandler}>
        <ArrowRight className="w-7 h-7 xl:w-9 xl:h-9 text-default-900" />
      </Button>
      <h6 className="text-xl lg:text-3xl xl:text-4xl font-semibold truncate py-3 py-2">
        {imagesByCategory?.name}
      </h6>
    </div>
  );
};
