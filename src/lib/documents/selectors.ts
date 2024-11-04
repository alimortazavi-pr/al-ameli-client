//Types
import { IDocument } from "@/common/interfaces";
import { RootState } from "@/lib/index";

export function documentsSelector(state: RootState): IDocument[] {
  return state.documents.documents;
}
