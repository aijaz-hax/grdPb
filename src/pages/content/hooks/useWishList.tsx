import { useContext } from "react";
import { WishListContext } from "@pages/content/context/wishList/wishListContext";

export const useWishList = () => useContext(WishListContext);
