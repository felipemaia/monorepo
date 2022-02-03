import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CoreResolver } from "./core.resolver";
import { CoreSchema } from "./core.schema";
import { CoreService } from "./core.service";

@Module({
    imports: [MongooseModule.forFeature([{name: 'Core', schema: CoreSchema}])],
    providers: [CoreResolver, CoreService],
})

export class CoreModule {}