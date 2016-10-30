import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import AccountsPage from 'src/pages/AccountsPage';
import MetricsOrganizationsPage from 'src/pages/MetricsOrganizationsPage';
import MetricsUsagePage from 'src/pages/MetricsUsagePage';
import MetricsUsersPage from 'src/pages/MetricsUsersPage';
import ProfilePage from 'src/pages/ProfilePage';
import UsersPage from 'src/pages/UsersPage';

export default (
  <Route path="/">
    <IndexRedirect to="admin/accounts" />
    <Route path="/admin/accounts" component={AccountsPage} />
    <Route path="/admin/users" component={UsersPage} />
    <Route path="profile" component={ProfilePage} />

    <Route path="/admin/metrics-users" component={MetricsUsersPage} />
    <Route path="/admin/metrics-organizations" component={MetricsOrganizationsPage} />
    <Route path="/admin/metrics-usage" component={MetricsUsagePage} />
  </Route>
);
