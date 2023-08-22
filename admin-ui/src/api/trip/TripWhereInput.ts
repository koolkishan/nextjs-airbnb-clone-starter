import { StringFilter } from "../../util/StringFilter";
import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TripWhereInput = {
  id?: StringFilter;
  listing?: ListingWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
