import {BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import {CreateActorDto} from './dto/create-actor.dto';
import {UpdateActorDto} from './dto/update-actor.dto';
import {InjectModel} from "@nestjs/mongoose";
import {Actor, ActorDocument} from "./schemas/actor.schema";
import {Model} from "mongoose";
import * as mongoose from "mongoose";
import {UsersService} from "../users/users.service";
import {AddAwardDto} from "./dto/add-award.dto";
import {AwardsService} from "../awards/awards.service";

@Injectable()
export class ActorService {
    constructor(
        @InjectModel(Actor.name) private actorModel: Model<ActorDocument>,
        private readonly usersService: UsersService,
        private readonly awardsService: AwardsService,
    ) {
    }

    async create({experience, userId}: CreateActorDto): Promise<Actor> {
        await this.usersService.findOne(userId);

        const actor = await this.actorModel.findOne({userId: new mongoose.Types.ObjectId(userId)}).exec();
        if (actor) {
            throw new BadRequestException(`Актор в якого id користувача дорівнює ${userId} вже існує`)
        }

        const createdActor = new this.actorModel({experience, userId: new mongoose.Types.ObjectId(userId)});
        return createdActor.save();
    }

    async addAwardToActor({actorId, awardId}: AddAwardDto) {
        const actor = await this.findOne(actorId);

        await this.awardsService.findOne(awardId);
        const actorsAward = await this.actorModel.findOne({awardIds: awardId, _id: actorId}).exec();
        if (actorsAward) throw new BadRequestException('Нагорода вже додано до цього актора')

        actor.awardIds.push(new mongoose.Types.ObjectId(awardId));
        return actor.save();
    }

    async findAll(): Promise<Actor[]> {
        return this.actorModel.find().exec();
    }

    async findOne(id: string) {
        const actor = await this.actorModel.findById(id).exec();
        if (!actor) throw new NotFoundException('Актора не знайдено');
        return actor;
    }

    update(id: number, updateActorDto: UpdateActorDto) {
        return `This action updates a #${id} actor`;
    }

    remove(id: number) {
        return `This action removes a #${id} actor`;
    }
}
