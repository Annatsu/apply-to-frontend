// Node Modules
import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Row, Col } from 'antd';

const LoginContainer = ({ children, className, ...props }) => (
  <Row>
    <Col xs={24} sm={10} style={{ backgroundColor: 'yellow' }}>
      {children}
    </Col>
    <Col xs={0} sm={14} style={{ backgroundColor: 'blue' }}>
      Background e tal
    </Col>
  </Row>
);

LoginContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default LoginContainer;
