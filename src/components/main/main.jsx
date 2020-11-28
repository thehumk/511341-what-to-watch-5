import React from 'react';
import PropTypes from 'prop-types';
import {propsForFilms} from '../../utils/prop-types';
import {connect} from 'react-redux';
import Header from '../header/header';
import Footer from '../footer/footer';
import GenresList from '../genres-list/genres-list';
import {changeFavoriteStatus} from '../../store/api-actions';

const Main = (props) => {
  const {promoFilm, changeFavoriteStatusHandler, onPlayerButtonClick} = props;

  return (
    <>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={promoFilm.background_image} alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header isMain={true} classHeader={`movie-card__head`}/>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={promoFilm.poster_image} alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{promoFilm.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{promoFilm.genre}</span>
                <span className="movie-card__year">{promoFilm.released}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button" onClick={() => {
                  onPlayerButtonClick(promoFilm.id);
                }}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button" onClick={() => {
                  changeFavoriteStatusHandler(promoFilm.id, +!promoFilm.is_favorite);
                }}>
                  {promoFilm.is_favorite ?
                    <svg viewBox="0 0 18 14" width="18" height="14">
                      <use xlinkHref="#in-list"></use>
                    </svg>
                    :
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                  }
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList/>
        </section>

        <Footer isMain={true}/>
      </div>
    </>
  );
};

Main.propTypes = {
  promoFilm: propsForFilms,
  onPlayerButtonClick: PropTypes.func.isRequired,
  changeFavoriteStatusHandler: PropTypes.func.isRequired,
};

const mapStateToProps = ({DATA}) => ({
  promoFilm: DATA.promoFilm,
});

const mapDispatchToProps = (dispatch) => ({
  changeFavoriteStatusHandler(id, status) {
    dispatch(changeFavoriteStatus(id, status));
  }
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
