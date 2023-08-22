import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TripModuleBase } from "./base/trip.module.base";
import { TripService } from "./trip.service";
import { TripController } from "./trip.controller";
import { TripResolver } from "./trip.resolver";

@Module({
  imports: [TripModuleBase, forwardRef(() => AuthModule)],
  controllers: [TripController],
  providers: [TripService, TripResolver],
  exports: [TripService],
})
export class TripModule {}
