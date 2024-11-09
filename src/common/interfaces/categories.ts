import { CategoryTypeEnum } from "../enums";

export interface ICategoriesState {
  categories: ICategory[];
}

export interface ICategory {
  _id: string;
  name: string;
  parent: ICategory | string;
  type: CategoryTypeEnum;
}
