import { createStore } from 'redux';
import rootReducer from './reducers'; // Assuming you will create a reducers folder

const store = createStore(rootReducer);

export default store;