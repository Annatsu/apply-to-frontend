// Node Modules
import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Button, Icon } from 'antd';

const FacebookButton = ({ type = 'block' }) => (
  <Button>
    <Icon type='facebook' />
    {type === 'block' && ' Facebook'}
  </Button>
);

FacebookButton.propTypes = {
  type: PropTypes.oneOf(['block', 'small']),
};

export default FacebookButton;
