import {ActionCreator} from './action';
import {AuthorizationStatus, APIRoute} from '../utils/const';
import {HttpCode} from '../services/api';
import swal from 'sweetalert';

export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => {
      dispatch(ActionCreator.loadFilms(data));
    })
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO_FILM)
    .then((film) => {
      dispatch(ActionCreator.loadPromoFilm(film.data));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then((response) => {
      dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.loadUserInfo(response.data));
    })
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(`/`)))
    .catch(() => {
      swal(`Error`, `Something went wrong!`, `error`);
    })
);

export const init = () => (dispatch) => {
  Promise.all([
    dispatch(fetchFilmsList()),
    dispatch(fetchPromoFilm()),
    dispatch(checkAuth()),
  ])
    .then(() => {
      dispatch(ActionCreator.enableApplication(true));
    })
    .catch(() => {
      dispatch(ActionCreator.enableApplication(null));
      swal(`Error`, `Something went wrong!`, `error`);
    });
};

export const fetchCommentsFilm = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then((comments) => {
      dispatch(ActionCreator.loadFilmComments(comments.data));
    })
);

export const addComment = (id, {rating, comment}) => (dispatch, _getState, api) => (
  api.post(`/comments/${id}`, {rating, comment})
    .then(() => {
      dispatch(ActionCreator.redirectToRoute(`/films/${id}`));
    })
    .catch(() => {
      swal(`Error`, `Something went wrong!`, `error`);
    })
);

export const changeFavoriteStatus = (id, status) => (dispatch, _getState, api) => (
  api.post(`/favorite/${id}/${status}`)
    .then(() => {
      dispatch(fetchFilmsList());
      dispatch(fetchPromoFilm());
    })
    .catch(({response}) => {
      if (response.status === HttpCode.UNAUTHORIZED) {
        dispatch(ActionCreator.redirectToRoute(`/login`));
      } else {
        swal(`Error`, `Something went wrong!`, `error`);
      }
    })
);
