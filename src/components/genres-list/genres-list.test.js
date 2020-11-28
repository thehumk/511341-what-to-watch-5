import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import {GenresList} from './genres-list';
import {noop, mockFilms, state} from '../../test-data';

it(`Should GenresList render correctly`, () => {
  const tree = renderer.create(
      <BrowserRouter>
        <GenresList
          filteredFilms={mockFilms}
          activeGenre={state.FILMS_STATUS.activeGenre}
          renderFilmsCount={state.FILMS_STATUS.renderFilmsCount}
          genresList={state.DATA.genresList}
          changeActiveGenre={noop}
          changeRenderFilmsCount={noop}
        />
      </BrowserRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
