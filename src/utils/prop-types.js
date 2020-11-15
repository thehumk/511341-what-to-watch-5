import PropTypes from 'prop-types';

export const propsForFilms = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  poster_image: PropTypes.string.isRequired,
  background_image: PropTypes.string.isRequired,
  preview_image: PropTypes.string.isRequired,
  preview_video_link: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.array.isRequired,
  released: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  scores_count: PropTypes.number.isRequired,
  run_time: PropTypes.number.isRequired,
  // reviews: PropTypes.arrayOf(PropTypes.shape({
  //   text: PropTypes.string.isRequired,
  //   userRating: PropTypes.string.isRequired,
  //   userName: PropTypes.string.isRequired,
  //   date: PropTypes.string.isRequired,
  // })).isRequired,
}).isRequired;

export const propsForRouter = PropTypes.shape({
  match: PropTypes.object,
  history: PropTypes.object,
  location: PropTypes.object,
});
