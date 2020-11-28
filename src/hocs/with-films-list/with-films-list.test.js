import React from 'react';
import renderer from 'react-test-renderer';
import {withFilmsList} from './with-films-list';
import {noop, mockFilms, state} from '../../test-data';

const MockComponent = () => {
  return <div></div>;
};

const MockComponentContainer = withFilmsList(MockComponent);

it(`Should WithFilmsList render correctly`, () => {
  const tree = renderer.create(
      <MockComponentContainer
        films={mockFilms}
        renderFilmsCount={state.FILMS_STATUS.renderFilmsCount}
        changeRenderFilmsCount={noop}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
