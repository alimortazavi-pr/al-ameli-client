import { ICategory, ITag } from ".";

export interface IImagesState {
  imagesByCategories: ICategoryImage[];
}

export interface IImage {
  _id: string;
  url: string;
  description: string;
  thumbnail: string;
  category: ICategory;
  tags: { tag: ITag }[];
}

export interface ICategoryImage extends ICategory {
  images: IImage[];
}
