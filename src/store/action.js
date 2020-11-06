export const ActionType = {
  CHANGE_ACTIVE_GENRE: `changeActiveGenre`,
  GET_FILMS_LIST_OF_GENRE: `getFilmsListOfGenre`,
};

export const ActionCreator = {
  changeActiveGenre: (genre) => ({
    type: ActionType.CHANGE_ACTIVE_GENRE,
    payload: genre,
  }),

  cangeFilmsList: (films) => ({
    type: ActionType.GET_FILMS_LIST_OF_GENRE,
    payload: films,
  }),
};
