import { FC } from "react";
import { Button } from "@nextui-org/react";
import { ArrowRight } from "iconsax-react";
import { useRouter } from "next-nprogress-bar";

//Interface
import { ICategoryAudio } from "@/common/interfaces";

interface IProps {
  audiosByCategory: ICategoryAudio | undefined;
}
export const AudioTitle: FC<IProps> = ({ audiosByCategory }) => {
  //Next
  const router = useRouter();

  //Functions
  function onBackHandler() {
    router.back();
  }

  return (
    <div className="flex items-center gap-2 lg:max-w-[50%]">
      <Button isIconOnly variant="light" onClick={onBackHandler}>
        <ArrowRight className="w-7 h-7 xl:w-9 xl:h-9 text-default-900" />
      </Button>
      <h6 className="text-xl lg:text-3xl xl:text-4xl font-semibold truncate py-2">
        {audiosByCategory?.name}
      </h6>
    </div>
  );
};
