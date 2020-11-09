import {extend, getUniqueFilmsGenres} from '../utils/utils';
import {getFilteredFilms} from '../utils/film';
import {randomFilms} from '../mock/films';
import {ActionType} from './action';

const InitialState = {
  activeGenre: `All`,
  films: randomFilms,
};

export const genresList = Array.from(getUniqueFilmsGenres(InitialState.films));

export const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case (ActionType.CHANGE_ACTIVE_GENRE):
      return extend(state, {
        activeGenre: action.payload,
      });
    case (ActionType.GET_FILMS_LIST_OF_GENRE):
      return extend(state, {
        films: getFilteredFilms(randomFilms, action.payload),
      });
  }

  return state;
};
