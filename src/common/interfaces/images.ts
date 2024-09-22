import { ICategory, ITag } from ".";

export interface IImagesState {
  images: IImage[];
  selectedImage: IImage | null;
  isDeleting: boolean;
}

export interface IImage {
  _id: string;
  url: string;
  thumbnail: string;
  category: ICategory;
  tags: { tag: ITag }[];
}