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
        let mockFunction;
        beforeEach(() => {
            mockFunction = jest.fn();
            const props = {
                buttonText: 'EXample button Text',
                emitEvent: mockFunction
            };
            wrapper = shallow(<SharedButton {...props} />)
        });

        it('should render a button', () => {
            const button = findByDataTest(wrapper, 'buttonComponent');
            expect(button.length).toBe(1);
        })

        it('should emit callback on click event', () => {
            const button = findByDataTest(wrapper, 'buttonComponent');
            button.simulate('click');
            const callback = mockFunction.mock.calls.length;
            expect(callback).toBe(1);
        });
    });
})