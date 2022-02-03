import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Core } from "./interfaces/core.interface";
import { CoreInput } from "./inputs/core.input";

@Injectable()
export class CoreService {
    constructor(@InjectModel('Core') private readonly coreModel: Model<Core>) {}

    async create(coreInput: CoreInput): Promise<Core> {
        const createdCore = new this.coreModel(coreInput)
        return await createdCore.save()
    }

    async findAll(): Promise<Core[]> {
        return await this.coreModel.find().exec()
    }
}