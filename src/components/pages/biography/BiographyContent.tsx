import { FC } from "react";

interface IProps {
  biography: string | undefined;
}

export const BiographyContent: FC<IProps> = ({ biography }) => {
  return (
    <div
      className="ckeditor-output min-w-[900px]"
      dangerouslySetInnerHTML={{
        __html: biography || "",
      }}
    />
  );
};
