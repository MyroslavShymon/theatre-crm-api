import {Module} from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {TheatreModule} from './theatre/theatre.module';
import {PerformancesModule} from './performances/performances.module';
import {AwardsModule} from './awards/awards.module';
import {ActorModule} from './actor/actor.module';
import {ContractsModule} from './contracts/contracts.module';
import { RolePerformanceModule } from './role-performance/role-performance.module';

@Module({
    imports: [
        MongooseModule.forRoot(`mongodb+srv://myroslavshymon:1@cluster0.vxgrm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`),
        TheatreModule,
        PerformancesModule,
        AwardsModule,
        ActorModule,
        ContractsModule,
        RolePerformanceModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
