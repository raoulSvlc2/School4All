export interface IUsers{
    _id: string,
    familyName: string,
    lastname: string,
    email: string,
    password: string,
    role: string
}

export interface ILogin{
    email: string,
    password: string,
}