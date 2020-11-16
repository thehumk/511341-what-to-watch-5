import {Switch, Route, Router} from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';
import Main from '../main/main';
import SingIn from '../sing-in/sing-in';
import MyList from '../my-list/my-list';
import Film from '../film/film';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import browserHistory from '../../browser-history';
import {AppRoute} from '../../utils/const';

const App = () => {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact
          path={AppRoute.ROOT}
          render={({history}) => (
            <Main
              onMyListButtonClick={() => history.push(AppRoute.MY_LIST)}
              onPlayerButtonClick={(id) => history.push(`/player/${id}`)}
            />
          )}
        />
        <Route exact path={AppRoute.SING_IN}>
          <SingIn/>
        </Route>
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
          render={(routerProps) => (
            <Film
              routerProps={routerProps}
              onMyListButtonClick={() => routerProps.history.push(AppRoute.MY_LIST)}
              onPlayerButtonClick={(id) => routerProps.history.push(`/player/${id}`)}
            />
          )}
        />
        <PrivateRoute
          exact
          path={AppRoute.FILM_REVIEW}
          render={(routerProps) => {
            return (
              <AddReview routerProps={routerProps}/>
            );
          }}
        />
        <Route exact path={AppRoute.FILM_PLAYER}
          render={(routerProps) => (
            <Player routerProps={routerProps}/>
          )}
        />
      </Switch>
    </Router>
  );
};

export default App;
