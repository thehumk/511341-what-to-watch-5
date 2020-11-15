import {Link} from 'react-router-dom';
import {propsForFilms} from '../../utils/prop-types';
import {connect} from 'react-redux';
import GenresList from '../genres-list/genres-list';
import {AuthorizationStatus, AppRoute} from '../../utils/const';

const Main = (props) => {
  const {films, authorizationStatus, onMyListButtonClick, onPlayerButtonClick} = props;
  return (
    <>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={films[0].background_image} alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="user-block">
            {authorizationStatus === AuthorizationStatus.NO_AUTH && (
              <Link to={AppRoute.SING_IN} className="user-block__link">Sign in</Link>
            )}
            {authorizationStatus === AuthorizationStatus.AUTH && (
              <div className="user-block__avatar">
                <Link to={AppRoute.MY_LIST}>
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </Link>
              </div>
            )}
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={films[0].poster_image} alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{films[0].name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{films[0].genre}</span>
                <span className="movie-card__year">{films[0].released}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button" onClick={() => {
                  onPlayerButtonClick(films[0].id);
                }}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button" onClick={onMyListButtonClick}>
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
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

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

Main.propTypes = {
  films: PropTypes.arrayOf(propsForFilms).isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  onMyListButtonClick: PropTypes.func.isRequired,
  onPlayerButtonClick: PropTypes.func.isRequired,
};

const mapStateToProps = ({DATA, USER}) => ({
  films: DATA.films,
  authorizationStatus: USER.authorizationStatus,
});

export default connect(mapStateToProps)(Main);
