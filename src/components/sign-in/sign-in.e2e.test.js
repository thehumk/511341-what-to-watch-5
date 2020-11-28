import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {SignIn} from './sign-in';
import {state} from '../../test-data';

const mockStore = configureMockStore()(state);

configure({adapter: new Adapter()});

it(`Click on button submit should call callback`, () => {
  const submitHandler = jest.fn();
  const fakeEvent = {preventDefault: () => {}};

  const container = mount(
      <Provider store={mockStore}>
        <BrowserRouter>
          <SignIn
            onSubmit={submitHandler}
          />
        </BrowserRouter>
      </Provider>
  );

  container.find(`input[name="user-email"]`).instance().value = `test@test.ru`;
  container.find(`input[name="user-password"]`).instance().value = `1234`;

  const button = container.find(`.sign-in__btn`);
  button.simulate(`click`, fakeEvent);

  expect(submitHandler).toHaveBeenCalledTimes(1);
});
