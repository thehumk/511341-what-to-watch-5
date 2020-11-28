import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Main} from './main';
import {noop, mockFilms} from '../../test-data';

configure({adapter: new Adapter()});

it(`Click on myList button should call callback`, () => {
  const changeFavoriteStatusHandler = jest.fn();

  const container = shallow(
      <Main
        promoFilm={mockFilms[0]}
        onPlayerButtonClick={noop}
        changeFavoriteStatusHandler={changeFavoriteStatusHandler}
      />
  );

  const myListButton = container.find(`.btn--list`);
  myListButton.simulate(`click`);

  expect(changeFavoriteStatusHandler).toHaveBeenCalledTimes(1);
  expect(changeFavoriteStatusHandler.mock.calls[0][0]).toEqual(mockFilms[0].id);
  expect(changeFavoriteStatusHandler.mock.calls[0][1]).toEqual(+!mockFilms[0].is_favorite);
});

it(`Click on Play button should call callback`, () => {
  const onPlayerButtonClick = jest.fn();

  const container = shallow(
      <Main
        promoFilm={mockFilms[0]}
        onPlayerButtonClick={onPlayerButtonClick}
        changeFavoriteStatusHandler={noop}
      />
  );

  const playButton = container.find(`.btn--play`);
  playButton.simulate(`click`);

  expect(onPlayerButtonClick).toHaveBeenCalledTimes(1);
  expect(onPlayerButtonClick.mock.calls[0][0]).toEqual(mockFilms[0].id);
});
