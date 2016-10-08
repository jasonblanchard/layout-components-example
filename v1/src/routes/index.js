import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import ProfilePage from 'src/pages/ProfilePage';
import AdminRouteHandler from 'src/routes/AdminRouteHandler';
import AccountsPage from 'src/pages/AccountsPage';
import UsersPage from 'src/pages/UsersPage';

export default (
  <Route path="/">
    <IndexRedirect to="admin/accounts" />
    <Route path="admin" component={AdminRouteHandler}>
      <Route path="accounts" component={AccountsPage} />
      <Route path="users" component={UsersPage} />
    </Route>
    <Route path="profile" component={ProfilePage} />
  </Route>
);
