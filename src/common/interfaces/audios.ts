import { ICategory, ITag } from ".";

export interface IAudiosState {
  audiosByCategories: ICategoryAudio[];
}

export interface IAudio {
  _id: string;
  url: string;
  title: string;
  description: string;
  thumbnail: string;
  category: ICategory;
  tags: { tag: ITag }[];
  createdAt: string;
}

export interface ICategoryAudio extends ICategory {
  audios: IAudio[];
}
