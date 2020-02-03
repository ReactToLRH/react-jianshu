import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './style';
import  { IconfontGlobalStyle } from './statics/iconfont/iconfont';

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <IconfontGlobalStyle />
    <App />
  </Fragment>, 
  document.getElementById('root')
);
