import {Injectable, NotFoundException} from '@nestjs/common';
import {CreatePerformanceDto} from './dto/create-performance.dto';
import {UpdatePerformanceDto} from './dto/update-performance.dto';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Performance, PerformanceDocument} from "./schemas/performance.schema";

@Injectable()
export class PerformancesService {
    constructor(@InjectModel(Performance.name) private performanceModel: Model<PerformanceDocument>) {
    }

    async create(createPerformanceDto: CreatePerformanceDto): Promise<Performance> {
        const createdPerformance = new this.performanceModel(createPerformanceDto);
        return createdPerformance.save();
    }

    async findAll(): Promise<Performance[]> {
        return this.performanceModel.find().exec();
    }

    async findOne(id: string) {
        const performance = await this.performanceModel.findById(id).exec();
        if (!performance) throw new NotFoundException('Виступ не знайдено');
        return performance;
    }

    update(id: number, updatePerformanceDto: UpdatePerformanceDto) {
        return `This action updates a #${id} performance`;
    }

    remove(id: number) {
        return `This action removes a #${id} performance`;
    }
}
