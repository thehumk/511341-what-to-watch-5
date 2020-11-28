import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {propsForFilms, propsForComments} from '../../utils/prop-types';
import {fetchCommentsFilm} from '../../store/api-actions';

const TypeTabs = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

export const withFilmTabs = (Component) => {
  class WithFilmTabs extends React.PureComponent {
    constructor(props) {
      super(props);

      this.film = props.film;

      this.state = {
        tab: TypeTabs.OVERVIEW,
      };

      this.tabsClickHandler = this.tabsClickHandler.bind(this);
    }

    componentDidMount() {
      this.props.getFilmComments(this.film.id);
    }

    componentDidUpdate() {
      if (this.film.id !== this.props.film.id) {
        this.setState({tab: TypeTabs.OVERVIEW});
        this.film = this.props.film;
        this.props.getFilmComments(this.film.id);
      }
    }

    tabsClickHandler(evt, type) {
      evt.preventDefault();

      if (this.state.tab === type) {
        return;
      }

      this.setState({tab: type});
    }

    render() {
      const {filmComments} = this.props;

      return (
        <Component
          {...this.props}
          film={this.film}
          filmComments={filmComments}
          tab={this.state.tab}
          tabsClickHandler={this.tabsClickHandler}
        />
      );
    }
  }

  WithFilmTabs.propTypes = {
    film: propsForFilms,
    filmComments: PropTypes.arrayOf(propsForComments).isRequired,
    getFilmComments: PropTypes.func.isRequired,
  };

  const mapStateToProps = ({COMMENTS}) => ({
    filmComments: COMMENTS.comments,
  });

  const mapDispatchToProps = (dispatch) => ({
    getFilmComments(id) {
      dispatch(fetchCommentsFilm(id));
    },
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithFilmTabs);
};
