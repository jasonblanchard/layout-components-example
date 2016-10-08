import { Link } from 'react-router';
import classNames from 'classnames';
import React, { Component, PropTypes } from 'react';

import './AdminLayout.css';

class AdminLayout extends Component {
  static propTypes: {
    className: PropTypes.string
  }

  render() {
    const className = classNames('AdminLayout', this.props.className);
    return (
      <div className={className}>
        <header className="AdminLayout-header">
          <Link to='/admin/accounts' activeClassName="active">Accounts</Link>
          <Link to='/admin/users' activeClassName="active">Users</Link>
          <Link to='/profile' activeClassName="active">View Profile</Link>
        </header>
        <div className="AdminLayout-mainContent">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default AdminLayout;
