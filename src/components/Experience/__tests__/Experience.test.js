import React from 'react';
import Experience from '../Experience';
import { mount } from 'enzyme';
import '../../../__mocks__/intersectionObserverMock';
import "../../../setupTests"

test('should render Experience correctly', () => {
    const component = mount(<Experience />);
    expect(component.html()).toMatchSnapshot();
});

test('should change tab on tab click', () => {
    const component = mount(<Experience />);
    const tabButton = component.find('#DCU').first();
    tabButton.simulate('click');
    const tabTitle = component.find('.employerLink');
    expect(tabTitle.html()).toContain("ComputeTY");
});