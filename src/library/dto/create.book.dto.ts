import { IsOptional, IsString } from 'class-validator'

export class CreateBookDTO {
    @IsString()
    title: string

    @IsString()
    author: string

    @IsString()
    @IsOptional()
    summary?: string
}