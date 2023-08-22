import { Listing as TListing } from "../api/listing/Listing";

export const LISTING_TITLE_FIELD = "title";

export const ListingTitle = (record: TListing): string => {
  return record.title || String(record.id);
};
