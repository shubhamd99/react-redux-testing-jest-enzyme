import { types } from './types';
import axios from 'axios';

export const fetchPosts = () => async (disatch) => {
    await axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        disatch({
            type: types.GET_POST,
            payload: response.data
        })
    })
    .catch(err => {
        console.log("error fetching posts", err);
    })
};