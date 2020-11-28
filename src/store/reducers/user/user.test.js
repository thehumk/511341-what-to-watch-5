import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../../services/api';
import {user} from './user';
import {AuthorizationStatus, APIRoute, AppRoute} from '../../../utils/const';
import {ActionType} from '../../action';
import {checkAuth, login} from '../../api-actions';
import {extend} from '../../../utils/utils';
import {noop, state} from '../../../test-data';

const api = createAPI(noop);

const userInfoMock = {
  id: 1,
  name: `af`,
  email: `af@asd.ru`,
  avatar_url: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/4.jpg`, // eslint-disable-line
};

it(`User reducer without additional parameters should return initial state`, () => {
  expect(user(state.USER, {})).toEqual(state.USER);
});

it(`Reducer should update status to authorized`, () => {
  expect(user(state.USER, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.AUTH,
  })).toEqual(extend(state.USER, {
    authorizationStatus: AuthorizationStatus.AUTH,
  }));
});

it(`Reducer should update user info`, () => {
  expect(user(state.USER, {
    type: ActionType.LOAD_USER_INFO,
    payload: userInfoMock,
  })).toEqual(extend(state.USER, {
    user: userInfoMock,
  }));
});

describe(`User async login work correctly`, () => {
  it(`Should make a correct API get request to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const authChecker = checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, {fake: true});

    return authChecker(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_USER_INFO,
          payload: {fake: true},
        });
      });
  });

  it(`Should make a correct API post request to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {login: `af@asd.ru`, password: `12345`};
    const loginSender = login(fakeUser);

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(200, {fake: true});

    return loginSender(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.ROOT,
        });
      });
  });
});
