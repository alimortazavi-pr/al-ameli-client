import { FC } from "react";
import { Button, Chip } from "@heroui/react";
import { useRouter } from "next-nprogress-bar";

//Interface
import { IPlaylist } from "@/common/interfaces";
import convertToPersian from "num-to-persian";

interface IProps {
  playlist: IPlaylist | undefined;
}
export const PlaylistTitle: FC<IProps> = ({ playlist }) => {
  //Next
  const router = useRouter();

  //Functions
  function onBackHandler() {
    router.back();
  }

  return (
    <div className="flex items-center gap-2 lg:max-w-[50%]">
      <Button isIconOnly variant="light" onPress={onBackHandler}>
        <span className="material-symbols-outlined !text-3xl">
          arrow_right_alt
        </span>
      </Button>
      <h6 className="text-xl lg:text-3xl xl:text-4xl font-semibold truncate py-3">
        {playlist?.snippet.title}
      </h6>
      <Chip color="primary" size="lg" variant="flat">
        {convertToPersian(playlist?.contentDetails.itemCount || 0)} فيديو
      </Chip>
    </div>
  );
};
