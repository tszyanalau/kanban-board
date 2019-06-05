import React from 'react';
import { shallow } from 'enzyme';
import Paper from '.';
import Heading from '../Heading';

describe('<Paper />', () => {
  it('renders with children', () => {
    const wrapper = shallow(<Paper><Heading>Paper Heading</Heading></Paper>);
    expect(wrapper.containsMatchingElement(<Heading>Paper Heading</Heading>)).toBe(true);
  });

  it('renders with props passed in', () => {
    const wrapper = shallow(<Paper style={{ width: 200, height: 400 }} />);
    expect(wrapper.props().style.width).toEqual(200);
    expect(wrapper.props().style.height).toEqual(400);
  });
});
