import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Header from '../header/header';
import Footer from '../footer/footer';
import {login} from '../../store/api-actions';
import {EMAIL_REGEXP} from '../../utils/const';
import swal from 'sweetalert';

class SignIn extends React.PureComponent {
  constructor(props) {
    super(props);

    this.loginRef = React.createRef();
    this.passwordRef = React.createRef();

    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(evt) {
    const {onSubmit} = this.props;

    evt.preventDefault();

    const loginValue = this.loginRef.current.value;
    const passwordValue = this.passwordRef.current.value;

    if (loginValue === `` || passwordValue === ``) {
      swal(`Error`, `Login and password should not be empty.`, `error`);
      return;
    }

    if (!EMAIL_REGEXP.test(loginValue)) {
      swal(`Error`, `Please enter a valid email address`, `error`);
      return;
    }

    onSubmit({
      login: loginValue,
      password: passwordValue,
    });
  }

  render() {
    return (
      <div className="user-page">
        <Header isSignIn={true} classHeader={`user-page__head`}>
          <h1 className="page-title user-page__title">Sign in</h1>
        </Header>

        <div className="sign-in user-page__content">
          <form action="#" className="sign-in__form">
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input ref={this.loginRef} className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" />
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input ref={this.passwordRef} className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" />
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit" onClick={this.submitHandler}>Sign in</button>
            </div>
          </form>
        </div>

        <Footer/>
      </div>
    );
  }
}

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

export {SignIn};
export default connect(null, mapDispatchToProps)(SignIn);
