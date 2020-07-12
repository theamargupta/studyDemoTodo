import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import oAuthReducer from '../reducers/oAuthReducer';
import productReducer from '../reducers/productReducer';
//=> store creation
const configStore = () => {
  const store = createStore(
    combineReducers({
      productReducer: productReducer,
      oAuthReducer: oAuthReducer,
    }),
    composeWithDevTools(applyMiddleware())
  );
  return store;
};
export default configStore;
