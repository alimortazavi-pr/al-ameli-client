import { Button, Input } from "@heroui/react";
import useQuery from "next-app-use-query";
import { useRouter } from "next-nprogress-bar";
import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";

//Constants
import { PATHS } from "@/common/constants";

export const FilterSectionFilterInput = () => {
  //Next
  const router = useRouter();

  //Other hooks
  const query = useQuery();

  //States
  const [value, setValue] = useState<string>("");

  //Lifecycle
  useEffect(() => {
    const searchQuery = query.get("search");
    if (searchQuery && searchQuery !== value) {
      setValue(searchQuery);
    }
  }, [query.get("search")]);

  //Functions
  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      handleSearch();
    }
  }

  function handleSearch() {
    const searchQuery = query.get("search");
    if ((!searchQuery && !value) || searchQuery === value) {
      return;
    }
    router.replace(`${PATHS.ARTICLES}${query.add("search", value)}`);
  }

  function handleClear() {
    setValue("");
    router.replace(`${PATHS.ARTICLES}${query.delete("search")}`);
  }

  return (
    <Input
      className="mb-5"
      classNames={{
        inputWrapper: "pe-1",
      }}
      endContent={
        <div className="flex items-center gap-1">
          <Button
            isIconOnly
            variant="light"
            color="primary"
            size="sm"
            onPress={handleClear}
            className={`${
              value.length > 0 ? "opacity-100" : "opacity-0"
            } duration-300`}
          >
            <span className="material-symbols-outlined">cancel</span>
          </Button>
          <Button
            isIconOnly
            variant="light"
            color="primary"
            size="sm"
            onPress={handleSearch}
          >
            <span className="material-symbols-outlined">search</span>
          </Button>
        </div>
      }
      value={value}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
    />
  );
};
