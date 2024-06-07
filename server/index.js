import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import bookRoute from "./route/book.route.js";
import User from './route/user.route.js'; // Make sure this path is correct
import contactRoute from './route/contact.route.js';
import eventRoute from './route/event.route.js';
import specialRoute from './route/special.route.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 2000;
const URI = "mongodb+srv://dhurir163:Rohit%401223@cluster0.ggspzxv.mongodb.net/myDatabase?retryWrites=true&w=majority";

// Log the URI to ensure it is being read correctly
console.log('MongoDB URI:', URI);

app.use(cors({
    origin: ["https://bookstore1-ten.vercel.app","http://localhost:4200","https://event-hub-eta-rust.vercel.app"], // frontend link
    methods: ["POST", "GET"],
    credentials: true
}));

app.use(express.json());

const connectToDatabase = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

connectToDatabase();

app.get("/", (req, res) => {
    res.json("Hello");
});

// Defining Routes
app.use("/book", bookRoute);
app.use("/user", User);
app.use("/contact", contactRoute);
//Events Route
app.use("/event", eventRoute);
app.use("/special", specialRoute);


app.listen(port, () => {
    console.log(`Server running on localhost:${port}`);
});
