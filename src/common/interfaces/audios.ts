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
}

export interface ICategoryAudio extends ICategory {
  audios: IAudio[];
}
