import React from 'react';
import { shallow } from 'enzyme';
import Input from '.';

describe('<Input />', () => {
  it('renders with default props', () => {
    const wrapper = shallow(<Input label="Default" />);
    expect(wrapper.props().multiline).toBeUndefined();
    expect(wrapper.props().label).toEqual('Default');
  });

  it('renders the default textarea', () => {
    const wrapper = shallow(<Input textarea />);
    expect(wrapper.props().multiline).toBe(true);
    expect(wrapper.props().rowsMax).toEqual(4);
  });

  it('renders with props passed in', () => {
    const wrapper = shallow(<Input label="Default" value="default" />);
    expect(wrapper.props().label).toEqual('Default');
    expect(wrapper.props().value).toEqual('default');
  });
});
