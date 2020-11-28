import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../../services/api';
import {filmsData} from './films-data';
import {APIRoute} from '../../../utils/const';
import {ActionType} from '../../action';
import {fetchFilmsList, fetchPromoFilm} from '../../api-actions';
import {extend} from '../../../utils/utils';
import {noop, mockFilms, state} from '../../../test-data';

const api = createAPI(noop);

it(`FilmsData reducer without additional parameters should return initial state`, () => {
  expect(filmsData(state.DATA, {})).toEqual(state.DATA);
});

it(`Reducer should change to films`, () => {
  expect(filmsData(state.DATA, {
    type: ActionType.LOAD_FILMS,
    payload: mockFilms,
  })).toEqual(extend(state.DATA, {
    films: mockFilms,
    genresList: state.DATA.genresList,
  }));
});

it(`Reducer should change to promo film`, () => {
  expect(filmsData(state.DATA, {
    type: ActionType.LOAD_PROMO_FILM,
    payload: mockFilms[0],
  })).toEqual(extend(state.DATA, {
    promoFilm: mockFilms[0],
  }));
});

it(`Reducer should change to application status`, () => {
  expect(filmsData(state.DATA, {
    type: ActionType.ENABLE_APPLICATION,
    payload: true,
  })).toEqual(extend(state.DATA, {
    isApplicationReady: true,
  }));
});

describe(`FilmsData async login work correctly`, () => {
  it(`Should make a correct API get request to /films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsListFetcher = fetchFilmsList();

    apiMock
      .onGet(APIRoute.FILMS)
      .reply(200, {fake: true});

    return filmsListFetcher(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILMS,
          payload: {fake: true},
        });
      });
  });

  it(`Should make a correct API get request to /films/promo`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const promoFilmFetcher = fetchPromoFilm();

    apiMock
      .onGet(APIRoute.PROMO_FILM)
      .reply(200, {fake: true});

    return promoFilmFetcher(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PROMO_FILM,
          payload: {fake: true},
        });
      });
  });
});
