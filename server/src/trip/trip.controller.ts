import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TripService } from "./trip.service";
import { TripControllerBase } from "./base/trip.controller.base";

@swagger.ApiTags("trips")
@common.Controller("trips")
export class TripController extends TripControllerBase {
  constructor(
    protected readonly service: TripService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
