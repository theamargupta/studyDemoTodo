import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import ConfigStore from './redux/store/configStore';
import { addProduct, addUser } from './redux/actionGenerator/Genrators';
const store = ConfigStore();
//store.subscribe(() => console.log(store.getState()));
store.dispatch(addUser({ email: 'admin', password: 'admin' }));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
