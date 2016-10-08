import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import ProfilePage from 'src/pages/ProfilePage';
import AccountsPage from 'src/pages/AccountsPage';
import UsersPage from 'src/pages/UsersPage';

export default (
  <Route path="/">
    <IndexRedirect to="admin/accounts" />
    <Route path="/admin/accounts" component={AccountsPage} />
    <Route path="/admin/users" component={UsersPage} />
    <Route path="profile" component={ProfilePage} />
  </Route>
);
