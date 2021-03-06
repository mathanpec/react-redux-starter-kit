import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import RootReducer from 'reducers/RootReducer';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default createStoreWithMiddleware(RootReducer);
