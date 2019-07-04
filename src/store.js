import { configureStore } from 'redux-starter-kit';
import rootReducer from './reducers';

// const reducer = {
//   toggle: rootReducer
// };

const store = configureStore({ reducer: rootReducer });
export default store;
