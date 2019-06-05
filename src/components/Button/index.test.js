import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from '.';

describe('<Button />', () => {
  it('renders with default props', () => {
    const wrapper = shallow(<Button>Button</Button>);
    expect(wrapper.props().color).toEqual('primary');
    expect(wrapper.props().variant).toEqual('contained');
  });

  it('renders with props passed in', () => {
    const wrapper = shallow(<Button color="secondary" variant="outlined" size="small" fullWidth>Button</Button>);
    expect(wrapper.props().color).toEqual('secondary');
    expect(wrapper.props().variant).toEqual('outlined');
    expect(wrapper.props().size).toEqual('small');
    expect(wrapper.props().fullWidth).toBe(true);
  });

  it('renders with error when children is undefined', () => {
    const consoleError = jest.spyOn(console, 'error');
    mount(<Button />);
    expect(consoleError).toHaveBeenCalled();
  });
});

