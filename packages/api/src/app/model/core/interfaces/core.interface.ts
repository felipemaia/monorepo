import { Document } from "mongoose";

export interface Core extends Document {
    readonly name: string
    readonly age: number
}