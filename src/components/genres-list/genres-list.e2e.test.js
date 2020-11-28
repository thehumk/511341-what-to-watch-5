import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {GenresList} from './genres-list';
import {mockFilms, state} from '../../test-data';

configure({adapter: new Adapter()});

it(`Click on genre should call callback`, () => {
  const changeActiveGenre = jest.fn();
  const changeRenderFilmsCount = jest.fn();

  const container = shallow(
      <GenresList
        filteredFilms={mockFilms}
        activeGenre={state.FILMS_STATUS.activeGenre}
        renderFilmsCount={state.FILMS_STATUS.renderFilmsCount}
        genresList={state.DATA.genresList}
        changeActiveGenre={changeActiveGenre}
        changeRenderFilmsCount={changeRenderFilmsCount}
      />
  );

  const genre = container.find(`.catalog__genres-item`).at(0);

  genre.simulate(`Click`);

  expect(changeActiveGenre).toHaveBeenCalledTimes(1);
  expect(changeActiveGenre.mock.calls[0][0]).toEqual(state.DATA.genresList[0]);

  expect(changeRenderFilmsCount).toHaveBeenCalledTimes(1);
  expect(changeRenderFilmsCount.mock.calls[0][0]).toEqual(state.FILMS_STATUS.renderFilmsCount);
});
