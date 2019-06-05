import React from 'react';
import { shallow } from 'enzyme';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import Modal from '.';
import P from '../P';
import Button from '../Button';

const modalTitle = 'Modal title';
const modalContent = <P>Modal Content</P>;
const modalActions = <Button>Action</Button>;

describe('<Modal />', () => {
  it('renders with title only', () => {
    const wrapper = shallow(<Modal title={modalTitle} />);
    expect(wrapper.containsMatchingElement(<DialogTitle>Modal title</DialogTitle>)).toBe(true);
    expect(wrapper.children().children()).toHaveLength(1);
  });

  it('renders with content only', () => {
    const wrapper = shallow(<Modal content={modalContent} />);
    expect(wrapper.containsMatchingElement(<DialogContent><P>Modal Content</P></DialogContent>)).toBe(true);
    expect(wrapper.children().children()).toHaveLength(1);
  });

  it('renders with actions only', () => {
    const wrapper = shallow(<Modal actions={modalActions} />);
    expect(wrapper.containsMatchingElement(<DialogActions><Button>Action</Button></DialogActions>)).toBe(true);
    expect(wrapper.children().children()).toHaveLength(1);
  });

  it('renders with title, content, actions', () => {
    const wrapper = shallow(<Modal title={modalTitle} content={modalContent} actions={modalActions} />);
    expect(wrapper.containsMatchingElement(
      <Dialog>
        <div>
          <DialogTitle>Modal title</DialogTitle>
          <DialogContent><P>Modal Content</P></DialogContent>
          <DialogActions><Button>Action</Button></DialogActions>
        </div>
      </Dialog>
    )).toBe(true);
    expect(wrapper.children().children()).toHaveLength(3);
  });
});
