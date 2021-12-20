import {Injectable, NotFoundException} from '@nestjs/common';
import {CreateContractDto} from './dto/create-contract.dto';
import {UpdateContractDto} from './dto/update-contract.dto';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Contract, ContractDocument} from "./schemas/contract.schema";
import {TheatreService} from "../theatre/theatre.service";

@Injectable()
export class ContractsService {
    constructor(
        @InjectModel(Contract.name) private contractModel: Model<ContractDocument>,
        private readonly theatreService: TheatreService,
    ) {
    }

    async create(createContractDto: CreateContractDto): Promise<Contract> {
        const createdContract = new this.contractModel(createContractDto);
        const theatre = await this.theatreService.findOne(createContractDto.theatreId);

        theatre.contractIds.push(createdContract.id);
        await theatre.save()

        return createdContract.save();
    }

    async findAll(): Promise<Contract[]> {
        return this.contractModel.find().exec();
    }

    async findOne(id: number) {
        const contract = await this.contractModel.findById(id).exec();
        if (!contract) throw new NotFoundException('Контракт не знайдено');
        return contract;
    }

    update(id: number, updateContractDto: UpdateContractDto) {
        return `This action updates a #${id} contract`;
    }

    remove(id: number) {
        return `This action removes a #${id} contract`;
    }
}
