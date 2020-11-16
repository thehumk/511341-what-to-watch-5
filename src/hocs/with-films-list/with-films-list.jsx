import {propsForFilms} from '../../utils/prop-types';
import {QUANTITY_RENDER_FILMS} from '../../utils/const';

export const withFilmsList = (Component) => {
  class WithFilmsList extends React.PureComponent {
    constructor(props) {
      super(props);

      this.films = props.films;
      this.renderFilmsCount = props.renderFilmsCount;
      this.changeRenderFilmsCount = props.changeRenderFilmsCount;

      this.state = {
        hoveredFilm: null,
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
      this.changeRenderFilmsCount(this.renderFilmsCount + QUANTITY_RENDER_FILMS);
    }

    componentDidMount() {
      this.changeRenderFilmsCount(QUANTITY_RENDER_FILMS);
    }

    render() {
      this.films = this.props.films;
      this.renderFilmsCount = this.props.renderFilmsCount;
      return (
        <Component
          {...this.props}
          films={this.films}
          quantityRenderFilms={this.renderFilmsCount}
          cardHoverHandler={this.cardHoverHandler}
          cardLeaveHoverHandler={this.cardLeaveHoverHandler}
          showMoreButtonClickHandler={this.showMoreButtonClickHandler}
        />
      );
    }
  }

  WithFilmsList.propTypes = {
    films: PropTypes.arrayOf(propsForFilms).isRequired,
    renderFilmsCount: PropTypes.number.isRequired,
    changeRenderFilmsCount: PropTypes.func.isRequired,
  };

  return WithFilmsList;
};
