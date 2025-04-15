import { FC } from "react";

interface IProps {
  biography: string | undefined;
}

export const BiographyContent: FC<IProps> = ({ biography }) => {
  return (
    <div
      className="ckeditor-output"
      dangerouslySetInnerHTML={{
        __html: biography || "",
      }}
    />
  );
};
