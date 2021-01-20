export type user = {
    first_name: string,
    last_name: string,
    email: string,
    occupation: string,
    company: string,
}

export type reservation_details = {
    firstName: string,
    lastName: string,
    email: string,
    speciality: string,
    date: string,
    time: string,
}

export type ReducerState = {
    user: user,
    reservations: Array<reservation_details>
}
