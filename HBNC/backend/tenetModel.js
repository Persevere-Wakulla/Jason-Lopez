import mongoose from "mongoose";


const tenetSchema = mongoose.Schema({
    page: Number,
    script: String
})

export const Tenet = mongoose.model('tenets', tenetSchema)

