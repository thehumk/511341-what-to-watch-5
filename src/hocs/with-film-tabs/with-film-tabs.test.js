import React from 'react';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import thunk from 'redux-thunk';
import {createAPI} from '../../services/api';
import {withFilmTabs} from './with-film-tabs';
import {noop, mockFilms, comments, state} from '../../test-data';

const api = createAPI(noop);

const mockStore = configureMockStore([thunk.withExtraArgument(api)])(state);

const MockComponent = () => {
  return <div></div>;
};

const MockComponentContainer = withFilmTabs(MockComponent);

it(`Should WithFilmTabs render correctly`, () => {
  const tree = renderer.create(
      <Provider store={mockStore}>
        <MockComponentContainer
          film={mockFilms[0]}
          filmComments={comments}
          getFilmComments={noop}
        />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
