import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ListingServiceBase } from "./base/listing.service.base";

@Injectable()
export class ListingService extends ListingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
