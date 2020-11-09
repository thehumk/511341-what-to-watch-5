import {propsForFilms} from '../../utils/prop-types';

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
        tab: TypeTabs.OVERVIEW
      };

      this.tabsClickHandler = this.tabsClickHandler.bind(this);
    }

    tabsClickHandler(evt, type) {
      evt.preventDefault();

      if (this.state.tab === type) {
        return;
      }

      this.setState({tab: type});
    }

    render() {
      this.film = this.props.film;
      return (
        <Component
          {...this.props}
          film={this.film}
          tab={this.state.tab}
          tabsClickHandler={this.tabsClickHandler}
        />
      );
    }
  }

  WithFilmTabs.propTypes = {
    film: propsForFilms,
  };

  return WithFilmTabs;
};
