import React from 'react';
import homepage from '../comet_homepage.png';
import gif from '../dynamic.gif';
import Project from '../Project';
import { shallow } from 'enzyme';
import '../../../__mocks__/intersectionObserverMock';
import "../../../setupTests";

test('should render Project correctly', () => {
    const component = shallow(
        <Project
            index={2}
            projectTitle="Test"
            projectDescription={["Test"]}
            projectTechnologies={["Test", "Test"]}
            githubLink="Test"
            githubStars={0}
        />
    );
    expect(component.html()).toMatchSnapshot();
});

test('should render Project correctly with images', () => {
    const component = shallow(
        <Project
            image={homepage}
            gif={gif}
            index={2}
            projectTitle="Test"
            projectDescription={["Test"]}
            projectTechnologies={["Test", "Test"]}
            githubLink="Test"
            githubStars={0}
        />
    );
    expect(component.html()).toMatchSnapshot();
});

test('should display gif when image is being hovered over', () => {
    const component = shallow(
        <Project
            image={homepage}
            gif={gif}
            index={2}
            projectTitle="Test"
            projectDescription={["Test"]}
            projectTechnologies={["Test", "Test"]}
            githubLink="Test"
            githubStars={0}
        />
    );
    const image = component.find('.photo');
    image.simulate('mouserover');
    expect(image.html()).toMatchSnapshot();
});

