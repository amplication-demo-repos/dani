import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DddService } from "./ddd.service";
import { DddControllerBase } from "./base/ddd.controller.base";

@swagger.ApiTags("ddds")
@common.Controller("ddds")
export class DddController extends DddControllerBase {
  constructor(protected readonly service: DddService) {
    super(service);
  }
}
