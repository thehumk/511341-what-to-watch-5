import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Main from '../main/main';
import SingIn from '../sing-in/sing-in';
import MyList from '../my-list/my-list';
import Film from '../film/film';
import AddReview from '../add-review/add-review';
import Player from '../player/player';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route exact path="/login">
          <SingIn/>
        </Route>
        <Route exact path="/mylist">
          <MyList/>
        </Route>
        <Route exact
          path="/films/:id"
          render={(routerProps) => (
            <Film routerProps={routerProps}/>
          )}
        />
        <Route exact
          path="/films/:id/review"
          render={(routerProps) => (
            <AddReview routerProps={routerProps}/>
          )}
        />
        <Route exact path="/player/:id">
          <Player/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
