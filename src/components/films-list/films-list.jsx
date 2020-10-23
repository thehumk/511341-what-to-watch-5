import FilmCard from '../film-card/film-card';
import {propsForFilms} from '../../utils/prop-types';

class FilmsList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.films = props.films;

    this.state = {
      hoveredFilm: null,
    };

    this.cardHoverHandler = this.cardHoverHandler.bind(this);
    this.cardLeaveHoverHandler = this.cardLeaveHoverHandler.bind(this);
  }

  cardHoverHandler(id) {
    this.setState({hoveredFilm: id});
  }

  cardLeaveHoverHandler() {
    this.setState({hoveredFilm: null});
  }

  render() {
    return (
      <div className="catalog__movies-list">
        {this.films.map((elem) => (
          <FilmCard
            key={elem.id}
            film={elem}
            cardHoverHandler={this.cardHoverHandler}
            cardLeaveHoverHandler={this.cardLeaveHoverHandler}
          />
        ))}
      </div>
    );
  }
}

FilmsList.propTypes = {
  films: PropTypes.arrayOf(propsForFilms).isRequired,
};

export default FilmsList;
