import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ListingListRelationFilter } from "../listing/ListingListRelationFilter";
import { TripListRelationFilter } from "../trip/TripListRelationFilter";
import { WishlistListRelationFilter } from "../wishlist/WishlistListRelationFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  listing?: ListingListRelationFilter;
  trips?: TripListRelationFilter;
  username?: StringFilter;
  wishlists?: WishlistListRelationFilter;
};
