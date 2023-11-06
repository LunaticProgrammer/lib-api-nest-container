import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Library, LibrarySchema } from "./schema/library.schema";
import { LibraryController } from "./library.controller";
import { LibraryService } from "./library.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: Library.name, schema: LibrarySchema }])],
    controllers: [LibraryController],
    providers: [LibraryService]
})
export class LibraryModule { }