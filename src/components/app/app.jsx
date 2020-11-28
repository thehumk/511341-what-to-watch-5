import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, Router, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PrivateRoute from '../private-route/private-route';
import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import Film from '../film/film';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import browserHistory from '../../browser-history';
import {AppRoute, AuthorizationStatus} from '../../utils/const';

const App = (props) => {
  const {authorizationStatus} = props;
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact
          path={AppRoute.ROOT}
          render={({history}) => (
            <Main
              onPlayerButtonClick={(id) => history.push(`/player/${id}`)}
            />
          )}
        />
        <Route exact path={AppRoute.SIGN_IN}
          render={() => {
            return (
              authorizationStatus === AuthorizationStatus.NO_AUTH
                ? <SignIn/>
                : <Redirect to={AppRoute.ROOT}/>
            );
          }}
        />
        <PrivateRoute
          exact
          path={AppRoute.MY_LIST}
          render={() => {
            return (
              <MyList/>
            );
          }}
        />
        <Route exact
          path={AppRoute.FILM}
          render={({history, match}) => (
            <Film
              match={match}
              onPlayerButtonClick={(id) => history.push(`/player/${id}`)}
            />
          )}
        />
        <PrivateRoute
          exact
          path={AppRoute.FILM_REVIEW}
          render={({match}) => {
            return (
              <AddReview match={match}/>
            );
          }}
        />
        <Route exact path={AppRoute.FILM_PLAYER}
          render={({match, history}) => (
            <Player match={match} onExitClick={() => history.goBack()}/>
          )}
        />
      </Switch>
    </Router>
  );
};

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
});

export {App};
export default connect(mapStateToProps)(App);
