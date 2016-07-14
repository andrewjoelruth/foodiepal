import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../components/app'; // Root layout

import Welcome from '../components/welcome';
import Public from '../components/public';
import SignUp from '../containers/signup';
import Login from '../containers/login';

import Main from '../components/main'; // Main (user) layout
import Categories from '../components/categories';
import Subcategories from '../components/subcategories';
import Detail from '../containers/detail';
// import AddEntry from '../containers/add-entry';

function requireAuth(nextState, replace, callback) {
  if (3 < 4) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    });
  } else {
    replace({
      pathname: '/u/cheese',
      state: { nextPathname: nextState.location.pathname }
    });
  }
  callback();
}
export default (
  <Route component={ App }>
    <Route path="/">
      <IndexRoute component={ Welcome } onEnter={ requireAuth }/>
      <Route component={ Public }>
        <Route path="login" component={ Login } />
        <Route path="signup" component={ SignUp } />
      </Route>
    </Route>
    <Route path="/u" component={ Main }>
      <IndexRoute component={ Categories } />
      <Route path=":name" component={ Subcategories }>
        <Route path=":name" component={ Detail } />
      </Route>
    </Route>
  </Route>
);