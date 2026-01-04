export interface TDoor {
    isOn: boolean,
    requiresAuth: boolean,
    automatedSettings: boolean,
    turnOffAt?: number,
    turnOnAt?: number,
}