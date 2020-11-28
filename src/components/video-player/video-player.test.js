import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from './video-player';
import {mockFilms} from '../../test-data';

it(`Should VideoPlayer render correctly`, () => {
  const tree = renderer.create(
      <VideoPlayer film={mockFilms[0]} playerStatus={true}/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
