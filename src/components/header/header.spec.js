import React from 'react';
import { shallow } from 'enzyme';
import Header from './header';
import { findByDataTest } from '../../../utils/index';

const setUp = (props={}) => {
    const component = shallow(<Header {...props}/>);
    return component;
};

describe('Header Component', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('should render without errors', () => {
        // console.log( component.debug() );
        const wrapper = findByDataTest(component, 'headerComponent');
        expect(wrapper.length).toBe(1); // should have 1 div
    });

    it('should render a logo', () => {
        const logo = findByDataTest(component, 'heading');
        expect(logo.length).toBe(1); // should have 1 div
    })
})