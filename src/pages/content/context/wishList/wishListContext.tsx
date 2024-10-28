import { createContext, Dispatch, SetStateAction } from "react";

export interface Image {
  index: number;
  source: string;
}

export interface ActiveSelection {
  postType: string;
  selectedOptions: {
    mainId: string;
    label: string;
  };
  pollQuestion: string;
  images: Image[];
}

export interface WishList {
  activeSelection: ActiveSelection;
  setActiveSelection: Dispatch<SetStateAction<ActiveSelection>>;
  handleDisabledSubmit: () => boolean;
  handleSubmitPost: () => Promise<any>;
}

export const WishListContext = createContext<WishList | null>(null);
