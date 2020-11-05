import {getUniqueFilmsGenres, getFilteredFilms} from '../../utils/film';
import FilmsList from '../films-list/films-list';
import {propsForFilms} from '../../utils/prop-types';

class GenresList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.films = props.films;
    this.filteredFilms = this.films;

    this.genresList = Array.from(getUniqueFilmsGenres(this.films));

    this.state = {
      activeGenre: this.genresList[0],
    };

    this.listRef = React.createRef();

    this.genresChangeHandler = this.genresChangeHandler.bind(this);
  }

  genresChangeHandler(evt, genre) {
    evt.preventDefault();

    if (genre === this.state.activeGenre) {
      return;
    }

    this.filteredFilms = getFilteredFilms(this.films, genre);

    this.setState({activeGenre: genre});

    this.listRef.current
      .querySelector(`.catalog__genres-item--active`)
      .classList.remove(`catalog__genres-item--active`);
    evt.currentTarget.classList.add(`catalog__genres-item--active`);
  }

  render() {
    return (
      <>
        <ul className="catalog__genres-list" ref={this.listRef}>
          {this.genresList.map((elem, i) => (
            <li key={i} className={`catalog__genres-item ${i === 0 ? `catalog__genres-item--active` : ``}`} onClick={(evt) => {
              this.genresChangeHandler(evt, elem);
            }}>
              <a href="#" className="catalog__genres-link">{elem}</a>
            </li>
          ))}
        </ul>

        <FilmsList films={this.filteredFilms}/>
      </>
    );
  }
}

GenresList.propTypes = {
  films: PropTypes.arrayOf(propsForFilms).isRequired,
};

export default GenresList;
