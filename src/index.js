import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root/root';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createAPI} from './services/api';
import rootReducer from './store/reducers/root-reducer';
import {ActionCreator} from './store/action';
import {AuthorizationStatus} from './utils/const';
import {redirect} from './store/middlewares/redirect';

const api = createAPI(
    () => store.dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

ReactDOM.render(
    <Provider store={store}>
      <Root/>
    </Provider>,
    document.querySelector(`#root`)
);
