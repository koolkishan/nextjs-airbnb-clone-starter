import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TripServiceBase } from "./base/trip.service.base";

@Injectable()
export class TripService extends TripServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
