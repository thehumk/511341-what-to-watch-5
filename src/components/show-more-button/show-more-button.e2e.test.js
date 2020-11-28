import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ShowMoreButton from './show-more-button';

configure({adapter: new Adapter()});

it(`Click on showMoreButton should call callback`, () => {
  const clickHandler = jest.fn();

  const container = shallow(
      <ShowMoreButton
        clickHandler={clickHandler}
      />
  );

  const button = container.find(`.catalog__button`);
  button.simulate(`Click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
