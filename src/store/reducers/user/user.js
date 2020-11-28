import {extend} from '../../../utils/utils';
import {AuthorizationStatus} from '../../../utils/const';
import {ActionType} from '../../action';

const InitialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  user: null,
};

export const user = (state = InitialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case ActionType.LOAD_USER_INFO:
      return extend(state, {
        user: action.payload,
      });
  }

  return state;
};
