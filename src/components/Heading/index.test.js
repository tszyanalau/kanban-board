import React from 'react';
import { shallow, mount } from 'enzyme';
import Heading from '.';

describe('<Heading />', () => {
  it('renders with default props', () => {
    const wrapper = shallow(<Heading>Default heading</Heading>);
    expect(wrapper.props().variant).toEqual('h1');
    expect(wrapper.props().gutterBottom).toBe(true);
    expect(wrapper.text()).toEqual('Default heading');
  });

  it('renders with invalid level', () => {
    const consoleError = jest.spyOn(console, 'error');
    mount(<Heading level={7}>Invalid heading</Heading>);
    expect(consoleError).toHaveBeenCalled();
  });
});
