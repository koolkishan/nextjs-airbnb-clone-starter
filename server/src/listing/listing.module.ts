import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ListingModuleBase } from "./base/listing.module.base";
import { ListingService } from "./listing.service";
import { ListingController } from "./listing.controller";
import { ListingResolver } from "./listing.resolver";

@Module({
  imports: [ListingModuleBase, forwardRef(() => AuthModule)],
  controllers: [ListingController],
  providers: [ListingService, ListingResolver],
  exports: [ListingService],
})
export class ListingModule {}
