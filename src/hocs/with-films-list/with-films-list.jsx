import {propsForFilms} from '../../utils/prop-types';
import {extend} from '../../utils/utils';

const QUANTITY_RENDER_FILMS = 8;

export const withFilmsList = (Component) => {
  class WithFilmsList extends React.PureComponent {
    constructor(props) {
      super(props);

      this.films = props.films;

      this.state = {
        hoveredFilm: null,
        quantityRenderFilms: QUANTITY_RENDER_FILMS
      };

      this.cardHoverHandler = this.cardHoverHandler.bind(this);
      this.cardLeaveHoverHandler = this.cardLeaveHoverHandler.bind(this);
      this.showMoreButtonClickHandler = this.showMoreButtonClickHandler.bind(this);
    }

    cardHoverHandler(id) {
      this.setState({hoveredFilm: id});
    }

    cardLeaveHoverHandler() {
      this.setState({hoveredFilm: null});
    }

    showMoreButtonClickHandler() {
      this.setState(extend(this.state, {quantityRenderFilms: this.state.quantityRenderFilms + QUANTITY_RENDER_FILMS}));
    }

    render() {
      this.films = this.props.films;
      return (
        <Component
          {...this.props}
          films={this.films}
          quantityRenderFilms={this.state.quantityRenderFilms}
          cardHoverHandler={this.cardHoverHandler}
          cardLeaveHoverHandler={this.cardLeaveHoverHandler}
          showMoreButtonClickHandler={this.showMoreButtonClickHandler}
        />
      );
    }
  }

  WithFilmsList.propTypes = {
    films: PropTypes.arrayOf(propsForFilms).isRequired,
  };

  return WithFilmsList;
};
