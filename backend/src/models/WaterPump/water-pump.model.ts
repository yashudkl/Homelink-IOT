import { Schema } from "mongoose";
import type { TWaterPump } from "shared/src/types/WaterPump/WaterPump";

const WaterPumpSchema = new Schema<TWaterPump>({
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
    },
    power: {
        required: true,
        type: Number
    }
}, {timestamps: true})

export { WaterPumpSchema }