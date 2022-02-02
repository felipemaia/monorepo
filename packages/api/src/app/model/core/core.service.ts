import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Core } from "./interfaces/core.interface";
import { CreateCoreDto } from "./dto/create-core.dto";

@Injectable()
export class CoreService {
    constructor(@InjectModel('Core') private readonly coreModel: Model<Core>) {}

    async create(createCoreDto: CreateCoreDto): Promise<Core> {
        const createdCore = new this.coreModel(createCoreDto)
        return await createdCore.save()
    }

    async findAll(): Promise<Core[]> {
        return await this.coreModel.find().exec()
    }
}