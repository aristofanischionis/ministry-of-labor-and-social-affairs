import {
    SET_USER,
    REMOVE_USER
} from './constants';
import { user } from './definitions';

export const setUserInStore = (user: user) =>({
    type: SET_USER,
    user
}) as const;

export const removeUserFromStore = () =>({
    type: REMOVE_USER,
}) as const;

export type Action = ReturnType< typeof setUserInStore | typeof removeUserFromStore >