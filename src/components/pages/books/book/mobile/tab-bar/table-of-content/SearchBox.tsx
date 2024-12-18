/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "@nextui-org/react";
import { Dispatch, FC, SetStateAction } from "react";

//Translation
// import { useClientTranslation } from "@/hooks/translation";

// //Utils
// import { storage } from "@/common/utils";

interface IProps {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}
export const SearchBox: FC<IProps> = ({ search, setSearch }) => {
  //Translation
  // const { t } = useClientTranslation(storage.getLanguage());

  //Functions
  const onChangeHandler = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <Input
      type="text"
      placeholder={'جستجو'}
      value={search}
      className="w-full mb-6"
      onChange={onChangeHandler}
      startContent={
        <span className="material-symbols-outlined text-default-600">
          search
        </span>
      }
      // isDisabled={isLoadingTableOfContent}
    />
  );
};
