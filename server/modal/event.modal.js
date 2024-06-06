import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
    name:String,
    description:String,
    Teacher:String,
    imgsrc:String
});

const Event = mongoose.model("Event",eventSchema);


export default Event;