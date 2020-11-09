export const withReviewForm = (Component) => {
  return class WithReviewForm extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        reviewText: null,
        rating: null,
      };

      this.submitHandler = this.submitHandler.bind(this);
      this.fieldChangeHandler = this.fieldChangeHandler.bind(this);
    }

    submitHandler(evt) {
      evt.preventDefault();
    }

    fieldChangeHandler(evt) {
      const {name, value} = evt.target;
      this.setState({[name]: value});
    }

    render() {
      return (
        <Component
          {...this.props}
          submitHandler={this.submitHandler}
          fieldChangeHandler={this.fieldChangeHandler}
        />
      );
    }
  };
};
