//Types
import { RootState } from "@/lib/index";

export function darkModeSelector(state: RootState): boolean {
  return state.layouts.darkMode;
}

export function isOpenDrawerSelector(state: RootState): boolean {
  return state.layouts.isOpenDrawer;
}
