import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CoreResolver } from "./core.resolver";
import { CoreSchema } from "./core.schema";

@Module({
    imports: [MongooseModule.forFeature([{name: 'String', schema: CoreSchema}])],
    providers: [CoreResolver],
    
})

export class CoreModule {}