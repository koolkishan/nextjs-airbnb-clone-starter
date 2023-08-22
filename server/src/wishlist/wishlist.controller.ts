import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WishlistService } from "./wishlist.service";
import { WishlistControllerBase } from "./base/wishlist.controller.base";

@swagger.ApiTags("wishlists")
@common.Controller("wishlists")
export class WishlistController extends WishlistControllerBase {
  constructor(
    protected readonly service: WishlistService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
