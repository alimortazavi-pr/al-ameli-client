import { FC } from "react";

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
  contentType?: ContentTypes;
  headingLevel?: number;
  footnoteOrRemark?: boolean;
}
export const RenderContent: FC<IProps> = ({
  content,
  contentType,
  headingLevel,
  footnoteOrRemark,
}) => {
  if (content.data.case === "text") {
    switch (contentType) {
      case "heading":
        return (
          <HeadingContent
            pageNumber={content.pageNumber || 0}
            level={headingLevel as number}
          >
            {content.data.value.text}
          </HeadingContent>
        );
      case "poem":
        return (
          <PoemContent pageNumber={content.pageNumber || 0}>
            {content.data.value.text}
          </PoemContent>
        );
      case "ref":
        return (
          <RefContent pageNumber={content.pageNumber || 0}>
            {content.data.value.text}
          </RefContent>
        );
      case "footnote":
        return (
          <FootNoteContent pageNumber={content.pageNumber || 0}>
            {content.data.value.text}
          </FootNoteContent>
        );
      case "remark":
        return (
          <RemarkContent pageNumber={content.pageNumber || 0}>
            {content.data.value.text}
          </RemarkContent>
        );
      default:
        return (
          <SimpleTextContent
            pageNumber={content.pageNumber || 0}
            footnoteOrRemark={footnoteOrRemark}
          >
            {content.data.value.text}
          </SimpleTextContent>
        );
    }
  } else if (content.data.case === "heading") {
    return content.children?.map((content: IPageContent, i: number) => (
      <RenderContent
        key={i}
        content={content}
        contentType="heading"
        headingLevel={content.weight}
      />
    ));
  } else if (content.data.case === "image") {
    return (
      content.data.value.url && (
        <ImageContent
          caption={content.data.value.caption || ""}
          url={content.data.value.url}
        />
      )
    );
  } else if (content.data.case === "poem") {
    return content.children?.map((content: IPageContent, i: number) => (
      <RenderContent key={i} content={content} contentType="poem" />
    ));
  } else if (content.data.case === "ref") {
    return content.children?.map((content: IPageContent, i: number) => (
      <RenderContent key={i} content={content} contentType="ref" />
    ));
  } else if (content.data.case === "footnote") {
    return content.children?.map((content: IPageContent, i: number) => (
      <RenderContent
        key={i}
        content={content}
        contentType="footnote"
        footnoteOrRemark={true}
      />
    ));
  } else if (content.data.case === "remark") {
    return content.children?.map((content: IPageContent, i: number) => (
      <RenderContent
        key={i}
        content={content}
        contentType="remark"
        footnoteOrRemark={true}
      />
    ));
  } else {
    return "";
  }
};
