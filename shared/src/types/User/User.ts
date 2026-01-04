export interface TUser<T=string>{
    _id: T,
    email: string,
    name: string,
    password: string
}