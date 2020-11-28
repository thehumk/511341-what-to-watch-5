import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../../services/api';
import {commentsFilms} from './comments-films';
import {ActionType} from '../../action';
import {fetchCommentsFilm} from '../../api-actions';
import {extend} from '../../../utils/utils';
import {noop, mockComments, state} from '../../../test-data';

const api = createAPI(noop);

it(`CommentsFilms reducer without additional parameters should return initial state`, () => {
  expect(commentsFilms(state.COMMENTS, {})).toEqual(state.COMMENTS);
});

it(`Reducer should change to comments`, () => {
  expect(commentsFilms(state.DATA, {
    type: ActionType.LOAD_FILM_COMMENTS,
    payload: mockComments,
  })).toEqual(extend(state.DATA, {
    comments: mockComments,
  }));
});

it(`Should make a correct API get request to /comments/:id`, () => {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const fakeId = 1;
  const commentsFilmFetcher = fetchCommentsFilm(fakeId);

  apiMock
    .onGet(`/comments/${fakeId}`)
    .reply(200, {fake: true});

  return commentsFilmFetcher(dispatch, noop, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_FILM_COMMENTS,
        payload: {fake: true},
      });
    });
});
