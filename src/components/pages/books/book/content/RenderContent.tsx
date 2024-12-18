import { Dispatch, FC, SetStateAction } from "react";

//Types
import { IPageContent } from "@/common/interfaces";
import { ContentTypes } from "@/common/types";

//Components
import {
  FootNoteContent,
  HeadingContent,
  ImageContent,
  SimpleTextContent,
  RemarkContent,
  PoemContent,
  RefContent,
} from "./content-types-components";

interface IProps {
  content: IPageContent;
  pageIndex: number;
  contentType?: ContentTypes;
  addFootnotesFunc?: (footnote: IPageContent) => void;
  addRemarksFunc?: (remark: IPageContent) => void;
  setCurrentPageIndex?: Dispatch<SetStateAction<number>>;
  headingLevel?: number;
}
export const RenderContent: FC<IProps> = ({
  content,
  pageIndex,
  contentType,
  addFootnotesFunc,
  addRemarksFunc,
  setCurrentPageIndex,
  headingLevel,
}) => {
  if (Object.keys(content).includes("text")) {
    switch (contentType) {
      case "heading":
        return (
          <HeadingContent
            pageNumber={content.pageNumber || 0}
            level={headingLevel as number}
          >
            {content.text?.text}
          </HeadingContent>
        );
      case "poem":
        return (
          <PoemContent pageNumber={content.pageNumber || 0}>
            {content.text?.text}
          </PoemContent>
        );
      case "ref":
        return (
          <RefContent pageNumber={content.pageNumber || 0}>
            {content.text?.text}
          </RefContent>
        );
      case "footnote":
        return (
          <FootNoteContent pageNumber={content.pageNumber || 0}>
            {content.text?.text}
          </FootNoteContent>
        );
      case "remark":
        return (
          <RemarkContent pageNumber={content.pageNumber || 0}>
            {content.text?.text}
          </RemarkContent>
        );
      default:
        return (
          <SimpleTextContent pageNumber={content.pageNumber || 0}>
            {content.text?.text}
          </SimpleTextContent>
        );
    }
  } else if (Object.keys(content).includes("heading")) {
    return content.children?.map((content: IPageContent, i: number) => (
      <RenderContent
        key={i}
        content={content}
        pageIndex={pageIndex}
        contentType="heading"
        headingLevel={content.heading?.level}
      />
    ));
  } else if (Object.keys(content).includes("image")) {
    return (
      content.image?.url && (
        <ImageContent
          caption={content.image?.caption || ""}
          url={content.image?.url}
        />
      )
    );
  } else if (Object.keys(content).includes("footnote")) {
    if (addFootnotesFunc && setCurrentPageIndex) {
      content.children?.map((content: IPageContent) => {
        addFootnotesFunc(content);
      });
      setCurrentPageIndex(pageIndex);
    }
    return "";
  } else if (Object.keys(content).includes("poem")) {
    return content.children?.map((content: IPageContent, i: number) => (
      <RenderContent
        key={i}
        content={content}
        pageIndex={pageIndex}
        contentType="poem"
      />
    ));
  } else if (Object.keys(content).includes("ref")) {
    return content.children?.map((content: IPageContent, i: number) => (
      <RenderContent
        key={i}
        content={content}
        pageIndex={pageIndex}
        contentType="ref"
      />
    ));
  } else if (Object.keys(content).includes("remark")) {
    if (addRemarksFunc && setCurrentPageIndex) {
      content.children?.map((content: IPageContent) => {
        addRemarksFunc(content);
      });
      setCurrentPageIndex(pageIndex);
    }
    return "";
  } else {
    return "";
  }
};
