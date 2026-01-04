import { Schema } from "mongoose";
import type { TDoor } from "shared/src/types/Door/Door";

const DoorSchema = new Schema<TDoor>({
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
    }
}, {timestamps: true})

export { DoorSchema }