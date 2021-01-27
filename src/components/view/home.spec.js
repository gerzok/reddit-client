import React from 'react';
import HomeComp from './home.component';
import { mount, shallow } from 'enzyme';

const mockProps = {
  topList: {
    data: {
      children: null
    }
  },
  token: {
    access_token: null
  },
  getTopList: jest.fn()
};

describe('Home', () => {
  test('should render', () => {
    const wrapper = shallow(
      <HomeComp {...mockProps} />
    )

    expect(wrapper.exists()).toBeTruthy()
  })
});