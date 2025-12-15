import { Alert } from "@heroui/react";

export const AudioAiHint = () => {
  return (
    <Alert
      className="mb-5"
      description={
        " العناوين والنصوص في هذه الصفحة مستخرجة بواسطة الذكاء الإصطناعي"
      }
      title={""}
      color="warning"
    />
  );
};
