export const getFilmRating = (rating) => {
  switch (true) {
    case rating >= 0 && rating < 3:
      return `Bad`;
    case rating >= 3 && rating < 5:
      return `Normal`;
    case rating >= 5 && rating < 8:
      return `Good`;
    case rating >= 8 && rating < 10:
      return `Very good`;
    case rating >= 10:
      return `Awesome`;
  }

  return ``;
};

export const getUniqueFilmsGenres = (films) => {
  let allGenres = [`All`];

  for (let film of films) {
    allGenres.push(film.details.genre);
  }

  return new Set(allGenres);
};

export const getFilteredFilms = (films, genre) => {
  const genresList = Array.from(getUniqueFilmsGenres(films));

  if (genre === genresList[0]) {
    return films;
  }

  return films.filter((elem) => elem.details.genre === genre);
};
