import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
//Provider is a redux component that once is passed "store" will give the component
// the ability to dispatch redux state through the wrapped app inside of Provider and our application>
import { Provider } from 'react-redux';
//Store is literally our redux store.
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
 </BrowserRouter>
 </Provider>,
 
  document.getElementById('root')
);
