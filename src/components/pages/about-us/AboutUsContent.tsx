import { FC } from "react";

interface IProps {
  aboutUs: string | undefined;
}

export const AboutUsContent: FC<IProps> = ({ aboutUs }) => {
  return (
    <div
      className="ckeditor-output"
      dangerouslySetInnerHTML={{
        __html: aboutUs || "",
      }}
    />
  );
};
