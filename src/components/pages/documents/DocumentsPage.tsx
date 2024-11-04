"use client";

import { FC, useEffect } from "react";

//Interfaces
import { IDocument } from "@/common/interfaces";

//Redux
import { useAppDispatch } from "@/lib/hooks";
import { setDocuments } from "@/lib/documents/actions";

//Components
import { DocumentsItems } from ".";
import { FilterSectionContainer } from "./FIlterSection";

interface IProps {
  documents: IDocument[];
}
export const DocumentsPage: FC<IProps> = ({ documents }) => {
  //Redux
  const dispatch = useAppDispatch();

  //Lifecycle
  useEffect(() => {
    dispatch(setDocuments(documents));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [documents]);

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-3 lg:gap-12 mt-5">
      <DocumentsItems />
      <FilterSectionContainer />
    </div>
  );
};
