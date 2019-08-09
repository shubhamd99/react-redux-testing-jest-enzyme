import checkPropTypes from 'check-prop-types';
import { applyMiddleware, createStore }from 'redux';
import rootReducer from '../src/store/reducers/index';
import { middlewares } from './../src/store/createStore';

export const findByDataTest = (component, attribute) => {
    const wrapper = component.find(`[data-test='${attribute}']`)
    return wrapper;
}

export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
    return propsErr;
}

export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
    return createStoreWithMiddleware(rootReducer, initialState);
}