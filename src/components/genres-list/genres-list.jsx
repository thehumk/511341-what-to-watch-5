import React from 'react';
import PropTypes from 'prop-types';
import FilmsList from '../films-list/films-list';
import {propsForFilms} from '../../utils/prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {QUANTITY_RENDER_FILMS, MAX_QUANTITY_GENRES_TO_RENDER} from '../../utils/const';
import {getFilteredFilms} from '../../store/selectors';

const GenresList = (props) => {
  const {filteredFilms, activeGenre, renderFilmsCount, genresList, changeActiveGenre, changeRenderFilmsCount} = props;

  return (
    <>
      <ul className="catalog__genres-list">
        {genresList.slice(0, MAX_QUANTITY_GENRES_TO_RENDER).map((elem, i) => (
          <li key={i} className={`catalog__genres-item ${activeGenre === elem ? `catalog__genres-item--active` : ``}`} onClick={() => {
            changeActiveGenre(elem);
            changeRenderFilmsCount(QUANTITY_RENDER_FILMS);
          }}>
            <a className="catalog__genres-link">{elem}</a>
          </li>
        ))}
      </ul>

      <FilmsList
        films={filteredFilms}
        renderFilmsCount={renderFilmsCount}
        changeRenderFilmsCount={changeRenderFilmsCount}
      />
    </>
  );
};

GenresList.propTypes = {
  filteredFilms: PropTypes.arrayOf(propsForFilms).isRequired,
  activeGenre: PropTypes.string.isRequired,
  renderFilmsCount: PropTypes.number.isRequired,
  genresList: PropTypes.array.isRequired,
  changeActiveGenre: PropTypes.func.isRequired,
  changeRenderFilmsCount: PropTypes.func.isRequired,
};

const mapStateToProps = ({DATA, FILMS_STATUS}) => ({
  activeGenre: FILMS_STATUS.activeGenre,
  filteredFilms: getFilteredFilms({films: DATA.films, genre: FILMS_STATUS.activeGenre}),
  renderFilmsCount: FILMS_STATUS.renderFilmsCount,
  genresList: DATA.genresList,
});

const mapDispatchToProps = (dispatch) => ({
  changeActiveGenre(genre) {
    dispatch(ActionCreator.changeActiveGenre(genre));
  },
  changeRenderFilmsCount(count) {
    dispatch(ActionCreator.changeRenderFilmsCount(count));
  },
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
