import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { databaseConfig } from './config/database.config';
import { LibraryModule } from './library/library.module';


@Module({
  imports: [
    MongooseModule.forRoot(databaseConfig.url),
    LibraryModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
