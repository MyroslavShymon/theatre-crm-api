import { Module } from '@nestjs/common';
import { RolePerformanceService } from './role-performance.service';
import { RolePerformanceController } from './role-performance.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {RolePerformance, RolePerformanceSchema} from "./schemas/role-performance.schema";
import {PerformancesModule} from "../performances/performances.module";
import {ActorModule} from "../actor/actor.module";

@Module({
  imports: [MongooseModule.forFeature([{name: RolePerformance.name, schema: RolePerformanceSchema}]), PerformancesModule, ActorModule],
  controllers: [RolePerformanceController],
  providers: [RolePerformanceService]
})
export class RolePerformanceModule {}
