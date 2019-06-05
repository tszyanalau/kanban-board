import React from 'react';
import PropTypes from 'prop-types';
import MuiCard from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import P from '../P';

const StyledCard = withStyles(({ spacing }) => ({
  root: {
    padding: spacing(1),
    margin: spacing(1),
    wordWrap: 'anywhere',
  },
}))(MuiCard);

const Card = ({ content, ...props }) => (
  <StyledCard {...props}>
    <P>{content}</P>
  </StyledCard>
);

export default Card;

Card.propTypes = {
  content: PropTypes.string.isRequired,
};
