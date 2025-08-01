import React from 'react';
import ReactDOM from 'react-dom/client';  //  Import createRoot from react-dom/client
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';

// ✅ Use createRoot instead of ReactDOM.render
import Store from './App/store';
import {Provider} from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={Store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
