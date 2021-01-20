import {
    SET_USER,
    REMOVE_USER,
    ADD_RESERVATION
} from './constants';
import { user, reservation_details } from './definitions';

export const setUserInStore = (user: user) =>({
    type: SET_USER,
    user
}) as const;

export const removeUserFromStore = () =>({
    type: REMOVE_USER,
}) as const;

export const addReservation = (details: reservation_details) =>({
    type: ADD_RESERVATION,
    details
}) as const;

export type Action = ReturnType< typeof setUserInStore | typeof removeUserFromStore | typeof addReservation>