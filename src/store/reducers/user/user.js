import {extend} from '../../../utils/utils';
import {AuthorizationStatus} from '../../../utils/const';
import {ActionType} from '../../action';

const InitialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

export const user = (state = InitialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
  }

  return state;
};
