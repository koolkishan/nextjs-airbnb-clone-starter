import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WishlistCreateInput = {
  listing?: ListingWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
