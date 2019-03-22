// Node Modules
import React from 'react';
import PropTypes from 'prop-types';

// Components
import LoginContainer from '../components/LoginContainer';

const Login = ({ match }) => <LoginContainer>Login aqui.</LoginContainer>;

Login.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Login;
