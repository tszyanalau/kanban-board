import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from '.';
import P from '../P';

describe('<Card />', () => {
  it('renders with content', () => {
    const wrapper = shallow(<Card content="Card content" />);
    expect(wrapper.containsMatchingElement(<P>Card content</P>)).toBe(true);
  });

  it('renders with error when content is undefined', () => {
    const consoleError = jest.spyOn(console, 'error');
    mount(<Card />);
    expect(consoleError).toHaveBeenCalled();
  });
});
