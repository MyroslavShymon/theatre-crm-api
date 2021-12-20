import { Module } from '@nestjs/common';
import { ContractsService } from './contracts.service';
import { ContractsController } from './contracts.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {Contract, ContractSchema} from "./schemas/contract.schema";
import {TheatreModule} from "../theatre/theatre.module";

@Module({
  imports: [MongooseModule.forFeature([{name: Contract.name, schema: ContractSchema}]), TheatreModule],
  controllers: [ContractsController],
  providers: [ContractsService]
})
export class ContractsModule {}
