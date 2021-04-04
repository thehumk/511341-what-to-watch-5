import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import {withPlayer} from './with-player';
import {noop, mockFilms, state, MATCH} from '../../test-data';

const mockStore = configureMockStore()(state);

const MockComponent = (props) => {
  return <div>{props.children}</div>;
};

MockComponent.propTypes = {
  children: PropTypes.node,
};

const MockComponentContainer = withPlayer(MockComponent);

it(`Should WithPlayer render correctly`, () => {
  const tree = renderer.create((
    <Provider store={mockStore}>
      <MockComponentContainer
        films={mockFilms}
        match={MATCH}
        onExitClick={noop}>
        <React.Fragment/>
      </MockComponentContainer>
    </Provider>
  ), {
    createNodeMock() {
      return {
        play: noop,
        pause: noop,
      };
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
