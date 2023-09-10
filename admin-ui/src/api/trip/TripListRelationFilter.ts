import { TripWhereInput } from "./TripWhereInput";

export type TripListRelationFilter = {
  every?: TripWhereInput;
  some?: TripWhereInput;
  none?: TripWhereInput;
};
