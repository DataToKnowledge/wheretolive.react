import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

import About from '../../src/components/About'

describe('<About />', () => {

  it('renders a <div>', () => {
    const wrapper = shallow(<About />);
    expect(wrapper.find('div')).to.have.length(1);
  });

});
