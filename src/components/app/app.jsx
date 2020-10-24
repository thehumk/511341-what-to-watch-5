import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Main from '../main/main';
import SingIn from '../sing-in/sing-in';
import MyList from '../my-list/my-list';
import Film from '../film/film';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import {propsForFilms} from '../../utils/prop-types';

const App = (props) => {
  const films = props.films;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main films={props.films}/>
        </Route>
        <Route exact path="/login">
          <SingIn />
        </Route>
        <Route exact path="/mylist">
          <MyList films={films}/>
        </Route>
        <Route exact
          path="/films/:id"
          render={(routerProps) => (
            <Film films={films} routerProps={routerProps}/>
          )}
        />
        <Route exact
          path="/films/:id/review"
          render={(routerProps) => (
            <AddReview films={films} routerProps={routerProps}/>
          )}
        />
        <Route exact path="/player/:id">
          <Player />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  films: PropTypes.arrayOf(propsForFilms).isRequired,
};

export default App;
