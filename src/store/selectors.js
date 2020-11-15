import {createSelector} from 'reselect';
import {ALL_GENRES} from '../utils/const';

const filmsSelector = (state) => state.films;
const genreSelector = (state) => state.genre;

export const getUniqueFilmsGenres = createSelector([filmsSelector], (films) => {
  let allGenres = [ALL_GENRES];

  for (let film of films) {
    allGenres.push(film.genre);
  }

  return new Set(allGenres);
});

export const getFilteredFilms = createSelector([genreSelector, filmsSelector], (genre, films) => {
  if (genre === ALL_GENRES) {
    return films;
  }

  return films.filter((elem) => elem.genre === genre);
});
