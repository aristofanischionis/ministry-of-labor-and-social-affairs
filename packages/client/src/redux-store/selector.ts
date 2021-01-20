/**
 * Selectors
 */
import { ReducerState } from './definitions';

const getUserFromStore = (state: { main_reducer: ReducerState; }) => state.main_reducer.user;
const getReservations = (state: { main_reducer: ReducerState; }) => state.main_reducer.reservations;

export {
    getUserFromStore,
    getReservations
};