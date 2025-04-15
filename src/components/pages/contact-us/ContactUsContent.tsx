import { FC } from "react";

interface IProps {
  contactUs: string | undefined;
}

export const ContactUsContent: FC<IProps> = ({ contactUs }) => {
  return (
    <div
      className="ckeditor-output"
      dangerouslySetInnerHTML={{
        __html: contactUs || "",
      }}
    />
  );
};
