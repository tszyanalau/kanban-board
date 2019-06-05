import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const Heading = ({ level, marginBottom, ...props }) => (
  <Typography {...props} variant={`h${level}`} gutterBottom={marginBottom} />
);

Heading.propTypes = {
  level: PropTypes.oneOf([...new Array(6)].map((_, i) => i + 1)),
  marginBottom: PropTypes.bool,
};

Heading.defaultProps = {
  level: 1,
  marginBottom: true,
};

export default Heading;
