import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, FilterQuery } from 'mongoose'
import { CreateBookDTO } from "./dto/create.book.dto";
import { Library } from "./schema/library.schema";

@Injectable()
export class LibraryService {
    constructor(
        @InjectModel(Library.name)
        private libraryModel: Model<Library>) { }

    async addBook(createBookDTO: CreateBookDTO) {
        try {

            const bookData = await this.libraryModel.create(createBookDTO)
            return bookData
        } catch (e) {
            if (e.code === 11000) {
                throw new HttpException("Book with given details already exists", HttpStatus.BAD_REQUEST)
            }
            throw new HttpException("Please check the data and request again", HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    async readBook(bookFilters: FilterQuery<Library>, page?, count?) {
        return await this.libraryModel.find(bookFilters, {}, page !== undefined ? { skip: (page - 1) * count, limit: count } : {})
    }

    async updateBook(findFilter: FilterQuery<Library>, updateObj) {
        return await this.libraryModel.findOneAndUpdate(findFilter, updateObj, { new: true })
    }

    async deleteBook(deleteFilter: FilterQuery<Library>) {
        return await this.libraryModel.findOneAndDelete(deleteFilter)
    }

}