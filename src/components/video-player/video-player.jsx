import {propsForFilms} from '../../utils/prop-types';

const HOVER_TIMEOUT = 1000;

class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.film = props.film;
    this.size = props.size;
    this.playerStatus = props.playerStatus;

    this.videoRef = React.createRef();
  }

  componentDidUpdate() {
    this.playerStatus = this.props.playerStatus;
    this.timeoutId = setTimeout(() => {
      if (this.playerStatus) {
        this.videoRef.current.play();
      }
    }, HOVER_TIMEOUT);

    if (!this.playerStatus) {
      this.videoRef.current.load();
    }
  }

  componentWillUnmount() {
    this.playerStatus = false;
    clearTimeout(this.timeoutId);
  }

  render() {
    return (
      <>
        <video
          ref={this.videoRef}
          poster={`img/${this.film.smallPoster}`}
          src={this.film.preview}
          width={this.size.WIDTH}
          height={this.size.HEIGHT}
          muted
        />
      </>
    );
  }
}

VideoPlayer.propTypes = {
  film: propsForFilms,
  size: PropTypes.shape({
    WIDTH: PropTypes.string.isRequired,
    HEIGHT: PropTypes.string.isRequired,
  }),
  playerStatus: PropTypes.bool.isRequired,
};

export default VideoPlayer;
