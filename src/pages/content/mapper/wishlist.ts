import { externalWishList } from "@pages/content/interface/wishlist";
import { Select } from "@pages/content/interface/select";

export const wishlistMapper = (
  wishListOptions: externalWishList[]
): Select[] => {
  return wishListOptions.map((w) => ({
    mainId: w._id,
    label: w.title,
    createdAt: w["Created Date"] || 0,
  }));
};

export const mapBaseOnResult = (result: externalWishList[], key: string) => {
  if (key === "wishlist") {
    return wishlistMapper(result as externalWishList[]);
  }
};

export const baseData = (data) => {
  const { activeSelection, storageAuth, pageTitle, storeName } = data;

  const images = activeSelection.images.map((image) => image.source);

  return {
    creator: storageAuth.user.id,
    product_name: pageTitle,
    store_name: storeName,
    brand_name: storeName,
    product_brand: storeName,
    url_product: window.location.href,
    product_price: "",
    is_chrome_extension: "true",
    "photo:list": images,
  };
};

export const wishListData = (data) => {
  const base = baseData(data);
  return {
    ...base,
    wishlist: data.activeSelection.selectedOptions.mainId,
    "OS.post_type": "product",
    "OS.sub_type": "Wishlists",
  };
};

export const closetData = (data) => {
  const base = baseData(data);
  return {
    ...base,
    "OS.post_type": "product",
    "OS.sub_type": "Closet",
    wishlist: "",
  };
};

export const pollData = (data) => {
  const base = baseData(data);
  return {
    ...base,
    "OS.sub_type": "Poll",
    "OS.post_type": "poll",
    "OS.poll_type": "user-images",
    "OS.poll_subtype": "I have some options!",
    "OS.poll_layout": "",
    poll_question: data.activeSelection.pollQuestion,
    wishlist: "",
  };
};
