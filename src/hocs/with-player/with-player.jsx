import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {propsForFilms} from '../../utils/prop-types';

export const withPlayer = (Component) => {
  class WithPlayer extends React.PureComponent {
    constructor(props) {
      super(props);

      this.films = props.films;
      this.match = props.match;
      this.film = this.films.find((elem) => elem.id.toString() === this.match.params.id);

      this.state = {
        playFilm: true,
        progressVideo: 0,
        timeLeft: 0,
      };

      this.videoRef = React.createRef();

      this.exitButtonClickHandler = this.exitButtonClickHandler.bind(this);
      this.filmPlayHandler = this.filmPlayHandler.bind(this);
      this.filmPauseHandler = this.filmPauseHandler.bind(this);
      this.fullScreenClickHandler = this.fullScreenClickHandler.bind(this);
      this.timeUpdateHandler = this.timeUpdateHandler.bind(this);
    }

    componentDidMount() {
      const video = this.videoRef.current;
      video.play();
    }

    componentDidUpdate() {
      const video = this.videoRef.current;
      if (this.state.playFilm) {
        video.play();
      } else {
        video.pause();
      }
    }

    exitButtonClickHandler() {
      this.props.onExitClick();
    }

    filmPlayHandler() {
      this.setState({playFilm: true});
    }

    filmPauseHandler() {
      this.setState({playFilm: false});
    }

    fullScreenClickHandler() {
      const video = this.videoRef.current;
      video.requestFullscreen();
    }

    timeUpdateHandler() {
      const video = this.videoRef.current;

      this.setState({
        progressVideo: video.currentTime * 100 / video.duration,
        timeLeft: video.duration - video.currentTime,
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          film={this.film}
          playFilm={this.state.playFilm}
          timeLeftFilm={this.state.timeLeft}
          progressVideo={this.state.progressVideo}
          exitButtonClickHandler={this.exitButtonClickHandler}
          filmPlayHandler={this.filmPlayHandler}
          filmPauseHandler={this.filmPauseHandler}
          fullScreenClickHandler={this.fullScreenClickHandler}>
          <video
            ref={this.videoRef}
            src={this.film.video_link}
            className="player__video"
            poster={`img/${this.film.bigPoster}`}
            onTimeUpdate={this.timeUpdateHandler}
            muted>
          </video>
        </Component>
      );
    }
  }

  WithPlayer.propTypes = {
    films: PropTypes.arrayOf(propsForFilms).isRequired,
    match: PropTypes.object.isRequired,
    onExitClick: PropTypes.func.isRequired,
  };

  const mapStateToProps = ({DATA}) => ({
    films: DATA.films,
  });

  return connect(mapStateToProps)(WithPlayer);
};
