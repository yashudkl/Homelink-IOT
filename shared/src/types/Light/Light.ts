export interface TLight {
    isOn: boolean,
    requiresAuth: boolean,
    userInside: boolean,
    automatedSettings: boolean,
    turnOffAt?: number,
    turnOnAt?: number,
    power: number
}