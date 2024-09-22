import { CategoryTypeEnum } from "../enums";

export interface ICategoriesState {
  categories: ICategory[];
  selectedCategory: ICategory | null;
  isDeleting: boolean;
}

export interface ICategory {
  _id: string;
  name: string;
  parent: ICategory | string;
  type: CategoryTypeEnum;
}