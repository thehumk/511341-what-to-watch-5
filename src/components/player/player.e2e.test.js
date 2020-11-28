import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Player} from './player';
import {noop, mockFilms} from '../../test-data';

configure({adapter: new Adapter()});

it(`Click on exit button should call callback`, () => {
  const exitButtonClickHandler = jest.fn();

  const container = shallow(
      <Player
        film={mockFilms[0]}
        playFilm={false}
        timeLeftFilm={100}
        progressVideo={10}
        exitButtonClickHandler={exitButtonClickHandler}
        filmPlayHandler={noop}
        filmPauseHandler={noop}
        fullScreenClickHandler={noop}
      />
  );

  const button = container.find(`.player__exit`);
  button.simulate(`Click`);

  expect(exitButtonClickHandler).toHaveBeenCalledTimes(1);
});

it(`Click on play button should call callback`, () => {
  const filmPlayHandler = jest.fn();

  const container = shallow(
      <Player
        film={mockFilms[0]}
        playFilm={false}
        timeLeftFilm={100}
        progressVideo={10}
        exitButtonClickHandler={noop}
        filmPlayHandler={filmPlayHandler}
        filmPauseHandler={noop}
        fullScreenClickHandler={noop}
      />
  );

  const button = container.find(`.player__play`);
  button.simulate(`Click`);

  expect(filmPlayHandler).toHaveBeenCalledTimes(1);
});

it(`Click on pause button should call callback`, () => {
  const filmPauseHandler = jest.fn();

  const container = shallow(
      <Player
        film={mockFilms[0]}
        playFilm={true}
        timeLeftFilm={100}
        progressVideo={10}
        exitButtonClickHandler={noop}
        filmPlayHandler={noop}
        filmPauseHandler={filmPauseHandler}
        fullScreenClickHandler={noop}
      />
  );

  const button = container.find(`.player__play`);
  button.simulate(`Click`);

  expect(filmPauseHandler).toHaveBeenCalledTimes(1);
});

it(`Click on full screen button should call callback`, () => {
  const fullScreenClickHandler = jest.fn();

  const container = shallow(
      <Player
        film={mockFilms[0]}
        playFilm={false}
        timeLeftFilm={100}
        progressVideo={10}
        exitButtonClickHandler={noop}
        filmPlayHandler={noop}
        filmPauseHandler={noop}
        fullScreenClickHandler={fullScreenClickHandler}
      />
  );

  const button = container.find(`.player__full-screen`);
  button.simulate(`Click`);

  expect(fullScreenClickHandler).toHaveBeenCalledTimes(1);
});
