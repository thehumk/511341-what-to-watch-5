import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {FilmCard} from './film-card';
import {noop, mockFilms} from '../../test-data';

configure({adapter: new Adapter()});

it(`Hover on FilmCard should call callback`, () => {
  const mouseEnterHandler = jest.fn();

  const container = shallow(
      <FilmCard
        film={mockFilms[0]}
        playerStatus={false}
        mouseEnterHandler={mouseEnterHandler}
        mouseLeaveHandler={noop}
      />
  );

  const card = container.find(`.small-movie-card`);
  card.simulate(`mouseEnter`);

  expect(mouseEnterHandler).toHaveBeenCalledTimes(1);
});

it(`Away from FilmCard should call callback`, () => {
  const mouseLeaveHandler = jest.fn();

  const container = shallow(
      <FilmCard
        film={mockFilms[0]}
        playerStatus={false}
        mouseEnterHandler={noop}
        mouseLeaveHandler={mouseLeaveHandler}
      />
  );

  const card = container.find(`.small-movie-card`);
  card.simulate(`mouseLeave`);

  expect(mouseLeaveHandler).toHaveBeenCalledTimes(1);
});
