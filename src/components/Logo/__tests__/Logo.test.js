import React from 'react';
import Logo from '../Logo';
import { shallow } from 'enzyme';
import '../../../__mocks__/intersectionObserverMock';
import "../../../setupTests"

test('should render Logo correctly', () => {
    const component = shallow(<Logo />);
    expect(component.html()).toMatchSnapshot();
});
