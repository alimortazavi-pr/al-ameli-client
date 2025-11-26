import { FC } from "react";

interface IProps {
  publishLicense: string | undefined;
}

export const PublishLicenseContent: FC<IProps> = ({ publishLicense }) => {
  return (
    <div
      className="ckeditor-output"
      dangerouslySetInnerHTML={{
        __html: publishLicense || "",
      }}
    />
  );
};
