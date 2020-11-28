import React from 'react';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import {App} from './app';
import {state} from '../../test-data';

const mockStore = configureMockStore()(state);

it(`Should App render correctly`, () => {
  const tree = renderer.create(
      <Provider store={mockStore}>
        <App authorizationStatus={state.USER.authorizationStatus} />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
