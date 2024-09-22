export interface ITagsState {
  tags: ITag[];
  selectedTag: ITag | null;
  isDeleting: boolean;
}

export interface ITag {
  _id: string;
  name: string;
}
