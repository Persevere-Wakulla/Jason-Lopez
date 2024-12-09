import mongoose from "mongoose";

const signupSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        
        password: {
            type: String,
            reqired: true,
        },
        email: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        zip: {
            type: String,
            required: true,
        },
        tribe: {
            type: String,
            required: true,
        }
        
      
    },
    {
        timestamps: true,
    }
);
export const Signup = mongoose.model('signups', signupSchema);