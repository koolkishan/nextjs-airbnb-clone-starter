import { WishlistWhereInput } from "./WishlistWhereInput";
import { WishlistOrderByInput } from "./WishlistOrderByInput";

export type WishlistFindManyArgs = {
  where?: WishlistWhereInput;
  orderBy?: Array<WishlistOrderByInput>;
  skip?: number;
  take?: number;
};
