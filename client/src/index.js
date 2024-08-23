import React from 'react';
import ReactDom from 'react-dom/client';
import {BrowserRouter as Router} from "react-router-dom";

import App from './components/App';

const container = document.getElementById('root');
const root = ReactDom.createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
