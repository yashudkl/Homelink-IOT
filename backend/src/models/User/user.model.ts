import { Schema } from "mongoose";
import type { TUser } from  "shared/src/types/User/User";

const UserSchema = new Schema<TUser>({
    email: {
        required: true,
        type: String,
        unique: true
    },
    name: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    }
}, {timestamps: true})

export { UserSchema }