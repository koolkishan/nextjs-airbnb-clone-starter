import { Listing } from "../listing/Listing";
import { User } from "../user/User";

export type Wishlist = {
  createdAt: Date;
  id: string;
  listing?: Listing | null;
  updatedAt: Date;
  user?: User | null;
};
