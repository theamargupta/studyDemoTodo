import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import data from '../data/data';

//=> state declare
const initalState = {
  product: [],
};
//=> reducer
const productReducer = (state = initalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'add_product':
      return { product: [...state.product, payload] };
    default:
      return state;
  }
};
const authInitalState = {
  user: [],
};
const oAuthReducer = (state = authInitalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'add_user':
      return { user: [...state.user, payload] };
    default:
      return state;
  }
};

//=> action Generator
const addProduct = (payload) => ({
  type: 'add_product',
  payload,
});
const addUser = (payload) => ({
  type: 'add_user',
  payload,
});

//=> store creation
const store = createStore(
  combineReducers({
    productReducer: productReducer,
    oAuthReducer: oAuthReducer,
  }),
  composeWithDevTools(applyMiddleware())
);
store.subscribe(() => {
  console.log(store.getState());
});
data.map((data) => store.dispatch(addProduct(data)));
store.dispatch(addUser({ email: 'admin', password: 'admin' }));
