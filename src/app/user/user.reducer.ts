/* tslint:disable: no-switch-case-fall-through */
import { Action } from '@ngrx/store';

import { UserActions } from './user.actions';
import { User } from './user.model';

export interface UserState {
  user: User;
  loading: boolean;
  loaded: boolean;
  jwt: string;
};

export const initialState: UserState = {
  user: { name: '' },
  loading: false,
  loaded: true,
  jwt: ''
};

export function userReducer(state = initialState, action: Action): UserState {
  switch (action.type) {

    case UserActions.EDIT_USER: {
      return Object.assign({}, state, {
        user: action.payload
      });
    }

    case UserActions.SET_JWT: {
      return Object.assign({}, state, {
        jwt: action.payload
      });
    }

    default: {
      return state;
    }
  }
}

