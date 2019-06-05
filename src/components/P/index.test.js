import React from 'react';
import { shallow } from 'enzyme';
import P from '.';

describe('<P />', () => {
  it('renders with default props', () => {
    const wrapper = shallow(<P>default paragraph</P>);
    expect(wrapper.props().gutterBottom).toBe(false);
    expect(wrapper.props().variant).toEqual('body1');
  });

  it('renders with marginBottom', () => {
    const wrapper = shallow(<P marginBottom />);
    expect(wrapper.props().gutterBottom).toBe(true);
  });

  it('renders with props passed in', () => {
    const wrapper = shallow(<P color="error" />);
    expect(wrapper.props().color).toBe('error');
  });
});
