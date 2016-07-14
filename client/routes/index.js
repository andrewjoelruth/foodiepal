import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../components/app'; // Root layout

// TODO: create/import Welcome (non-authed) layout

import Main from '../components/main'; // Main (user) layout

import AddEntry from '../containers/add-entry';
import Categories from '../components/categories';
import Subcategories from '../components/subcategories';
import Detail from '../containers/detail';
import SignUp from '../containers/signup';
import Login from '../containers/login';
// import Welcome from '../components/welcome';

export default (
  <Route component={ App }>
    <Route path="/" component={ Main }>
      <IndexRoute component={ Categories } />
      <Route path="signup" component={ SignUp } />
      <Route path="login" component={ Login } />
      <Route path=":name">
        <IndexRoute component={ Subcategories } />
        <Route path=":name" component={ Detail } />
      </Route>
      <Route path="login" />
    </Route>
  </Route>
);

  /*<Route path="/" component={App}>
    <IndexRoute component={Main} />
    <Route path="subcategories">
      <IndexRoute component={ Subcategories } />
      <Route path=":name" component={ Detail } />
      <Route path="/:name/add" component={AddEntry} />
      
    </Route>
  </Route>*/