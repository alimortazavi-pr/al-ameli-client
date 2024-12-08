//Types
import { RootState } from "@/lib/index";

export function loadingStatusSelector(state: RootState): boolean {
  return state.loading.loadingStatus;
}

export function isLoadingGlobalSelector(state: RootState): boolean {
  return state.loading.isLoadingGlobal;
}

export function isLoadingBooksListSelector(state: RootState): boolean {
  return state.loading.isLoadingBooksList;
}

export function isLoadingBookDetailSelector(state: RootState): boolean {
  return state.loading.isLoadingBookDetail;
}
