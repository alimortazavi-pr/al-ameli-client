import { ICategory, ITag } from ".";

export interface IDocumentsState {
  documents: IDocument[];
}

export interface IDocument {
  _id: string;
  url: string;
  description: string;
  category: ICategory;
  tags: { tag: ITag }[];
}
