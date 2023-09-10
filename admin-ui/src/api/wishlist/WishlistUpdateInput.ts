import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WishlistUpdateInput = {
  listing?: ListingWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
