import { createContext, Dispatch, SetStateAction } from "react";
import { ErrorAlert } from "@pages/content/interface/error";

export interface PopUp {
  popupOpen: boolean;
  setOpenPopup: Dispatch<SetStateAction<boolean>>;
  pageTitle: string;
  setPageTitle: Dispatch<SetStateAction<string>>;
  setStoreName: Dispatch<SetStateAction<string>>;
  storeName: string;
  error: ErrorAlert;
  handleSetError: (message: string | undefined) => Promise<void>;
}

export const PopupContext = createContext<PopUp>(null);
