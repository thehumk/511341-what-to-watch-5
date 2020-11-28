export const ActionType = {
  CHANGE_ACTIVE_GENRE: `changeActiveGenre`,
  CHANGE_RENDER_FILMS_COUNT: `changeRenderFilmsCount`,
  LOAD_FILMS: `loadFilms`,
  LOAD_PROMO_FILM: `loadPromoFilm`,
  LOAD_FILM_COMMENTS: `loadFilmComments`,
  REQUIRED_AUTHORIZATION: `requiredAuthorization`,
  LOAD_USER_INFO: `loadUserInfo`,
  REDIRECT_TO_ROUTE: `redirectToRoute`,
  ENABLE_APPLICATION: `enableApplication`,
};

export const ActionCreator = {
  changeActiveGenre: (genre) => ({
    type: ActionType.CHANGE_ACTIVE_GENRE,
    payload: genre,
  }),

  changeRenderFilmsCount: (count) => ({
    type: ActionType.CHANGE_RENDER_FILMS_COUNT,
    payload: count,
  }),

  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),

  loadPromoFilm: (film) => ({
    type: ActionType.LOAD_PROMO_FILM,
    payload: film,
  }),

  loadFilmComments: (comments) => ({
    type: ActionType.LOAD_FILM_COMMENTS,
    payload: comments,
  }),

  requiredAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),

  loadUserInfo: (user) => ({
    type: ActionType.LOAD_USER_INFO,
    payload: user,
  }),

  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),

  enableApplication: (status) => ({
    type: ActionType.ENABLE_APPLICATION,
    payload: status,
  }),
};
