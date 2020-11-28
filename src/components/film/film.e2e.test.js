import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Film} from './film';
import {noop, mockFilms, state, MATCH} from '../../test-data';

configure({adapter: new Adapter()});

it(`Click on myList button should call callback`, () => {
  const changeFavoriteStatusHandler = jest.fn();

  const container = shallow(
      <Film
        films={mockFilms}
        changeFavoriteStatus={changeFavoriteStatusHandler}
        authorizationStatus={state.USER.authorizationStatus}
        renderFilmsCount={state.FILMS_STATUS.renderFilmsCount}
        changeRenderFilmsCount={noop}
        match={MATCH}
        onPlayerButtonClick={noop}
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
      <Film
        films={mockFilms}
        changeFavoriteStatus={noop}
        authorizationStatus={state.USER.authorizationStatus}
        renderFilmsCount={state.FILMS_STATUS.renderFilmsCount}
        changeRenderFilmsCount={noop}
        match={MATCH}
        onPlayerButtonClick={onPlayerButtonClick}
      />
  );

  const playButton = container.find(`.btn--play`);
  playButton.simulate(`click`);

  expect(onPlayerButtonClick).toHaveBeenCalledTimes(1);
  expect(onPlayerButtonClick.mock.calls[0][0]).toEqual(mockFilms[0].id);
});
