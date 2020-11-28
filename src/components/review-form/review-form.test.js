import React from 'react';
import renderer from 'react-test-renderer';
import {ReviewForm} from './review-form';
import {noop} from '../../test-data';

it(`Should ReviewForm render correctly`, () => {
  const tree = renderer.create(
      <ReviewForm
        disabledSubmit={false}
        submitHandler={noop}
        fieldChangeHandler={noop}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
