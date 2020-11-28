import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import FilmsList from '../films-list/films-list';
import Header from '../header/header';
import Footer from '../footer/footer';
import {propsForFilms} from '../../utils/prop-types';

const MyList = (props) => {
  const {films, renderFilmsCount, changeRenderFilmsCount} = props;

  return (
    <div className="user-page">
      <Header classHeader={`user-page__head`}>
        <h1 className="page-title user-page__title">My list</h1>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmsList
          films={films}
          renderFilmsCount={renderFilmsCount}
          changeRenderFilmsCount={changeRenderFilmsCount}/>
      </section>

      <Footer/>
    </div>
  );
};

MyList.propTypes = {
  films: PropTypes.arrayOf(propsForFilms).isRequired,
  renderFilmsCount: PropTypes.number.isRequired,
  changeRenderFilmsCount: PropTypes.func.isRequired,
};

const mapStateToProps = ({DATA, FILMS_STATUS}) => ({
  films: DATA.films.filter((elem) => elem.is_favorite === true),
  renderFilmsCount: FILMS_STATUS.renderFilmsCount,
});

const mapDispatchToProps = (dispatch) => ({
  changeRenderFilmsCount(count) {
    dispatch(ActionCreator.changeRenderFilmsCount(count));
  }
});

export {MyList};
export default connect(mapStateToProps, mapDispatchToProps)(MyList);
