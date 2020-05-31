import React from 'react';
import Contact from '../Contact';
import { mount } from 'enzyme';
import '../../../__mocks__/intersectionObserverMock';
import "../../../setupTests"

test('should render Contact correctly', () => {
    const component = mount(<Contact />);
    expect(component.html()).toMatchSnapshot();
});

