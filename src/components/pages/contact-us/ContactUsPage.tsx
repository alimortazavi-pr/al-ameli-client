"use client";
import { FC } from "react";

//Components
import { ContactUsContent, ContactUsTitle } from ".";

interface IProps {
  contactUs: string | undefined;
}
export const ContactUsPage: FC<IProps> = ({ contactUs }) => {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-3 lg:gap-12 py-5">
      <div className="bg-background w-full min-h-fit z-20 rounded-xl shadow p-3 lg:py-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 mb-10">
          <ContactUsTitle />
        </div>
        <ContactUsContent contactUs={contactUs} />
      </div>
    </div>
  );
};
