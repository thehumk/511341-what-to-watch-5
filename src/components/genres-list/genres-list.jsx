import FilmsList from '../films-list/films-list';
import {propsForFilms} from '../../utils/prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {QUANTITY_RENDER_FILMS} from '../../utils/const';
import {getFilteredFilms} from '../../store/selectors';

const GenresList = (props) => {
  const {filteredFilms, activeGenre, renderFilmsCount, genresList, changeActiveGenre, changeRenderFilmsCount} = props;

  return (
    <>
      <ul className="catalog__genres-list">
        {genresList.map((elem, i) => (
          <li key={i} className={`catalog__genres-item ${activeGenre === elem ? `catalog__genres-item--active` : ``}`} onClick={(evt) => {
            evt.preventDefault();
            changeActiveGenre(elem);
            changeRenderFilmsCount(QUANTITY_RENDER_FILMS);
          }}>
            <a href="#" className="catalog__genres-link">{elem}</a>
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

export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
