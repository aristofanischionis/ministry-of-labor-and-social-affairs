export type user = {
    first_name: string,
    last_name: string,
    email: string,
    occupation: string,
    company: string,
}

export type ReducerState = {
    user: user
}