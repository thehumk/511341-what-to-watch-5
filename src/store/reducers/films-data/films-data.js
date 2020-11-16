import {extend} from '../../../utils/utils';
import {getUniqueFilmsGenres} from '../../selectors';
import {ActionType} from '../../action';

const InitialState = {
  films: ``,
  genresList: ``,
};

export const filmsData = (state = InitialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload,
        genresList: Array.from(getUniqueFilmsGenres({films: action.payload})),
      });
  }

  return state;
};
