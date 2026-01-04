export interface TWaterPump {
    isOn: boolean,
    requiresAuth: boolean,
    automatedSettings: boolean,
    turnOffAt?: number,
    turnOnAt?: number,
    power: number
}