import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { CoreResolver } from './model/core/core.resolver';
import { CoreModule } from './model/core/core.module';
import { CoreService } from './model/core/core.service';

@Module({
  imports: [
    CoreModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'schemas/schema.gql'),
      sortSchema: true,
      playground: true,
      debug: false,
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/graphql'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
