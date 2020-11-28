import {extend} from '../../../utils/utils';
import {getUniqueFilmsGenres} from '../../selectors';
import {ActionType} from '../../action';

const InitialState = {
  films: ``,
  promoFilm: ``,
  genresList: ``,
  isApplicationReady: false,
};

export const filmsData = (state = InitialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload,
        genresList: Array.from(getUniqueFilmsGenres({films: action.payload})),
      });
    case ActionType.LOAD_PROMO_FILM:
      return extend(state, {
        promoFilm: action.payload,
      });
    case ActionType.ENABLE_APPLICATION:
      return extend(state, {
        isApplicationReady: action.payload,
      });
  }

  return state;
};
