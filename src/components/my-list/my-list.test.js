import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import {MyList} from './my-list';
import {noop, mockFilms, state} from '../../test-data';

const mockStore = configureMockStore()(state);

it(`Should MyList render correctly`, () => {
  const tree = renderer.create(
      <Provider store={mockStore}>
        <BrowserRouter>
          <MyList
            films={mockFilms}
            renderFilmsCount={8}
            changeRenderFilmsCount={noop}
          />
        </BrowserRouter>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
