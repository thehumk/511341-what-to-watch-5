import {extend} from '../utils/utils';
import {randomFilms} from '../mock/films';
import {ActionType} from './action';


const InitialState = {
  activeGenre: `All`,
  films: randomFilms,
};

export const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case (ActionType.CHANGE_ACTIVE_GENRE):
      return extend(state, {
        activeGenre: action.payload,
      });
    case (ActionType.GET_FILMS_LIST_OF_GENRE):
      return extend(state, {
        films: action.payload,
      });
  }

  return state;
};
