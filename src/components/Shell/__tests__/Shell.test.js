import React from 'react';
import Shell from '../Shell';
import { mount } from 'enzyme';
import '../../../__mocks__/intersectionObserverMock';
import "../../../setupTests"

test('should render Shell correctly', () => {
    const component = mount(<Shell />);
    expect(component.html()).toMatchSnapshot();
});

