export const getRandomNumber = (min, max, fractional = 0) => {
  const randomNumber = min + Math.random() * (max - min);
  return randomNumber.toFixed(fractional);
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getUniqueFilmsGenres = (films) => {
  let allGenres = [`All`];

  for (let film of films) {
    allGenres.push(film.details.genre);
  }

  return new Set(allGenres);
};
