import { useContext } from "react";
import { PopupContext } from "@pages/content/context/popup/popupContext";

export const usePopup = () => useContext(PopupContext);
