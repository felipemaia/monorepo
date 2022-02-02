import * as mongoose from 'mongoose';

export const CoreSchema = new mongoose.Schema({
    name: String,
    age: Number
})