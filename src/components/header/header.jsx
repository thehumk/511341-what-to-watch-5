import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {propsForUser} from '../../utils/prop-types';
import {AuthorizationStatus, AppRoute} from '../../utils/const';

const Header = (props) => {
  const {children, isMain, isSignIn, classHeader, authorizationStatus, user} = props;

  return (
    <header className={`page-header ${classHeader}`}>
      <div className="logo">
        {isMain ?
          <a className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
          :
          <Link to={AppRoute.ROOT} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        }
      </div>

      {children}

      {isSignIn ? `` :
        <div className="user-block">
          {authorizationStatus === AuthorizationStatus.NO_AUTH && (
            <Link to={AppRoute.SIGN_IN} className="user-block__link">Sign in</Link>
          )}
          {authorizationStatus === AuthorizationStatus.AUTH && (
            <div className="user-block__avatar">
              <Link to={AppRoute.MY_LIST}>
                <img src={user ? user.avatar_url : ``} alt="User avatar" width="63" height="63" />
              </Link>
            </div>
          )}
        </div>
      }
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.node,
  isMain: PropTypes.bool,
  isSignIn: PropTypes.bool,
  classHeader: PropTypes.string,
  authorizationStatus: PropTypes.string.isRequired,
  user: propsForUser,
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
  user: USER.user,
});

export {Header};
export default connect(mapStateToProps)(Header);
