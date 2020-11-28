import React from 'react';
import renderer from 'react-test-renderer';
import {FilmTabs} from './film-tabs';
import {noop, mockFilms, mockComments} from '../../test-data';

it(`Should FilmTabs render correctly`, () => {
  const tree = renderer.create(
      <FilmTabs
        film={mockFilms[0]}
        filmComments={mockComments}
        tab={`Reviews`}
        tabsClickHandler={noop}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
