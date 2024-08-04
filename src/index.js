import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router} from 'react-router-dom';
import './style/vendor/bootstrap.min.css';
import './style/vendor/metismenu.css';
import './style/style.css';
import { SpeedInsights } from '@vercel/speed-insights/next';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <Router>   <App />
 </Router>
 <SpeedInsights />
  </React.StrictMode>
);


