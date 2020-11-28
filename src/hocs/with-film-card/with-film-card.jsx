import React from 'react';
import PropTypes from 'prop-types';
import {propsForFilms} from '../../utils/prop-types';

export const withFilmCard = (Component) => {
  class WithFilmCard extends React.PureComponent {
    constructor(props) {
      super(props);

      this.film = props.film;
      this.cardHoverHandler = props.cardHoverHandler;
      this.cardLeaveHoverHandler = props.cardLeaveHoverHandler;

      this.state = {
        playerStatus: false
      };

      this.mouseEnterHandler = this.mouseEnterHandler.bind(this);
      this.mouseLeaveHandler = this.mouseLeaveHandler.bind(this);
    }

    mouseEnterHandler() {
      this.cardHoverHandler(this.film.id);
      this.setState({playerStatus: true});
    }

    mouseLeaveHandler() {
      this.cardLeaveHoverHandler();
      this.setState({playerStatus: false});
    }

    render() {
      const playerStatus = this.state.playerStatus;
      return (
        <Component
          {...this.props}
          film={this.film}
          playerStatus={playerStatus}
          mouseEnterHandler={this.mouseEnterHandler}
          mouseLeaveHandler={this.mouseLeaveHandler}
        />
      );
    }
  }

  WithFilmCard.propTypes = {
    film: propsForFilms,
    cardHoverHandler: PropTypes.func.isRequired,
    cardLeaveHoverHandler: PropTypes.func.isRequired,
  };

  return WithFilmCard;
};
