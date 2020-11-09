import {getFilteredFilms} from '../../utils/film';
import FilmsList from '../films-list/films-list';
import {propsForFilms} from '../../utils/prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {genresList} from '../../store/reducer';


const GenresList = (props) => {
  const {films, activeGenre, changeActiveGenre, changeFilmsList} = props;

  return (
    <>
      <ul className="catalog__genres-list">
        {genresList.map((elem, i) => (
          <li key={i} className={`catalog__genres-item ${activeGenre === elem ? `catalog__genres-item--active` : ``}`} onClick={(evt) => {
            evt.preventDefault();
            changeActiveGenre(elem);
            changeFilmsList(elem);
          }}>
            <a href="#" className="catalog__genres-link">{elem}</a>
          </li>
        ))}
      </ul>

      <FilmsList films={films}/>
    </>
  );
};

GenresList.propTypes = {
  films: PropTypes.arrayOf(propsForFilms).isRequired,
  activeGenre: PropTypes.string.isRequired,
  changeActiveGenre: PropTypes.func.isRequired,
  changeFilmsList: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeGenre: state.activeGenre,
  films: getFilteredFilms(state.films, state.activeGenre),
});

const mapDispatchToProps = (dispatch) => ({
  changeActiveGenre(genre) {
    dispatch(ActionCreator.changeActiveGenre(genre));
  },
  changeFilmsList(genre) {
    dispatch(ActionCreator.changeFilmsList(genre));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
