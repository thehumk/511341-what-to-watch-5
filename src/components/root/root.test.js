import React from 'react';
import renderer from 'react-test-renderer';
import {Root} from './root';
import {noop} from '../../test-data';

it(`Should Root render correctly`, () => {
  const tree = renderer.create(
      <Root initAction={noop} isApplicationReady={false}/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
