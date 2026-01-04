import { Schema } from "mongoose";
import type { TFan } from "shared/src/types/Fan/Fan";

const FanSchema = new Schema<TFan>({
    isOn: {
        required: true,
        type: Boolean,
        default: false
    },
    requiresAuth: {
        required: true,
        type: Boolean,
        default: false
    },
    userInside: {
        required: true,
        type: Boolean,
        default: false
    },
    automatedSettings: {
        required: true,
        type: Boolean,
        default: false
    },
    turnOffAt: {
        required: false,
        type: Number
    },
    turnOnAt: {
        required: false,
        type: Number
    },
    power: {
        required: true,
        type: Number
    }
}, {timestamps: true})

export { FanSchema }