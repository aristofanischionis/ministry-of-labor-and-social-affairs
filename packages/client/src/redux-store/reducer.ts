import produce from 'immer';
import { Action } from './actions';
import { ReducerState } from './definitions';
import { SET_USER, REMOVE_USER, ADD_RESERVATION } from './constants';

export let initialState:ReducerState = {
  user: {
    first_name: '',
    last_name: '',
    email: '',
    occupation: '',
    company: '',
  },
  reservations: []
}

const State = (state: ReducerState = initialState, action: Action): ReducerState =>
  produce(state, (draft:ReducerState) => {
    // eslint-disable-next-line no-console
    switch (action.type) {
      case SET_USER: {
        draft.user.first_name = action.user.first_name;
        draft.user.last_name = action.user.last_name;
        draft.user.email = action.user.email;
        draft.user.occupation = action.user.occupation ? action.user.occupation : '';
        draft.user.company = action.user.company ? action.user.company : '';
        break;
      }
      case REMOVE_USER: {
        draft.user.first_name = '';
        draft.user.last_name = '';
        draft.user.email = '';
        draft.user.occupation = '';
        draft.user.company = '';
        break;
      }
      case ADD_RESERVATION: {
        // in the reservations array add a new one
        draft.reservations.push(action.details);
        // draft.reservations[draft.reservations.length - 1].firstName = action.details.firstName;
        // draft.reservations[draft.reservations.length - 1].lastName = action.details.lastName;
        // draft.reservations[draft.reservations.length - 1].email = action.details.email;
        // draft.reservations[draft.reservations.length - 1].speciality = action.details.speciality;
        // draft.reservations[draft.reservations.length - 1].date = action.details.date;
        // draft.reservations[draft.reservations.length - 1].time = action.details.time;
      }
    }
});

export default State;