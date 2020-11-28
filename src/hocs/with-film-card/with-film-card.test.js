import React from 'react';
import renderer from 'react-test-renderer';
import {withFilmCard} from './with-film-card';
import {noop, mockFilms} from '../../test-data';

const MockComponent = () => {
  return <div></div>;
};

const MockComponentContainer = withFilmCard(MockComponent);

it(`Should WithFilmCard render correctly`, () => {
  const tree = renderer.create(
      <MockComponentContainer
        film={mockFilms[0]}
        cardHoverHandler={noop}
        cardLeaveHoverHandler={noop}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
