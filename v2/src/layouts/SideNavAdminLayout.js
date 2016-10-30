import classNames from 'classnames';
import React, { Component, Children } from 'react';

import AdminLayout from 'src/layouts/AdminLayout';
import './SideNavAdminLayout.css';

class SideNavAdminLayout extends Component {
  static propTypes: {
    className: PropTypes.string
  }

  render() {
    const className = classNames('SideNavAdminLayout', this.props.className);
    const children = Children.toArray(this.props.children);
    return (
      <AdminLayout className={className}>
        <div className="SideNavAdminLayout-subHeader">
          {children[0]}
        </div>
        <div className="SideNavAdminLayout-body">
          <div className="SideNavAdminLayout-sideNav">
            {children[1]}
          </div>
          <div className="SideNavAdminLayout-mainContent">
            {children[2]}
          </div>
        </div>
      </AdminLayout>
    )
  }
}

export default SideNavAdminLayout;
