import { Float, Query, Resolver } from "@nestjs/graphql";
import { Model } from "mongoose";
import { CoreService } from "./core.service";
import { CreateCoreDto } from "./dto/create-core.dto";
import { Core } from "./interfaces/core.interface";

@Resolver()
export class CoreResolver {
    constructor(
        //private coreService: CoreService,
    ){}

    @Query(() => Float)
    uptime(){
        return process.uptime();
    }

    

    
}