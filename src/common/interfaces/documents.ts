import { ICategory, ITag } from ".";

export interface IDocumentsState {
  documents: IDocument[];
  selectedDocument: IDocument | null;
  isDeleting: boolean;
}

export interface IDocument {
  _id: string;
  url: string;
  description: string;
  category: ICategory;
  tags: { tag: ITag }[];
}