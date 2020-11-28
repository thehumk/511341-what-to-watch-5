export const QUANTITY_RENDER_FILMS = 8;

export const ALL_GENRES = `All`;

export const MAX_QUANTITY_GENRES_TO_RENDER = 9;

export const EMAIL_REGEXP = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const AppRoute = {
  ROOT: `/`,
  SIGN_IN: `/login`,
  MY_LIST: `/mylist`,
  FILM: `/films/:id`,
  FILM_REVIEW: `/films/:id/review`,
  FILM_PLAYER: `/player/:id`,
};

export const APIRoute = {
  FILMS: `/films`,
  PROMO_FILM: `/films/promo`,
  LOGIN: `/login`,
};

export const LengthOfTextComment = {
  MIN: `50`,
  MAX: `400`,
};
