import {Module} from '@nestjs/common';
import {AwardsService} from './awards.service';
import {AwardsController} from './awards.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {Award, AwardSchema} from "./schemas/award.schema";

@Module({
    imports: [MongooseModule.forFeature([{name: Award.name, schema: AwardSchema}])],
    controllers: [AwardsController],
    providers: [AwardsService],
    exports: [AwardsService]
})
export class AwardsModule {
}
