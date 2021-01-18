import produce from 'immer';
import { Action } from './actions';
import { user, ReducerState } from './definitions';
import { SET_USER, REMOVE_USER } from './constants';

export let initialState:ReducerState = {
  user: {
    first_name: '',
    last_name: '',
    email: '',
    occupation: '',
    company: '',
  },
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
    }
});

export default State;