import { Wishlist as TWishlist } from "../api/wishlist/Wishlist";

export const WISHLIST_TITLE_FIELD = "id";

export const WishlistTitle = (record: TWishlist): string => {
  return record.id || String(record.id);
};
