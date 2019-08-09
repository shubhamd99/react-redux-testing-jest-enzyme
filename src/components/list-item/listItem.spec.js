import React from 'react';
import { shallow } from 'enzyme';
import ListItem from './listItem';

import { findByDataTest, checkProps } from '../../../utils';

describe('List Item Component', () => {

    describe('Checking PropTypes', () => {

        it('SHould not throw a warning', () => {
            const expectedProps = {
                title: 'TestTitle',
                desc: "Test Desc"
            };
            const propsErr = checkProps(ListItem, expectedProps);
            expect(propsErr).toBeUndefined();
        });

    });

    describe('Renders', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                title: 'TestTitle',
                desc: "Test Desc"
            };
            wrapper = shallow(<ListItem {...props} />)
        });

        it('should render without error', () => {
            const component = findByDataTest(wrapper, 'listComponent');
            expect(component.length).toBe(1);
        })

        it('should render a title', () => {
            const title = findByDataTest(wrapper, 'titleComponent');
            expect(title.length).toBe(1);
        })

        it('should render a description', () => {
            const desc = findByDataTest(wrapper, 'descComponent');
            expect(desc.length).toBe(1);
        })
    });

    describe('SHould not Renders', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                desc: "Test Desc"
            };
            wrapper = shallow(<ListItem {...props} />)
        });

        it('component is not renders', () => {
            const component = findByDataTest(wrapper, 'listComponent');
            expect(component.length).toBe(0);
        })
    });

});