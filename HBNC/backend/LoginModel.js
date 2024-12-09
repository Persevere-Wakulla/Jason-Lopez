import mongoose from "mongoose";

const loginSchema = mongoose.Schema(
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
        }
      
    },
    {
        timestamps: true,
    }
);
export const Login = mongoose.model('logins', loginSchema);