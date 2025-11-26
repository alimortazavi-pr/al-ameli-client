"use client";
import { FC } from "react";

//Components
import { PublishLicenseContent, PublishLicenseTitle } from ".";

interface IProps {
  publishLicense: string | undefined;
}
export const PublishLicensePage: FC<IProps> = ({ publishLicense }) => {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-3 lg:gap-12 py-5">
      <div className="bg-background w-full min-h-fit z-20 rounded-xl shadow p-3 lg:py-6 lg:px-8 overflow-x-auto px-2">
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 mb-10">
          <PublishLicenseTitle />
        </div>
        <PublishLicenseContent publishLicense={publishLicense} />
      </div>
    </div>
  );
};
