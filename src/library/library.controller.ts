import { Body, ClassSerializerInterceptor, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post, Query, UseInterceptors } from "@nestjs/common";
import { LibraryService } from "./library.service";
import { CreateBookDTO } from "./dto/create.book.dto";
import { ValidationPipe } from "@nestjs/common";
import { UsePipes } from "@nestjs/common";
import { UpdateBookDTO } from "./dto/update.book.dto";

@Controller({ 'path': 'library' })
export class LibraryController {
    constructor(private readonly libraryService: LibraryService) { }

    @Post()
    @UsePipes(ValidationPipe)
    async addBook(@Body() createBookBody: CreateBookDTO) {
        return await this.libraryService.addBook(createBookBody)
    }

    @Get('/:bookId')
    async getBookById(@Param('bookId') bookId: string) {
        const data = await this.libraryService.readBook({ bookId })
        if (!data.length) {
            throw new HttpException('No Books Found', HttpStatus.NOT_FOUND)
        }
        return data[0]
    }

    @Get('')
    async getBook(@Query('page') page, @Query('count') count) {
        const data = await this.libraryService.readBook({}, page, count)
        if (!data.length) {
            throw new HttpException('No Books Found', HttpStatus.NOT_FOUND)
        }
        return data
    }

    @Patch('/:bookId')
    @UsePipes(ValidationPipe)
    async updateBookById(@Param('bookId') bookId: string, @Body() updateObj: UpdateBookDTO) {
        const data = await this.libraryService.updateBook({ bookId }, updateObj)
        if (!data?.title) {
            throw new HttpException("No Books found with given ID", HttpStatus.BAD_REQUEST)
        }
        return data
    }

    @Delete('/:bookId')
    async deleteBookById(@Param('bookId') bookId: string) {
        const data = await this.libraryService.deleteBook({ bookId })
        if (!data?.title) {
            throw new HttpException("No Books find with the given ID", HttpStatus.BAD_REQUEST)
        }

        return "Deleted"
    }
}