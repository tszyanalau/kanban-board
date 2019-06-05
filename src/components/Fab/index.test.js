import React from 'react';
import { shallow, mount } from 'enzyme';
import Fab from '.';
import Icon from '../Icon';

describe('<Fab />', () => {
  it('renders with default props', () => {
    const wrapper = shallow(<Fab><Icon name="add" /></Fab>);
    expect(wrapper.props().color).toEqual('secondary');
    expect(wrapper.props().size).toEqual('medium');
  });

  it('renders with error when the children is undefined', () => {
    const consoleError = jest.spyOn(console, 'error');
    mount(<Fab />);
    expect(consoleError).toHaveBeenCalled();
  });

  it('renders the extended Fab', () => {
    const wrapper = shallow(
      <Fab extended>
        <Icon name="add" />
        Create Button
      </Fab>
    );
    expect(wrapper.props().extended).toBe(true);
    expect(wrapper.containsMatchingElement(<Icon name="add" />)).toBe(true);
    expect(wrapper.contains('Create Button')).toBe(true);
  });
});
