import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {FilmTabs} from './film-tabs';
import {mockFilms, mockComments} from '../../test-data';

configure({adapter: new Adapter()});

it(`Click on tabs should call callback`, () => {
  const tabsClickHandler = jest.fn();

  const container = shallow(
      <FilmTabs
        film={mockFilms[0]}
        filmComments={mockComments}
        tab={`OVERVIEW`}
        tabsClickHandler={tabsClickHandler}
      />
  );

  const tabOne = container.find(`.movie-nav__link`).at(0);
  const tabTwo = container.find(`.movie-nav__link`).at(1);
  const tabThree = container.find(`.movie-nav__link`).at(2);

  tabOne.simulate(`Click`);
  tabTwo.simulate(`Click`);
  tabThree.simulate(`Click`);

  expect(tabsClickHandler).toHaveBeenCalledTimes(3);
});
