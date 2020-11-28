import React from 'react';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import {withReviewForm} from './with-review-form';
import {noop, state} from '../../test-data';

const mockStore = configureMockStore()(state);

const MockComponent = () => {
  return <div></div>;
};

const MockComponentContainer = withReviewForm(MockComponent);

it(`Should WithReviewForm render correctly`, () => {
  const tree = renderer.create(
      <Provider store={mockStore}>
        <MockComponentContainer
          addComment={noop}
          filmId={1}
        />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
