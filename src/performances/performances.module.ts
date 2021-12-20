import {Module} from '@nestjs/common';
import {PerformancesService} from './performances.service';
import {PerformancesController} from './performances.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {Performance, PerformanceSchema} from "./schemas/performance.schema";

@Module({
    imports: [MongooseModule.forFeature([{name: Performance.name, schema: PerformanceSchema}])],
    controllers: [PerformancesController],
    providers: [PerformancesService],
    exports: [PerformancesService]
})
export class PerformancesModule {
}
