import { TripWhereUniqueInput } from "./TripWhereUniqueInput";
import { TripUpdateInput } from "./TripUpdateInput";

export type UpdateTripArgs = {
  where: TripWhereUniqueInput;
  data: TripUpdateInput;
};
