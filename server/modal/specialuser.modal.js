import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema1 = new Schema({
    firstname: {
        type: String,
        required: [true, 'First name is required'],
        trim: true
    },
    lastname: {
        type: String,
        required: [true, 'Surname is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        lowercase: true,
        trim: true,
        validate: {
            validator: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
            message: 'Invalid email address'
        }
    },
    phone: {
        type: Number,
        required: [true, 'Phone number is required'],
        trim: true
    },
    education: {
        type: String,
        required: [true, 'Education is required'],
        trim: true
    },
    address: {
        type: String,
        required: [true, 'Address is required'],
        trim: true
    },
    batch: {
        type: String,
        required: [true, 'Batch is required'],
        trim: true
    }
}, { timestamps: true });

const Special = mongoose.model('specialuser', userSchema1);

export default Special;
