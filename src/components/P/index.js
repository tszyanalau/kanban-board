import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const P = ({ marginBottom, variant, ...props }) => (
  <Typography
    {...props}
    gutterBottom={!!marginBottom}
    variant="body1"
  />
);

P.propTypes = {
  marginBottom: PropTypes.bool,
};

P.defaultProps = {
  marginBottom: false,
};

export default P;
