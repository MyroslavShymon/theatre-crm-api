import { Module } from '@nestjs/common';
import { TheatreService } from './theatre.service';
import { TheatreController } from './theatre.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {Theatre, TheatreSchema} from "./schemas/theatre.schema";
import {PerformancesModule} from "../performances/performances.module";
import {UsersModule} from "../users/users.module";

@Module({
  imports: [MongooseModule.forFeature([{ name: Theatre.name, schema: TheatreSchema }]), PerformancesModule, UsersModule],
  controllers: [TheatreController],
  providers: [TheatreService],
  exports: [TheatreService]
})
export class TheatreModule {}
