import React from 'react';
import { render } from 'react-dom';

import { Router, Route, hashHistory } from 'react-router';

import Main from './components/Main';
import PoweredBy from './components/Powered-by';
import About from './components/About';
import { NewsSearch } from './components/NewsSearch';

render((
  <Router history={ hashHistory } >
    <Route path="/" component={Main}>
      <Route path="/about" component={About} />
      <Route path="/poweredby" component={PoweredBy} />
      <Route path="/search" component={NewsSearch} />
      </Route>
    </Router>
  ), document.getElementById('content')
);
