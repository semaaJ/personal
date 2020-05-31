import React from 'react';
import Navigation from '../Navigation';
import { shallow } from 'enzyme';
import '../../../__mocks__/intersectionObserverMock';
import "../../../setupTests"

test('should render Navigation correctly', () => {
    const component = shallow(<Navigation />);
    expect(component.html()).toMatchSnapshot();
});
