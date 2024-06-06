import mongoose from "mongoose";

const specialSchema = mongoose.Schema({
    name:String,
    description:String,
    Teacher:String,
    imgsrc:String
});

const Special = mongoose.model("Special",specialSchema);


export default Special;