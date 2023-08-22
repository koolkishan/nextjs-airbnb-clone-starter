import { JsonValue } from "type-fest";
import { Trip } from "../trip/Trip";
import { Listing } from "../listing/Listing";
import { Wishlist } from "../wishlist/Wishlist";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  trips?: Array<Trip>;
  updatedAt: Date;
  user_Id?: Listing | null;
  username: string;
  wishlists?: Array<Wishlist>;
};
