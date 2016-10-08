import { Link } from 'react-router';
import React, { Component } from 'react';

import './AdminRouteHandler.css';

class AdminRouteHandler extends Component {
  render() {
    return (
      <div className="AdminRouteHandler">
        <header className="AdminRouteHandler-header">
          <Link to='/admin/accounts' activeClassName="active">Accounts</Link>
          <Link to='/admin/users' activeClassName="active">Users</Link>
          <Link to='/profile' activeClassName="active">View Profile</Link>
        </header>
        <div className="AdminRouteHandler-mainContent" role="main">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default AdminRouteHandler;
