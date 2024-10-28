import { FC, ReactNode, useEffect, useState } from "react";
import {
  ActiveSelection,
  WishListContext,
} from "@pages/content/context/wishList/wishListContext";
import { postWithAuth } from "@pages/content/shared/requestHandler";
import authStorage from "@pages/content/shared/storages/authStorage";
import useStorage from "@pages/content/hooks/useStorage";
import {
  closetData,
  pollData,
  wishListData,
} from "@pages/content/mapper/wishlist";
import { usePopup } from "@pages/content/hooks/usePopup";
import { setStateWithPrev } from "@pages/content/shared/setStateWithPrev";
import WithImageSelectorListener from "@pages/content/shared/hoc/withEventListener";

interface PopupProviderProps {
  children?: ReactNode;
}

export const WishListProvider: FC<PopupProviderProps> = ({ children }) => {
  const storageAuth = useStorage(authStorage);
  const { pageTitle, storeName } = usePopup();

  const [activeSelection, setActiveSelection] = useState<ActiveSelection>({
    postType: "wishlist",
    selectedOptions: {
      mainId: "",
      label: "",
    },
    pollQuestion: "",
    images: [],
  });

  const { postType } = activeSelection;

  useEffect(() => {
    setStateWithPrev(setActiveSelection, {
      selectedOptions: {
        mainId: "",
        label: "",
      },
      pollQuestion: "",
    });
  }, [postType]);

  const handleDisabledSubmit = () => {
    switch (postType) {
      case "wishlist":
        return (
          activeSelection.images.length == 0 ||
          activeSelection.selectedOptions.mainId == "" ||
          storeName == "" ||
          pageTitle == ""
        );
      case "closet":
        return (
          activeSelection.images.length == 0 ||
          storeName == "" ||
          pageTitle == ""
        );
      case "poll":
        return (
          activeSelection.images.length == 0 ||
          storeName == "" ||
          pageTitle == ""
        );
      default:
        return false;
    }
  };

  const handleSubmitPost = async () => {
    const params = { activeSelection, storageAuth, pageTitle, storeName };

    const data = (() => {
      switch (postType) {
        case "wishlist":
          return wishListData(params);
        case "closet":
          return closetData(params);
        case "poll":
          return pollData(params);
        default:
          return null;
      }
    })();
    return await postWithAuth("/create_post", storageAuth.accessToken, data);
  };

  const value = {
    activeSelection,
    setActiveSelection,
    handleDisabledSubmit,
    handleSubmitPost,
  };

  return (
    <WishListContext.Provider value={value}>
      <WithImageSelectorListener>{children}</WithImageSelectorListener>
    </WishListContext.Provider>
  );
};
