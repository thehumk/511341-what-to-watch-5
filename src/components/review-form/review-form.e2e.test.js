import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {ReviewForm} from './review-form';
import {noop} from '../../test-data';

configure({adapter: new Adapter()});

it(`Click on post submit should call callback`, () => {
  const submitHandler = jest.fn();

  const container = shallow(
      <ReviewForm
        disabledSubmit={false}
        submitHandler={submitHandler}
        fieldChangeHandler={noop}
      />
  );

  const form = container.find(`form`);
  form.simulate(`submit`);

  expect(submitHandler).toHaveBeenCalledTimes(1);
});

it(`Click on input should call callback`, () => {
  const fieldChangeHandler = jest.fn();

  const container = shallow(
      <ReviewForm
        disabledSubmit={false}
        submitHandler={noop}
        fieldChangeHandler={fieldChangeHandler}
      />
  );

  const input = container.find(`.rating__input`).at(0);
  input.simulate(`change`);

  expect(fieldChangeHandler).toHaveBeenCalledTimes(1);
});

it(`Change on textarea should call callback`, () => {
  const fieldChangeHandler = jest.fn();

  const container = shallow(
      <ReviewForm
        disabledSubmit={false}
        submitHandler={noop}
        fieldChangeHandler={fieldChangeHandler}
      />
  );

  const textarea = container.find(`.add-review__textarea`);
  textarea.simulate(`change`);

  expect(fieldChangeHandler).toHaveBeenCalledTimes(1);
});
