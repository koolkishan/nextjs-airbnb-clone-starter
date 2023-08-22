import { ListingWhereInput } from "./ListingWhereInput";
import { ListingOrderByInput } from "./ListingOrderByInput";

export type ListingFindManyArgs = {
  where?: ListingWhereInput;
  orderBy?: Array<ListingOrderByInput>;
  skip?: number;
  take?: number;
};
