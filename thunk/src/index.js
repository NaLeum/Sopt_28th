import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 6. 리덕스 적용
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from 'redux';
import rootReducer from './modules';
// 11. redux-logger 설치
import logger from 'redux-logger';

// 12. redux-devtools-extension 적용
import {composeWithDevTools} from 'redux-devtools-extension';

// 13. redux-thunk 
import ReduxThunk from 'redux-thunk';

const store = createStore(rootReducer, composeWithDevTools( applyMiddleware(ReduxThunk,logger)));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
