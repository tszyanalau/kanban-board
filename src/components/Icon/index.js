import React from 'react';
import PropTypes from 'prop-types';
import MuiIcon from '@material-ui/core/Icon';

const Icon = ({ name, size, ...props }) => (<MuiIcon {...props} fontSize={size}>{name}</MuiIcon>);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
};

Icon.defaultProps = {
  color: 'inherit',
  size: 'default',
};

export default Icon;
