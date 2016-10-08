import { Router, browserHistory } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import routes from 'src/routes';

ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
);
