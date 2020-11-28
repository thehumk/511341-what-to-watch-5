import React from 'react';
import PropTypes from 'prop-types';
import {propsForFilms, propsForComments} from '../../utils/prop-types';
import {getFilmRating} from '../../utils/film';
import {setFormatCommentDate} from '../../utils/utils';
import {withFilmTabs} from '../../hocs/with-film-tabs/with-film-tabs';

const TypeTabs = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

const FilmTabs = (props) => {
  const {film, filmComments, tab, tabsClickHandler} = props;
  const textRating = getFilmRating(film.rating);
  const duration = (film.run_time / 60 | 0) + `h ` + (film.run_time % 60) + `m`;

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          <li className={`movie-nav__item ${tab === TypeTabs.OVERVIEW ? `movie-nav__item--active` : ``}`}>
            <a href="#" className="movie-nav__link" onClick={(evt) => {
              tabsClickHandler(evt, TypeTabs.OVERVIEW);
            }}>Overview</a>
          </li>
          <li className={`movie-nav__item ${tab === TypeTabs.DETAILS ? `movie-nav__item--active` : ``}`}>
            <a href="#" className="movie-nav__link" onClick={(evt) => {
              tabsClickHandler(evt, TypeTabs.DETAILS);
            }}>Details</a>
          </li>
          <li className={`movie-nav__item ${tab === TypeTabs.REVIEWS ? `movie-nav__item--active` : ``}`}>
            <a href="#" className="movie-nav__link" onClick={(evt) => {
              tabsClickHandler(evt, TypeTabs.REVIEWS);
            }}>Reviews</a>
          </li>
          {}
        </ul>
      </nav>

      {tab === TypeTabs.OVERVIEW && (
        <>
          <div className="movie-rating">
            <div className="movie-rating__score">{film.rating}</div>
            <p className="movie-rating__meta">
              <span className="movie-rating__level">{textRating}</span>
              <span className="movie-rating__count">{film.scores_count} ratings</span>
            </p>
          </div>

          <div className="movie-card__text">
            <p>{film.description}</p>

            <p className="movie-card__director"><strong>Director: {film.director}</strong></p>

            <p className="movie-card__starring"><strong>Starring: {film.starring.join(`, `)} and other</strong></p>
          </div>
        </>
      )}

      {tab === TypeTabs.DETAILS && (
        <div className="movie-card__text movie-card__row">
          <div className="movie-card__text-col">
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Director</strong>
              <span className="movie-card__details-value">{film.director}</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Starring</strong>
              <span className="movie-card__details-value">
                {film.starring.map((elem, i) => (
                  <React.Fragment key={i}>
                    {elem}
                    {i < film.starring.length - 1 ? `, ` : ``}
                    <br/>
                  </React.Fragment>
                ))}
              </span>
            </p>
          </div>

          <div className="movie-card__text-col">
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Run Time</strong>
              <span className="movie-card__details-value">{duration}</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Genre</strong>
              <span className="movie-card__details-value">{film.genre}</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Released</strong>
              <span className="movie-card__details-value">{film.released}</span>
            </p>
          </div>
        </div>
      )}

      {tab === TypeTabs.REVIEWS && (
        <div className="movie-card__reviews movie-card__row">
          <div className="movie-card__reviews-col">
            {filmComments.map((elem, i) => (
              <div className="review" key={i}>
                <blockquote className="review__quote">
                  <p className="review__text">{elem.comment}</p>

                  <footer className="review__details">
                    <cite className="review__author">{elem.user.name}</cite>
                    <time className="review__date" dateTime="2016-12-24">{setFormatCommentDate(elem.date)}</time>
                  </footer>
                </blockquote>

                <div className="review__rating">{elem.rating}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

FilmTabs.propTypes = {
  film: propsForFilms,
  filmComments: PropTypes.arrayOf(propsForComments).isRequired,
  tab: PropTypes.string.isRequired,
  tabsClickHandler: PropTypes.func.isRequired,
};

export {FilmTabs};
export default withFilmTabs(FilmTabs);
