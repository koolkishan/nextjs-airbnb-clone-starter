import { InputJsonValue } from "../../types";
import { TripCreateNestedManyWithoutUsersInput } from "./TripCreateNestedManyWithoutUsersInput";
import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { WishlistCreateNestedManyWithoutUsersInput } from "./WishlistCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  trips?: TripCreateNestedManyWithoutUsersInput;
  user_Id?: ListingWhereUniqueInput | null;
  username: string;
  wishlists?: WishlistCreateNestedManyWithoutUsersInput;
};
