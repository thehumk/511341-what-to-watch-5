import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import App from '../app/app';
import {init} from '../../store/api-actions';

class Root extends React.PureComponent {
  componentDidMount() {
    this.props.initAction();
  }

  render() {
    return this.props.isApplicationReady && <App/>;
  }
}

Root.propTypes = {
  initAction: PropTypes.func.isRequired,
  isApplicationReady: PropTypes.bool.isRequired,
};

const mapStateToProps = ({DATA}) => ({
  isApplicationReady: DATA.isApplicationReady,
});

const mapDispatchToProps = (dispatch) => ({
  initAction() {
    dispatch(init());
  },
});

export {Root};
export default connect(mapStateToProps, mapDispatchToProps)(Root);
