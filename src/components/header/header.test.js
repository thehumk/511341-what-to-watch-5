import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import {Header} from './header';
import {state} from '../../test-data';

it(`Should Header render correctly`, () => {
  const tree = renderer.create(
      <BrowserRouter>
        <Header
          isMain={false}
          isSignIn={false}
          classHeader={`movie-card__head`}
          authorizationStatus={state.USER.authorizationStatus}
          user={state.USER.user}
        />
      </BrowserRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
