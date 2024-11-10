import { Button, Input } from "@nextui-org/react";
import { SearchNormal } from "iconsax-react";
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
    console.log("searching for:", value);

    router.replace(`${PATHS.DOCUMENTS}${query.add("search", value)}`);
  }

  return (
    <Input
      className="mb-5"
      classNames={{
        inputWrapper: "pe-1",
      }}
      endContent={
        <Button
          isIconOnly
          variant="light"
          color="primary"
          size="sm"
          onClick={handleSearch}
        >
          <SearchNormal className="w-5 h-5 text-primary-500" />
        </Button>
      }
      value={value}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
    />
  );
};
