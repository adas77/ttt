import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Store, applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import reducer from './store/reducer';

const store: Store<BoardState, BoardAction> & {
  dispatch: DispatchType
} = createStore(reducer,
  applyMiddleware(thunk))

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
