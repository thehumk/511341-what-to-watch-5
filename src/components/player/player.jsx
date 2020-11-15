import {withPlayer} from '../../hocs/with-player/with-player';
import {getFormattedLeftTime} from '../../utils/utils';
import {propsForFilms} from '../../utils/prop-types';

const Player = (props) => {
  const {children, film, playFilm, timeLeftFilm, progressVideo, exitButtonClickHandler, filmPlayHandler, filmPauseHandler, fullScreenClickHandler} = props;
  return (
    <div className="player">
      {children}

      <button type="button" className="player__exit" onClick={exitButtonClickHandler}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progressVideo} max="100"></progress>
            <div className="player__toggler" style={ {left: `${progressVideo}%`} }>Toggler</div>
          </div>
          <div className="player__time-value">{getFormattedLeftTime(timeLeftFilm)}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={() => playFilm ? filmPauseHandler() : filmPlayHandler()}>
            {playFilm && (
            <>
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </>
            )}
            {!playFilm && (
            <>
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use xlinkHref="#pause"></use>
              </svg>
              <span>Pause</span>
            </>
            )}
          </button>
          <div className="player__name">{film.name}</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27" onClick={fullScreenClickHandler}>
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  children: PropTypes.node.isRequired,
  film: propsForFilms,
  playFilm: PropTypes.bool.isRequired,
  timeLeftFilm: PropTypes.number.isRequired,
  progressVideo: PropTypes.number.isRequired,
  exitButtonClickHandler: PropTypes.func.isRequired,
  filmPlayHandler: PropTypes.func.isRequired,
  filmPauseHandler: PropTypes.func.isRequired,
  fullScreenClickHandler: PropTypes.func.isRequired,
};

export default withPlayer(Player);
