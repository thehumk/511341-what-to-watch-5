import PropTypes from 'prop-types';

export const propsForFilms = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  bigPoster: PropTypes.string.isRequired,
  smallPoster: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  details: PropTypes.shape({
    genre: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    actors: PropTypes.array.isRequired,
    release: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    quantityVotes: PropTypes.string.isRequired,
  }).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    userRating: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date),
  })).isRequired,
}).isRequired;

export const propsForRouter = PropTypes.shape({
  match: PropTypes.object,
  history: PropTypes.object,
  location: PropTypes.object,
});
