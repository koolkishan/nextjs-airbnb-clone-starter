import { StringFilter } from "../../util/StringFilter";
import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WishlistWhereInput = {
  id?: StringFilter;
  listing?: ListingWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
