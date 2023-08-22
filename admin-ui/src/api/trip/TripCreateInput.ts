import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TripCreateInput = {
  listing?: ListingWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
