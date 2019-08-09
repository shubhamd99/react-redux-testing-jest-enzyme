import moxios from 'moxios';
import { testStore } from './../../utils';
import { fetchPosts } from './../store/actions';

describe('fecthPosts action', () => {
    
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test('Store is updated correctly', () => {
        
        const expectedState = [
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
        ];

        const store = testStore();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            })
        });

        return store.dispatch(fetchPosts())
        .then(() => {
            const newState = store.getState();
            expect(newState.posts).toBe(expectedState);
        })
    })
})
