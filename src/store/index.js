import { createStore } from 'redux';

import reducer from '../reducers/index';

const initialState = {
    tech: 'React',
    technologies: ['React', 'Elm', 'React-redux']
};
const store = createStore(reducer, initialState);

export default store;