import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const Input = ({ textarea, rowsMax, ...props }) => (
  textarea ?
    <TextField {...props} multiline rowsMax={rowsMax} /> :
    <TextField {...props} />
);

export default Input;

Input.propTypes = {
  textarea: PropTypes.bool,
  rowsMax: PropTypes.number,
};

Input.defaultProps = {
  textarea: false,
  rowsMax: 4,
};
