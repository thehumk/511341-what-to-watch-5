import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import {FilmsList} from './films-list';
import {noop, mockFilms, state} from '../../test-data';

it(`Should FilmsList render correctly`, () => {
  const tree = renderer.create(
      <BrowserRouter>
        <FilmsList
          films={mockFilms}
          quantityRenderFilms={state.FILMS_STATUS.renderFilmsCount}
          cardHoverHandler={noop}
          cardLeaveHoverHandler={noop}
          showMoreButtonClickHandler={noop}
        />
      </BrowserRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
