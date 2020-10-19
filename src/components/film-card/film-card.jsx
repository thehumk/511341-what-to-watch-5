import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {propsForFilms} from '../../utils/prop-types';

const FilmCard = (props) => {
  const {film, cardHoverHandler, cardLeaveHoverHandler} = props;
  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={() => cardHoverHandler(film.id)}
      onMouseLeave={cardLeaveHoverHandler}>
      <div className="small-movie-card__image">
        <img src={`img/${film.smallPoster}`} alt={`${film.title}`} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${film.id}`}>{film.title}</Link>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  film: propsForFilms,
  cardHoverHandler: PropTypes.func.isRequired,
  cardLeaveHoverHandler: PropTypes.func.isRequired,
};

export default FilmCard;
