import {filmsStatus} from './films-status';
import {ActionType} from '../../action';
import {extend} from '../../../utils/utils';
import {state} from '../../../test-data';

it(`FilmsStatus reducer without additional parameters should return initial state`, () => {
  expect(filmsStatus(state.FILMS_STATUS, {})).toEqual(state.FILMS_STATUS);
});

it(`Reducer should change activeGenre`, () => {
  expect(filmsStatus(state.FILMS_STATUS, {
    type: ActionType.CHANGE_ACTIVE_GENRE,
    payload: `Action`,
  })).toEqual(extend(state.FILMS_STATUS, {
    activeGenre: `Action`,
  }));
});

it(`Reducer should change renderFilmsCount`, () => {
  expect(filmsStatus(state.FILMS_STATUS, {
    type: ActionType.CHANGE_RENDER_FILMS_COUNT,
    payload: 16,
  })).toEqual(extend(state.FILMS_STATUS, {
    renderFilmsCount: 16,
  }));
});
