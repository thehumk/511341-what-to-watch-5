import React from 'react';
import {propsForFilms} from '../../utils/prop-types';
import {getFilmRating} from '../../utils/film';

const TypeTabs = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

class FilmTabs extends React.PureComponent {
  constructor(props) {
    super(props);

    this.film = props.film;

    this.state = {
      tab: `Overview`
    };

    this.navListRef = React.createRef();

    this.tabsClickHandler = this.tabsClickHandler.bind(this);
  }

  tabsClickHandler(evt, type) {
    evt.preventDefault();

    if (this.state.tab === type) {
      return;
    }

    this.setState({tab: type});
    this.navListRef.current
      .querySelector(`.movie-nav__item--active`)
      .classList.remove(`movie-nav__item--active`);

    evt.target.parentElement.classList.add(`movie-nav__item--active`);
  }

  render() {
    const textRating = getFilmRating(this.film.details.rating);
    const duration = (this.film.details.runtime / 60 | 0) + `h ` + (this.film.details.runtime % 60) + `m`;

    return (
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list" ref={this.navListRef}>
            <li className="movie-nav__item movie-nav__item--active">
              <a href="#" className="movie-nav__link" onClick={(evt) => {
                this.tabsClickHandler(evt, TypeTabs.OVERVIEW);
              }}>Overview</a>
            </li>
            <li className="movie-nav__item">
              <a href="#" className="movie-nav__link" onClick={(evt) => {
                this.tabsClickHandler(evt, TypeTabs.DETAILS);
              }}>Details</a>
            </li>
            <li className="movie-nav__item">
              <a href="#" className="movie-nav__link" onClick={(evt) => {
                this.tabsClickHandler(evt, TypeTabs.REVIEWS);
              }}>Reviews</a>
            </li>
          </ul>
        </nav>

        {this.state.tab === `Overview` && (
          <>
            <div className="movie-rating">
              <div className="movie-rating__score">{this.film.details.rating}</div>
              <p className="movie-rating__meta">
                <span className="movie-rating__level">{textRating}</span>
                <span className="movie-rating__count">{this.film.details.quantityVotes} ratings</span>
              </p>
            </div>

            <div className="movie-card__text">
              <p>{this.film.details.description}</p>

              <p className="movie-card__director"><strong>Director: {this.film.details.director}</strong></p>

              <p className="movie-card__starring"><strong>Starring: {this.film.details.actors.join(`, `)} and other</strong></p>
            </div>
          </>
        )}

        {this.state.tab === `Details` && (
          <div className="movie-card__text movie-card__row">
            <div className="movie-card__text-col">
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Director</strong>
                <span className="movie-card__details-value">{this.film.details.director}</span>
              </p>
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Starring</strong>
                <span className="movie-card__details-value">
                  {this.film.details.actors.map((elem, i) => (
                    <React.Fragment key={i}>
                      {elem}
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
                <span className="movie-card__details-value">{this.film.details.genre}</span>
              </p>
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Released</strong>
                <span className="movie-card__details-value">{this.film.details.release}</span>
              </p>
            </div>
          </div>
        )}

        {this.state.tab === `Reviews` && (
          <div className="movie-card__reviews movie-card__row">
            <div className="movie-card__reviews-col">
              {this.film.reviews.map((elem, i) => (
                <div className="review" key={i}>
                  <blockquote className="review__quote">
                    <p className="review__text">{elem.text}</p>

                    <footer className="review__details">
                      <cite className="review__author">{elem.userName}</cite>
                      <time className="review__date" dateTime="2016-12-24">December 24, 2016</time>
                    </footer>
                  </blockquote>

                  <div className="review__rating">{elem.userRating}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

FilmTabs.propTypes = {
  film: propsForFilms
};

export default FilmTabs;
