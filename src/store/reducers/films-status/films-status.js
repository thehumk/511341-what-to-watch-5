import {extend} from '../../../utils/utils';
import {ActionType} from '../../action';
import {QUANTITY_RENDER_FILMS} from '../../../utils/const';

const InitialState = {
  activeGenre: `All`,
  renderFilmsCount: QUANTITY_RENDER_FILMS,
};

export const filmsStatus = (state = InitialState, action) => {
  switch (action.type) {
    case (ActionType.CHANGE_ACTIVE_GENRE):
      return extend(state, {
        activeGenre: action.payload,
      });
    case (ActionType.CHANGE_RENDER_FILMS_COUNT):
      return extend(state, {
        renderFilmsCount: action.payload,
      });
  }

  return state;
};
