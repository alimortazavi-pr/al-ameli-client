import { Input } from "@nextui-org/react";
import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";

//Translation
// import { useClientTranslation } from "@/hooks/translation";

//Utils
// import { storage } from "@/common/utils";

interface IProps {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}
export const SearchBox: FC<IProps> = ({ search, setSearch }) => {
  //Translation
  // const { t } = useClientTranslation(storage.getLanguage());

  //Functions
  function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  function clearInputHandler() {
    setSearch("");
  }

  return (
    <div className="flex-1">
      <Input
        isClearable
        type="text"
        placeholder={"جستجو"}
        value={search}
        className="w-full"
        onChange={onChangeHandler}
        startContent={
          <span className="material-symbols-outlined text-default-600">
            search
          </span>
        }
        // isDisabled={isLoadingTableOfContent}
        onClear={clearInputHandler}
      />
    </div>
  );
};
