import {Module} from '@nestjs/common';
import {ActorService} from './actor.service';
import {ActorController} from './actor.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {Actor, ActorSchema} from "./schemas/actor.schema";
import {UsersModule} from "../users/users.module";
import {AwardsModule} from "../awards/awards.module";

@Module({
    imports: [MongooseModule.forFeature([{name: Actor.name, schema: ActorSchema}]), UsersModule, AwardsModule],
    controllers: [ActorController],
    providers: [ActorService],
    exports: [ActorService]
})
export class ActorModule {
}
