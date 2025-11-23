import { ICategory, ITag } from ".";

export interface IDocumentsState {
  documents: IDocument[];
}

export interface IDocument {
  _id: string;
  title: string;
  url?: string;
  urls: string[];
  description: string;
  category: ICategory;
  tags: { tag: ITag }[];
}
