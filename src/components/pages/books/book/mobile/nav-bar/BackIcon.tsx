import { Button } from "@nextui-org/react";
import { useRouter } from "next-nprogress-bar";

export const BackIcon = () => {
  //Redux

  //Next
  const router = useRouter();

  //Functions
  function handleBack() {
    router.push(`/`);
  }

  return (
    <Button
      isIconOnly
      color="default"
      variant="light"
      aria-label="back-icon"
      onClick={handleBack}
    >
      <span className="material-symbols-outlined">arrow_forward</span>
    </Button>
  );
};
