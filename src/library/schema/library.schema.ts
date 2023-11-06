import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'
import { ulid } from 'ulid'

export type LibraryDocument = HydratedDocument<Library>

@Schema()
export class Library {
    @Prop({
        index: true,
        default: ulid(),
    })
    bookId?: string

    @Prop({ unique: true, required: true })
    title: string

    @Prop({ required: true })
    author: string

    @Prop({ required: false, default: "NA" })
    summary?: string
}


export const LibrarySchema = SchemaFactory.createForClass(Library);