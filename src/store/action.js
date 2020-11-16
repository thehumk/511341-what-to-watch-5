export const ActionType = {
  CHANGE_ACTIVE_GENRE: `changeActiveGenre`,
  CHANGE_RENDER_FILMS_COUNT: `changeRenderFilmsCount`,
  LOAD_FILMS: `loadFilms`,
  REQUIRED_AUTHORIZATION: `requiredAuthorization`,
  REDIRECT_TO_ROUTE: `redirectToRoute`,
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

  requiredAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),

  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
};
