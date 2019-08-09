import React from 'react';
import { shallow } from 'enzyme';
import SharedButton from './button';

import { findByDataTest, checkProps } from '../../../utils';

describe('Shared Button Component', () => {

    describe('Checking PropTypes', () => {

        it('SHould not throw a warning', () => {
            const expectedProps = {
                buttonText: 'EXample button Text',
                emitEvent: () => {}
            };
            const propsErr = checkProps(SharedButton, expectedProps);
            expect(propsErr).toBeUndefined();
        })
    });

    describe('Renders', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                buttonText: 'EXample button Text',
                emitEvent: () => {}
            };
            wrapper = shallow(<SharedButton {...props} />)
        });

        it('should render a button', () => {
            const button = findByDataTest(wrapper, 'buttonComponent');
            expect(button.length).toBe(1);
        })
    });
})