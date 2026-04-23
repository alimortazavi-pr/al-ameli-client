import { Select, SelectItem, SelectSection } from "@heroui/react";
import { ChangeEvent, FC } from "react";

//Types
import { pdfQualityType } from "@/common/types";

//Redux
import { pdfQualityInBookSelector } from "@/lib/layouts/selectors";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { setPDFQualityInBook } from "@/lib/layouts/actions";

interface IProps {
  isSm?: boolean;
}
export const PDFQuality: FC<IProps> = ({ isSm = false }) => {
  //Redux
  const dispatch = useAppDispatch();
  const pdfQualityInBook = useAppSelector(pdfQualityInBookSelector);

  //Functions
  function onChangeHandler(keys: ChangeEvent<HTMLSelectElement>) {
    dispatch(setPDFQualityInBook(keys.target.value as pdfQualityType));
  }

  return (
    <Select
      aria-label="PDF Quality"
      placeholder={"جودة الصور"}
      className="min-w-32 max-w-36"
      size={isSm ? "sm" : "md"}
      startContent={
        <span className="material-symbols-outlined text-default-600 !text-xl">
          settings_photo_camera
        </span>
      }
      variant="bordered"
      selectedKeys={[pdfQualityInBook || "72"]}
      onChange={onChangeHandler}
    >
      <SelectSection title={"جودة الصور"}>
        <SelectItem key="48">منخفض</SelectItem>
        <SelectItem key="72">متوسط</SelectItem>
        <SelectItem key="128">عالي</SelectItem>
        <SelectItem key="195">فائق</SelectItem>
      </SelectSection>
    </Select>
  );
};
