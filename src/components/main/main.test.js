import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import {Main} from './main';
import {noop, mockFilms, state} from '../../test-data';

const mockStore = configureMockStore()(state);

it(`Should Main render correctly`, () => {
  const tree = renderer.create(
      <Provider store={mockStore}>
        <BrowserRouter>
          <Main
            promoFilm={mockFilms[0]}
            authorizationStatus={`NO_AUTH`}
            onPlayerButtonClick={noop}
            changeFavoriteStatusHandler={noop}
          />
        </BrowserRouter>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
