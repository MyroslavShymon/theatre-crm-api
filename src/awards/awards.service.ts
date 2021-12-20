import {Injectable, NotFoundException} from '@nestjs/common';
import {CreateAwardDto} from './dto/create-award.dto';
import {UpdateAwardDto} from './dto/update-award.dto';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Award, AwardDocument} from "./schemas/award.schema";

@Injectable()
export class AwardsService {
    constructor(
        @InjectModel(Award.name) private awardModel: Model<AwardDocument>
    ) {
    }

    create(createAwardDto: CreateAwardDto): Promise<Award> {
        const createdAward = new this.awardModel(createAwardDto);
        return createdAward.save();
    }

    findAll(): Promise<Award[]> {
        return this.awardModel.find().exec();
    }

    async findOne(id: string) {
        const award = await this.awardModel.findById(id).exec();
        if (!award) throw new NotFoundException('Винагороди не знайдено');
        return award;
    }

    update(id: number, updateAwardDto: UpdateAwardDto) {
        return `This action updates a #${id} award`;
    }

    remove(id: number) {
        return `This action removes a #${id} award`;
    }
}
