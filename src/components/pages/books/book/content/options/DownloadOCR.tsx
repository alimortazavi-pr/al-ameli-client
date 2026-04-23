import { FC, useState } from "react";
import { Button, Tooltip } from "@heroui/react";
import { useParams } from "next/navigation";

//Redux
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { getSingleOCRAction } from "@/lib/book/actions";
import { selectedOCRBookSelector } from "@/lib/book/selectors";

interface IProps {
  pageNumber: number;
}
export const DownloadOCR: FC<IProps> = ({ pageNumber }) => {
  //Redux
  const dispatch = useAppDispatch();
  const selectedOCRBook = useAppSelector(selectedOCRBookSelector);

  //Next
  const params = useParams();

  //States
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //Functions
  async function getSingleOCR() {
    try {
      setIsLoading(true);
      await dispatch(getSingleOCRAction(params.bookId as string, pageNumber));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Tooltip content={"استخراج نص هذه الصفحة"}>
      <Button
        isIconOnly
        color="default"
        variant="light"
        aria-label="download ocr page"
        size="sm"
        className="opacity-70 hover:opacity-100"
        onPress={getSingleOCR}
        isLoading={isLoading}
        isDisabled={
          !!selectedOCRBook.find((page) => page.number === pageNumber)
        }
        id={`download-ocr-${pageNumber}`}
      >
        <span className="material-symbols-outlined text-default-600">
          text_compare
        </span>
      </Button>
    </Tooltip>
  );
};
