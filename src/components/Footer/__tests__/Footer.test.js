import React from 'react';
import Footer from '../Footer';
import { shallow } from 'enzyme';
import '../../../__mocks__/intersectionObserverMock';
import "../../../setupTests"

test('should render Footer correctly', () => {
    const component = shallow(<Footer />);
    expect(component.html()).toMatchSnapshot();
});
