import React from 'react';
import { shallow, mount } from 'enzyme';
import Icon from '.';

describe('<Icon />', () => {
  it('renders with error if name is undefined', () => {
    const consoleError = jest.spyOn(console, 'error');
    mount(<Icon />);
    expect(consoleError).toHaveBeenCalled();
  });

  it('renders with default props', () => {
    const wrapper = shallow(<Icon name="add" />);
    expect(wrapper.props().color).toEqual('inherit');
    expect(wrapper.props().fontSize).toEqual('default');
    expect(wrapper.props().children).toEqual('add');
  });

  it('renders with props passed in', () => {
    const wrapper = shallow(<Icon color="primary" size="large" name="add" />);
    expect(wrapper.props().color).toEqual('primary');
    expect(wrapper.props().fontSize).toEqual('large');
  });
});
