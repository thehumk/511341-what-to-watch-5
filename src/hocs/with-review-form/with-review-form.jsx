import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addComment} from '../../store/api-actions';

export const withReviewForm = (Component) => {
  class WithReviewForm extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        comment: ``,
        rating: null,
        disabledSubmit: true,
      };

      this.submitHandler = this.submitHandler.bind(this);
      this.fieldChangeHandler = this.fieldChangeHandler.bind(this);
    }

    componentDidUpdate() {
      if (this.state.comment.length >= 50 && this.state.rating !== null) {
        this.setState({disabledSubmit: false});
      } else {
        this.setState({disabledSubmit: true});
      }
    }

    submitHandler(evt) {
      evt.preventDefault();
      this.setState({disabledSubmit: true});
      this.props.addComment(this.props.filmId, {rating: this.state.rating * 2, comment: this.state.comment});
    }

    fieldChangeHandler(evt) {
      const {name, value} = evt.target;
      this.setState({[name]: value});
    }

    render() {
      return (
        <Component
          {...this.props}
          disabledSubmit={this.state.disabledSubmit}
          submitHandler={this.submitHandler}
          fieldChangeHandler={this.fieldChangeHandler}
        />
      );
    }
  }

  WithReviewForm.propTypes = {
    addComment: PropTypes.func.isRequired,
    filmId: PropTypes.number.isRequired,
  };

  const mapDispatchToProps = (dispatch) => ({
    addComment(id, {rating, comment}) {
      dispatch(addComment(id, {rating, comment}));
    },
  });

  return connect(null, mapDispatchToProps)(WithReviewForm);
};
