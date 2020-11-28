import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import thunk from 'redux-thunk';
import {createAPI} from '../../services/api';
import {Film} from './film';
import {noop, mockFilms, state, MATCH} from '../../test-data';

const api = createAPI(noop);

const mockStore = configureMockStore([thunk.withExtraArgument(api)])(state);

it(`Should Film render correctly`, () => {
  const tree = renderer.create(
      <Provider store={mockStore}>
        <BrowserRouter>
          <Film
            films={mockFilms}
            changeFavoriteStatus={noop}
            authorizationStatus={`AUTH`}
            renderFilmsCount={state.FILMS_STATUS.renderFilmsCount}
            changeRenderFilmsCount={noop}
            match={MATCH}
            onPlayerButtonClick={noop}
          />
        </BrowserRouter>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
