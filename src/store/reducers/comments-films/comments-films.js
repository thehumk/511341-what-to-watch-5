import {extend} from '../../../utils/utils';
import {ActionType} from '../../action';

const InitialState = {
  comments: [],
};

export const commentsFilms = (state = InitialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILM_COMMENTS:
      return extend(state, {
        comments: action.payload,
      });
  }

  return state;
};
