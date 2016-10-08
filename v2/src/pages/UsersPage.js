import React, { Component } from 'react';

import AdminLayout from 'src/layouts/AdminLayout';

class UsersPage extends Component {
  render() {
    return (
      <AdminLayout>
        <div role="main">
          Manage Users
        </div>
      </AdminLayout>
    );
  }
}

export default UsersPage;
