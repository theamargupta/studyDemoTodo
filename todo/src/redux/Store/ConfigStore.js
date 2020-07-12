import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import todoReducer from '../Reducers/Reducers';

const configStore = () => {
  const store = createStore(
    todoReducer,
    composeWithDevTools(applyMiddleware())
  );
  return store;
};
export default configStore;
