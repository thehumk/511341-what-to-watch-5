import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import ReviewForm from '../review-form/review-form';
import {propsForFilms} from '../../utils/prop-types';
import Header from '../header/header';

const AddReview = (props) => {
  const {films, match} = props;
  const film = films.find((elem) => elem.id.toString() === match.params.id);

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={film.background_image} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${film.id}`} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
        </Header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={film.poster_image} alt={film.name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <ReviewForm filmId={film.id}/>
      </div>

    </section>
  );
};

AddReview.propTypes = {
  films: PropTypes.arrayOf(propsForFilms).isRequired,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = ({DATA}) => ({
  films: DATA.films,
});

export {AddReview};
export default connect(mapStateToProps)(AddReview);
