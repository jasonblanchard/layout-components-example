import { Link } from 'react-router';
import React, { Component } from 'react';

import './AdminLayout.css';

class AdminLayout extends Component {
  render() {
    return (
      <div className="AdminLayout">
        <header className="AdminLayout-header">
          <Link to='/admin/accounts' activeClassName="active">Accounts</Link>
          <Link to='/admin/users' activeClassName="active">Users</Link>
          <Link to='/profile' activeClassName="active">View Profile</Link>
        </header>
        <div className="AdminLayout-mainContent" role="main">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default AdminLayout;
