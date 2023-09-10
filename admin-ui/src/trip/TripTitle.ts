import { Trip as TTrip } from "../api/trip/Trip";

export const TRIP_TITLE_FIELD = "id";

export const TripTitle = (record: TTrip): string => {
  return record.id || String(record.id);
};
