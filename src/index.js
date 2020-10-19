import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {randomFilms} from './mock/films.js';

ReactDOM.render(
    <App
      films={randomFilms}
    />,
    document.querySelector(`#root`)
);
