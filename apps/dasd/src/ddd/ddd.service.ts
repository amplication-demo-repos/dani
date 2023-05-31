import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DddServiceBase } from "./base/ddd.service.base";

@Injectable()
export class DddService extends DddServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
