import React from 'react';
import PropTypes from 'prop-types';
import {propsForFilms} from '../../utils/prop-types';
import FilmCard from '../film-card/film-card';
import ShowMoreButton from '../show-more-button/show-more-button';
import {withFilmsList} from '../../hocs/with-films-list/with-films-list';

const FilmsList = (props) => {
  const {films, quantityRenderFilms, cardHoverHandler, cardLeaveHoverHandler, showMoreButtonClickHandler} = props;
  return (
    <>
      <div className="catalog__movies-list">
        {films.slice(0, quantityRenderFilms).map((elem) => (
          <FilmCard
            key={elem.id}
            film={elem}
            cardHoverHandler={cardHoverHandler}
            cardLeaveHoverHandler={cardLeaveHoverHandler}
          />
        ))}
      </div>
      <div className="catalog__more">
        {quantityRenderFilms < films.length ? <ShowMoreButton clickHandler={showMoreButtonClickHandler}/> : ``}
      </div>
    </>
  );
};

FilmsList.propTypes = {
  films: PropTypes.arrayOf(propsForFilms).isRequired,
  quantityRenderFilms: PropTypes.number.isRequired,
  cardHoverHandler: PropTypes.func.isRequired,
  cardLeaveHoverHandler: PropTypes.func.isRequired,
  showMoreButtonClickHandler: PropTypes.func.isRequired,
};

export {FilmsList};
export default withFilmsList(FilmsList);
