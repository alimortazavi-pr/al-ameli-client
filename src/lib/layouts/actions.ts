import { AppThunk } from "@/lib";

//Actions of other reducers

//Reducer
import { layoutsReducer } from ".";

//Actions from reducer
export const { setDarkMode, setIsOpenDrawer, setPageTitle } =
  layoutsReducer.actions;

//Interfaces

//Utils
import { storage } from "@/common/utils";

//Actions from actions
export function darkModeCheckerAction(): AppThunk {
  return async (dispatch) => {
    try {
      const darkMode = storage.getDarkMode();
      if (darkMode) {
        document.querySelector("html")?.classList.add("dark");
      } else {
        document.querySelector("html")?.classList.add("light");
      }
      dispatch(setDarkMode(darkMode));
    } catch (error) {
      console.log(error);
    }
  };
}

export function setDarkModeAction(darkMode: boolean): AppThunk {
  return async (dispatch) => {
    try {
      storage.setDarkMode(darkMode.toString());
      if (!darkMode) {
        document.querySelector("html")?.classList.remove("dark");
      } else {
        document.querySelector("html")?.classList.add("dark");
      }
      dispatch(setDarkMode(darkMode));
    } catch (error) {
      console.log(error);
    }
  };
}

export function darkModeToggleAction(): AppThunk {
  return async (dispatch, getState) => {
    try {
      const darkMode = getState().layouts.darkMode;
      storage.setDarkMode((!darkMode).toString());
      if (darkMode) {
        document.querySelector("html")?.classList.remove("dark");
      } else {
        document.querySelector("html")?.classList.add("dark");
      }
      dispatch(setDarkMode(!darkMode));
    } catch (error) {
      console.log(error);
    }
  };
}
