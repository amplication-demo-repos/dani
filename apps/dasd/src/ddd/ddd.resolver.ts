import * as graphql from "@nestjs/graphql";
import { DddResolverBase } from "./base/ddd.resolver.base";
import { Ddd } from "./base/Ddd";
import { DddService } from "./ddd.service";

@graphql.Resolver(() => Ddd)
export class DddResolver extends DddResolverBase {
  constructor(protected readonly service: DddService) {
    super(service);
  }
}
