import { InputJsonValue } from "../../types";
import { TripUpdateManyWithoutUsersInput } from "./TripUpdateManyWithoutUsersInput";
import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { WishlistUpdateManyWithoutUsersInput } from "./WishlistUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  trips?: TripUpdateManyWithoutUsersInput;
  user_Id?: ListingWhereUniqueInput | null;
  username?: string;
  wishlists?: WishlistUpdateManyWithoutUsersInput;
};
