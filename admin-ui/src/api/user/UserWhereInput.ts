import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TripListRelationFilter } from "../trip/TripListRelationFilter";
import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { WishlistListRelationFilter } from "../wishlist/WishlistListRelationFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  trips?: TripListRelationFilter;
  user_Id?: ListingWhereUniqueInput;
  username?: StringFilter;
  wishlists?: WishlistListRelationFilter;
};
