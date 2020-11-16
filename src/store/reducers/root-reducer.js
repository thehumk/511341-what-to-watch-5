import {combineReducers} from 'redux';
import {filmsStatus} from './films-status/films-status';
import {filmsData} from './films-data/films-data';
import {user} from './user/user';

export const NameSpace = {
  DATA: `DATA`,
  FILMS_STATUS: `FILMS_STATUS`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.DATA]: filmsData,
  [NameSpace.FILMS_STATUS]: filmsStatus,
  [NameSpace.USER]: user,
});
