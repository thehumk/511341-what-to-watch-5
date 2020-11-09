import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import ReviewForm from '../review-form/review-form';
import {propsForFilms, propsForRouter} from '../../utils/prop-types';

const AddReview = (props) => {
  const {films} = props;
  const {match} = props.routerProps;
  const film = films.find((elem) => elem.id === match.params.id);
  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={`img/${film.bigPoster}`} alt={film.title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${film.id}`} className="breadcrumbs__link">{film.title}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <div className="user-block">
            <div className="user-block__avatar">
              <Link to="/mylist">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </Link>
            </div>
          </div>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={`img/${film.poster}`} alt={film.title} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <ReviewForm/>
      </div>

    </section>
  );
};

AddReview.propTypes = {
  films: PropTypes.arrayOf(propsForFilms).isRequired,
  routerProps: propsForRouter,
};

const mapStateToProps = (state) => ({
  films: state.films,
});

export default connect(mapStateToProps)(AddReview);
