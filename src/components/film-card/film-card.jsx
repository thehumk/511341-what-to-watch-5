import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {propsForFilms} from '../../utils/prop-types';
import VideoPlayer from '../video-player/video-player';
import {withFilmCard} from '../../hocs/with-film-card/with-film-card';

const FilmCard = (props) => {
  const {film, playerStatus, mouseEnterHandler, mouseLeaveHandler} = props;
  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}>
      <Link className="small-movie-card__link" to={`/films/${film.id}`}>
        <div className="small-movie-card__image">
          <VideoPlayer film={film} playerStatus={playerStatus} />
        </div>
        <h3 className="small-movie-card__title">
          <span>{film.name}</span>
        </h3>
      </Link>
    </article>
  );
};

FilmCard.propTypes = {
  film: propsForFilms,
  playerStatus: PropTypes.bool.isRequired,
  mouseEnterHandler: PropTypes.func.isRequired,
  mouseLeaveHandler: PropTypes.func.isRequired,
};

export {FilmCard};
export default withFilmCard(FilmCard);
