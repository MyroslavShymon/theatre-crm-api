import {BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import {CreateRolePerformanceDto} from './dto/create-role-performance.dto';
import {UpdateRolePerformanceDto} from './dto/update-role-performance.dto';
import {RolePerformance, RolePerformanceDocument} from "./schemas/role-performance.schema";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {UsersService} from "../users/users.service";
import {PerformancesService} from "../performances/performances.service";
import {AddActorPerformanceDto} from "./dto/add-actor-performance.dto";
import * as mongoose from "mongoose";
import {ActorService} from "../actor/actor.service";

@Injectable()
export class RolePerformanceService {
    constructor(
        @InjectModel(RolePerformance.name) private rolePerformanceModel: Model<RolePerformanceDocument>,
        private readonly performancesService: PerformancesService,
        private readonly actorService: ActorService,
    ) {
    }

    async create(createRolePerformanceDto: CreateRolePerformanceDto): Promise<RolePerformance> {
        const createdRolePerformance = new this.rolePerformanceModel(createRolePerformanceDto);

        const performance = await this.performancesService.findOne(createRolePerformanceDto.performanceId);
        performance.rolePerformanceId.push(createdRolePerformance.id);
        await performance.save();

        return createdRolePerformance.save();
    }

    async addActorsToRolePerformance({rolePerformanceId, actorId}: AddActorPerformanceDto) {
        const rolePerformance = await this.findOne(rolePerformanceId);

        await this.actorService.findOne(actorId);
        const actor = await this.rolePerformanceModel.findOne({actorIds: actorId, _id: rolePerformanceId}).exec()
        if (actor) throw new BadRequestException('Ви вже додали цього актора до цієї ролі')

        rolePerformance.actorIds.push(new mongoose.Types.ObjectId(actorId));
        return rolePerformance.save();
    }

    async findAll(): Promise<RolePerformance[]> {
        return this.rolePerformanceModel.find().exec();
    }

    async findOne(id: string) {
        const rolePerformance = await this.rolePerformanceModel.findById(id).exec();
        if (!rolePerformance) throw new NotFoundException('Ролі не знайдено');
        return rolePerformance;
    }

    update(id: number, updateRolePerformanceDto: UpdateRolePerformanceDto) {
        return `This action updates a #${id} rolePerformance`;
    }

    remove(id: number) {
        return `This action removes a #${id} rolePerformance`;
    }
}
