import React from 'react';
import PropTypes from 'prop-types';
import {propsForFilms} from '../../utils/prop-types';

const HOVER_TIMEOUT = 1000;

const PreviewSize = {
  WIDTH: `280`,
  HEIGHT: `175`,
};

class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.film = props.film;
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
          poster={this.film.preview_image}
          src={this.film.preview_video_link}
          width={PreviewSize.WIDTH}
          height={PreviewSize.HEIGHT}
          muted
        />
      </>
    );
  }
}

VideoPlayer.propTypes = {
  film: propsForFilms,
  playerStatus: PropTypes.bool.isRequired,
};

export default VideoPlayer;
