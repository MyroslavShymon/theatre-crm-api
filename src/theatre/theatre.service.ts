import {BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import {CreateTheatreDto} from './dto/create-theatre.dto';
import {UpdateTheatreDto} from './dto/update-theatre.dto';
import {InjectModel} from "@nestjs/mongoose";
import {Model, Schema} from "mongoose";
import {Theatre, TheatreDocument} from "./schemas/theatre.schema";
import {AddPerformanceDto} from "./dto/add-performance.dto";
import * as mongoose from "mongoose";
import {PerformancesService} from "../performances/performances.service";
import {UsersService} from "../users/users.service";
import {AddAdministratorDto} from "./dto/add-administrator.dto";

@Injectable()
export class TheatreService {
    constructor(
        @InjectModel(Theatre.name) private theatreModel: Model<TheatreDocument>,
        private readonly performanceService: PerformancesService,
        private readonly usersService: UsersService
    ) {
    }

    async create(createTheatreDto: CreateTheatreDto): Promise<Theatre> {
        const createdTheatre = new this.theatreModel(createTheatreDto);

        const administrator = await this.usersService.findOne(createTheatreDto.userId);
        createdTheatre.administratorIds.push(administrator.id);
        await createdTheatre.save();

        return createdTheatre.save();
    }

    async addAdministratorToTheatre({theatreId, userId}: AddAdministratorDto) {
        const theatre = await this.findOne(theatreId);

        await this.usersService.findOne(userId);
        const administrator = await this.theatreModel.findOne({administratorIds: userId, _id: theatreId}).exec()
        if (administrator) throw new BadRequestException('Коитсувач вже є адміністратором')

        theatre.administratorIds.push(new mongoose.Types.ObjectId(userId));
        return theatre.save();
    }

    async findAll() {
        return this.theatreModel.find().exec();
    }

    async addPerformance({performanceId, theatreId}: AddPerformanceDto) {
        const theatre = await this.findOne(theatreId);

        await this.performanceService.findOne(performanceId);
        const performance = await this.theatreModel.findOne({performanceIds: performanceId, _id: theatreId}).exec()
        if (performance) throw new BadRequestException('Виступ вже додано до цього театру')

        theatre.performanceIds.push(new mongoose.Types.ObjectId(performanceId));
        return theatre.save();
    }


    async findOne(id: string) {
        const theatre = await this.theatreModel.findById(id).exec();
        if (!theatre) throw new NotFoundException('Театр не знайдено');
        await theatre.populate({
            path: 'performanceIds',
            populate: {
                path: "rolePerformanceId",
                populate: {
                    path: "actorIds",
                    populate: {
                        path: "userId"
                    }
                }
            }
        })
        await theatre.populate({
            path: "contractIds", populate: {
                path: "actorId", populate: {
                    path: "userId"
                }
            }
        })
        await theatre.populate({path: 'administratorIds'})
        return theatre;
    }

    update(id: number, updateTheatreDto: UpdateTheatreDto) {
        return `This action updates a #${id} theatre`;
    }

    remove(id: number) {
        return `This action removes a #${id} theatre`;
    }
}
