import { Args, Float, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CoreService } from "./core.service";
import { CoreType } from "./dto/core-type.dto";
import { CoreInput } from "./inputs/core.input";

@Resolver()
export class CoreResolver {
    constructor(
        private coreService: CoreService,
    ){}

    @Query(() => Float)
    uptime(){
        return process.uptime();
    }

    @Query(() => [CoreType])
    async cores(){
        return this.coreService.findAll()
    }

    @Mutation(() => CoreType)
    async createCore(@Args('input') input: CoreInput){
        return this.coreService.create(input)
    }
}