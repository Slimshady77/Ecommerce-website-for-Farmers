import React from 'react';
import ReactDOM from 'react-dom';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import {Provider} from "react-redux"
import store from './Store';
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />


ReactDOM.render(
  <Provider store={store}>
  {<App/>}
  </Provider>
  ,
  document.getElementById('root')
)
