import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { findByDataTest, testStore } from './../utils/index';
import { italic } from 'ansi-colors';

const setUp = (initialState = {}) => {
    const store = testStore(initialState);
    // Test a connected component
    const wrapper = shallow(<App store={store}/>).childAt(0).dive(); // dive into that component
    console.log(wrapper.debug());
    return wrapper;
};

describe('App Component', () => {

    let wrapper;
    beforeEach(() => {
        // mock the store
        const initialState = {
            posts: [
                {
                    title: 'title 1',
                    body: 'text'
                },
                {
                    title: 'title 2',
                    body: 'text'
                },
                {
                    title: 'title 3',
                    body: 'text'
                },
            ]
        }

        wrapper = setUp(initialState);
    });

    it('should render without error', () => {
        const component = findByDataTest(wrapper, 'appComponent' );
        expect(component.length).toBe(1);
    });

    it('updateState() should update state as expected', () => {
        const classInstance = wrapper.instance();
        classInstance.updateState();
        const newState = classInstance.state.hideBtn;
        expect(newState).toBe(true);
    });

    it('exampleMethod_returnsValue(number) should return a value as expected', () => {
        const classInstance = wrapper.instance();
        const newValue = classInstance.exampleMethod_returnsValue(6);
        expect(newValue).toBe(7);
    });

});