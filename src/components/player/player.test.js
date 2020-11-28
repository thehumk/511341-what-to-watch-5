import React from 'react';
import renderer from 'react-test-renderer';
import {Player} from './player';
import {noop, mockFilms} from '../../test-data';

it(`Should Player render correctly`, () => {
  const tree = renderer.create(
      <Player
        film={mockFilms[0]}
        playFilm={true}
        timeLeftFilm={0}
        progressVideo={0}
        exitButtonClickHandler={noop}
        filmPlayHandler={noop}
        filmPauseHandler={noop}
        fullScreenClickHandler={noop}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
