import React from 'react';
import { shallow } from 'enzyme';
import Headline from './headline';

import { findByDataTest, checkProps } from '../../../utils/index';

const setUp = (props={}) => {
    const component = shallow(<Headline {...props}/>);
    return component;
};

describe('Headline Component', () => {

    describe('Checking prop types', () => {

        it('should not throw a warning', () => {
            const expectedProps = {
                header: 'Test Header',
                desc: 'Test DEsc',
                tempArr:[{
                    fName: "test fname",
                    age: 22,
                    onlineStatus: false
                }]
            };

            const propsErr = checkProps(Headline, expectedProps);
            expect(propsErr).toBeUndefined();
        });
    })

    describe('Have props', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                header: 'Test Header',
                desc: 'Test Desc'
            };
            wrapper = setUp(props);
        })

        it('Should render without error', () => {
            const component = findByDataTest(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(1);
        })

        it('Should render a H1', () => {
            const h1 = findByDataTest(wrapper, 'header');
            expect(h1.length).toBe(1);
        })

        it('Should render a paragraph', () => {
            const p = findByDataTest(wrapper, 'desc');
            expect(p.length).toBe(1);
        })
    });

    describe('Have No props', () => {

        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        })

        it('Should not render', () => {
            const component = findByDataTest(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(0);
        })
    });
});