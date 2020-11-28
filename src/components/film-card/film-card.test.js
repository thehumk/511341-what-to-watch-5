import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import {FilmCard} from './film-card';
import {noop, mockFilms} from '../../test-data';

it(`Should FilmCard render correctly`, () => {
  const tree = renderer.create(
      <BrowserRouter>
        <FilmCard
          film={mockFilms[0]}
          playerStatus={true}
          mouseEnterHandler={noop}
          mouseLeaveHandler={noop}
        />
      </BrowserRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
