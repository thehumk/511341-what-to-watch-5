import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {getFilteredFilms} from '../../store/selectors';
import FilmsList from '../films-list/films-list';
import FilmTabs from '../film-tabs/film-tabs';
import Header from '../header/header';
import Footer from '../footer/footer';
import {propsForFilms} from '../../utils/prop-types';
import {AuthorizationStatus} from '../../utils/const';
import {changeFavoriteStatus} from '../../store/api-actions';

const MAX_COUNT_SIMILAR_FILMS = 4;

class Film extends React.PureComponent {
  constructor(props) {
    super(props);

    this.films = props.films;
    this.match = props.match;

    this.film = this.films.find((elem) => elem.id.toString() === this.match.params.id);

    this.changeFavoriteStatusHandler = this.changeFavoriteStatusHandler.bind(this);
  }

  changeFavoriteStatusHandler() {
    this.props.changeFavoriteStatus(this.film.id, +!this.film.is_favorite);
  }

  render() {
    const {authorizationStatus, renderFilmsCount, changeRenderFilmsCount, onPlayerButtonClick} = this.props;

    this.films = this.props.films;
    this.match = this.props.match;
    this.film = this.films.find((elem) => elem.id.toString() === this.match.params.id);

    const similarFilms = getFilteredFilms({films: this.films, genre: this.film.genre}).filter((elem) => elem.id !== this.film.id);

    return (
      <>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={this.film.background_image} alt={this.film.name} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <Header classHeader={`movie-card__head`}/>

            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{this.film.name}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{this.film.genre}</span>
                  <span className="movie-card__year">{this.film.released}</span>
                </p>

                <div className="movie-card__buttons">
                  <button className="btn btn--play movie-card__button" type="button" onClick={() => {
                    onPlayerButtonClick(this.film.id);
                  }}>
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                  <button className="btn btn--list movie-card__button" type="button" onClick={this.changeFavoriteStatusHandler}>
                    {this.film.is_favorite ?
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
                  {authorizationStatus === AuthorizationStatus.AUTH && (
                    <Link to={`/films/${this.film.id}/review`} className="btn movie-card__button">Add review</Link>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src={this.film.poster_image} alt={this.film.name} width="218" height="327" />
              </div>

              <FilmTabs film={this.film}/>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <FilmsList
              films={similarFilms.slice(0, MAX_COUNT_SIMILAR_FILMS)} renderFilmsCount={renderFilmsCount}
              changeRenderFilmsCount={changeRenderFilmsCount}/>
          </section>

          <Footer/>
        </div>
      </>
    );
  }
}

Film.propTypes = {
  films: PropTypes.arrayOf(propsForFilms).isRequired,
  changeFavoriteStatus: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  renderFilmsCount: PropTypes.number.isRequired,
  changeRenderFilmsCount: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  onPlayerButtonClick: PropTypes.func.isRequired,
};

const mapStateToProps = ({DATA, FILMS_STATUS, USER}) => ({
  films: DATA.films,
  authorizationStatus: USER.authorizationStatus,
  renderFilmsCount: FILMS_STATUS.renderFilmsCount,
});

const mapDispatchToProps = (dispatch) => ({
  changeRenderFilmsCount(count) {
    dispatch(ActionCreator.changeRenderFilmsCount(count));
  },

  changeFavoriteStatus(id, status) {
    dispatch(changeFavoriteStatus(id, status));
  }
});

export {Film};
export default connect(mapStateToProps, mapDispatchToProps)(Film);
