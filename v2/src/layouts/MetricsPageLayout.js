import { Link } from 'react-router';
import classNames from 'classnames';
import React, { Component } from 'react';

import SideNavAdminLayout from 'src/layouts/SideNavAdminLayout';

class MetricsPageLayout extends Component {
  render() {
    const className = classNames('MetricsPageLayout', this.props.className);
    return (
      <SideNavAdminLayout className={className}>
        <div>Metrics</div>
        <nav>
          <ul>
            <li><Link activeClassName="active" to="/admin/metrics-users">Users</Link></li>
            <li><Link activeClassName="active" to="/admin/metrics-organizations">Organizations</Link></li>
            <li><Link activeClassName="active" to="/admin/metrics-usage">Usage</Link></li>
          </ul>
        </nav>
        <div role="main">
          {this.props.children}
        </div>
      </SideNavAdminLayout>
    );
  }
}

export default MetricsPageLayout;
