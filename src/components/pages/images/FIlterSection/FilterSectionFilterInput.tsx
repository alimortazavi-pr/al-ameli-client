import { Button, Input } from "@nextui-org/react";
import { SearchNormal } from "iconsax-react";

export const FilterSectionFilterInput = () => {
  return (
    <Input
    className="mb-5"
    classNames={{
        inputWrapper:'pe-1'
    }}
      endContent={
        <Button isIconOnly variant="light" color="primary" size="sm">
          <SearchNormal className="w-5 h-5 text-primary-500" />
        </Button>
      }
    />
  );
};
