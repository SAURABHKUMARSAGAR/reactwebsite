import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
// import './statewise.css';

// import Apps from './Apps';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
   <>
   
  <BrowserRouter>
    <App/>
  </BrowserRouter>

   </>
,
 document.getElementById('root'));