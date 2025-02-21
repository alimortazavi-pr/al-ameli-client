"use client";

import { FC, useEffect } from "react";

//Interfaces
import { IDocument, ICategory, ITag } from "@/common/interfaces";

//Redux
import { useAppDispatch } from "@/lib/hooks";
import { setDocuments } from "@/lib/documents/actions";
import { setCategories } from "@/lib/categories/actions";
import { setTags } from "@/lib/tags/actions";
import { setPageTitle } from "@/lib/layouts/actions";

//Components
import { DocumentsItems } from ".";
import { FilterSectionContainer } from "./FIlterSection";

interface IProps {
  documents: IDocument[];
  tags: ITag[];
  categories: ICategory[];
}
export const DocumentsPage: FC<IProps> = ({ documents, categories, tags }) => {
  //Redux
  const dispatch = useAppDispatch();

  //Lifecycle
  useEffect(() => {
    dispatch(setPageTitle("وثائق"));
  }, []);

  useEffect(() => {
    dispatch(setDocuments(documents));
    dispatch(setCategories(categories));
    dispatch(setTags(tags));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [documents]);

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-3 lg:gap-12 mt-5">
      <DocumentsItems />
      <FilterSectionContainer />
    </div>
  );
};
