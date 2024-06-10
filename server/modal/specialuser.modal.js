import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema1 = new Schema({
    firstname: {type: String,
    required: [true, 'First is required']},
    lastname: {type: String,
    required: [true, 'Surname is required']},
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        validate: {
            validator: (value) => {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message: 'Invalid email address'
        }
    },
    phone: {type: Number,
    required: [true, 'Phone is required']},
    education: {type: String,
    required: [true, 'Education is required']},
    address: {type: String,
    required: [true, 'Address is required']},
    batch: {type: String,
    required: [true, 'Batch is required']},
}, { timestamps: true });


const Special = mongoose.model('se_students', userSchema1);
export default Special;