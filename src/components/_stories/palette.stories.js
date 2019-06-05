import React from 'react';
import { storiesOf } from '@storybook/react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import _ from 'lodash';
import Heading from '../Heading';
import P from '../P';
import theme from '../../theme';

const StyledGrid = withStyles(({ spacing }) => ({
  root: {
    marginBottom: spacing(2),
  },
}))(Grid);

const Text = withStyles(() => ({
  root: {
    background: 'inherit',
    backgroundClip: 'text',
    color: 'transparent',
    filter: 'invert(1) grayscale(1) contrast(9)',
  },
}))(Typography);

const Color = withStyles(({ spacing }) => ({
  root: {
    height: spacing(12),
    width: spacing(12),
    padding: spacing(1),
    wordWrap: 'anywhere',
  },
}))(Grid);

storiesOf('Palette', module).add('default', () => (
  <div>
    <Heading level={5}>Material UI Theme Palette</Heading>
    {_.map(theme.palette, (value, key) => {
      if (typeof value === 'object') {
        return (
          <div key={key}>
            <P>{key}</P>
            <StyledGrid container>
              {_.map(value, (color, k) => {
                if (typeof color === 'string') {
                  return (
                    <Color container justify="center" alignItems="center" key={k} style={{ background: color }}>
                      <Text variant="body2">{k}</Text>
                    </Color>
                  );
                }
              })}
            </StyledGrid>
          </div>
        );
      }
    })}
  </div>
));
