import {Link} from 'react-router-dom';
import {propsForFilms} from '../../utils/prop-types';
import VideoPlayer from '../video-player/video-player';

const PreviewSize = {
  WIDTH: `280`,
  HEIGHT: `175`,
};

class FilmCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this.film = props.film;
    this.cardHoverHandler = props.cardHoverHandler;
    this.cardLeaveHoverHandler = props.cardLeaveHoverHandler;

    this.state = {
      playerStatus: false
    };

    this.mouseEnterHandler = this.mouseEnterHandler.bind(this);
    this.mouseLeaveHandler = this.mouseLeaveHandler.bind(this);
  }

  mouseEnterHandler() {
    this.cardHoverHandler(this.film.id);
    this.setState({playerStatus: true});
  }

  mouseLeaveHandler() {
    this.cardLeaveHoverHandler();
    this.setState({playerStatus: false});
  }

  render() {
    const playerStatus = this.state.playerStatus;
    return (
      <article className="small-movie-card catalog__movies-card"
        onMouseEnter={this.mouseEnterHandler}
        onMouseLeave={this.mouseLeaveHandler}>
        <Link className="small-movie-card__link" to={`/films/${this.film.id}`}>
          <div className="small-movie-card__image">
            <VideoPlayer film={this.film} size={PreviewSize} playerStatus={playerStatus} />
          </div>
          <h3 className="small-movie-card__title">
            <span>{this.film.title}</span>
          </h3>
        </Link>
      </article>
    );
  }
}

FilmCard.propTypes = {
  film: propsForFilms,
  cardHoverHandler: PropTypes.func.isRequired,
  cardLeaveHoverHandler: PropTypes.func.isRequired,
};

export default FilmCard;
