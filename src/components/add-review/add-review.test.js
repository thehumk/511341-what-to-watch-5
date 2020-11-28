import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import {AddReview} from './add-review';
import {mockFilms, MATCH, state} from '../../test-data';

const mockStore = configureMockStore()(state);

it(`Should AddReview render correctly`, () => {
  const tree = renderer.create(
      <Provider store={mockStore}>
        <BrowserRouter>
          <AddReview films={mockFilms} match={MATCH}/>
        </BrowserRouter>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
