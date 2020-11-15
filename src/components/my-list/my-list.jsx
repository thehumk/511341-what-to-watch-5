import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import FilmsList from '../films-list/films-list';
import {propsForFilms} from '../../utils/prop-types';
import {AppRoute} from '../../utils/const';

const MyList = (props) => {
  const {films, renderFilmsCount, changeRenderFilmsCount} = props;
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to={AppRoute.ROOT} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">My list</h1>

        <div className="user-block">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </div>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmsList
          films={films}
          renderFilmsCount={renderFilmsCount}
          changeRenderFilmsCount={changeRenderFilmsCount}/>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <Link to={AppRoute.ROOT} className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

MyList.propTypes = {
  films: PropTypes.arrayOf(propsForFilms).isRequired,
  renderFilmsCount: PropTypes.number.isRequired,
  changeRenderFilmsCount: PropTypes.func.isRequired,
};

const mapStateToProps = ({DATA, FILMS_STATUS}) => ({
  films: DATA.films,
  renderFilmsCount: FILMS_STATUS.renderFilmsCount,
});

const mapDispatchToProps = (dispatch) => ({
  changeRenderFilmsCount(count) {
    dispatch(ActionCreator.changeRenderFilmsCount(count));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MyList);
