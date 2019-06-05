import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../src/theme';

const req = require.context('../src/components', true, /.stories.js$/);

const loadStories = () => req.keys().forEach(req);

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);

configure(loadStories, module);
