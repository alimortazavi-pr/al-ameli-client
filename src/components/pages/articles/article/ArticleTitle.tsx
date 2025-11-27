import { FC } from "react";
import { Button } from "@heroui/react";
import { useRouter } from "next-nprogress-bar";

//Interface
import { IArticle } from "@/common/interfaces";

interface IProps {
  article: IArticle | undefined;
}
export const ArticleTitle: FC<IProps> = ({ article }) => {
  //Next
  const router = useRouter();

  //Functions
  function onBackHandler() {
    router.back();
  }

  return (
    <div className="flex items-center gap-2 lg:max-w-[50%]">
      <Button isIconOnly variant="light" onPress={onBackHandler}>
        <span className="material-symbols-outlined !text-3xl">arrow_right_alt</span>
      </Button>
      <h6 className="text-xl lg:text-3xl xl:text-4xl font-semibold truncate py-3">
        {article?.title}
      </h6>
    </div>
  );
};
