import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import {PrivateRoute} from './private-route';
import {noop} from '../../test-data';

it(`Should PrivateRoute render correctly`, () => {
  const tree = renderer.create(
      <BrowserRouter>
        <PrivateRoute
          render={noop}
          authorizationStatus={`NO_AUTH`}
        />
      </BrowserRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
