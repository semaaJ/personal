import React from 'react';
import IconBar from '../IconBar';
import { shallow } from 'enzyme';
import '../../../__mocks__/intersectionObserverMock';
import "../../../setupTests"

test('should render IconBar correctly', () => {
    const component = shallow(<IconBar />);
    expect(component.html()).toMatchSnapshot();
});
