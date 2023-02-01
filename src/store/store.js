import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import Reducers from '../reducers/Reducer';



const middleware = [thunk];

const store = createStore(
  Reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;