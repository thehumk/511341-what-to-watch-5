const MAX_COUNT_SIMILAR_FILMS = 4;

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

export const getSimilarFilms = (films, genre) => {
  const similarFIlms = films.filter((elem) => elem.details.genre === genre);

  if (similarFIlms.length > MAX_COUNT_SIMILAR_FILMS) {
    return similarFIlms.slice(0, MAX_COUNT_SIMILAR_FILMS);
  }

  return similarFIlms;
};
