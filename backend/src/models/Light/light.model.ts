import { Schema } from "mongoose";
import type { TLight } from "shared/src/types/Light/Light";

const LightSchema = new Schema<TLight>({
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

export { LightSchema }