import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import {SignIn} from './sign-in';
import {noop, state} from '../../test-data';

const mockStore = configureMockStore()(state);

it(`Should SignIn render correctly`, () => {
  const tree = renderer.create(
      <Provider store={mockStore}>
        <BrowserRouter>
          <SignIn onSubmit={noop}/>
        </BrowserRouter>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
