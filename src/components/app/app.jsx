import React from 'react';
import Main from '../main/main';
import PropTypes from 'prop-types';

const App = (props) => {
  return (
    <Main film={props.film}/>
  );
};

App.propTypes = {
  film: PropTypes.object.isRequired
};

export default App;
