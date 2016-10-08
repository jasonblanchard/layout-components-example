import React, { Component, Children } from 'react';

import AdminLayout from 'src/layouts/AdminLayout';
import './SideNavAdminLayout.css';

class SideNavAdminLayout extends Component {
  render() {
    return (
      <AdminLayout className="SideNavAdminLayout">
        <div className="SideNavAdminLayout-subHeader">
          {this.props.children[0]}
        </div>
        <div className="SideNavAdminLayout-body">
          <div className="SideNavAdminLayout-sideNav">
            {this.props.children[1]}
          </div>
          <div className="SideNavAdminLayout-mainContent">
            {this.props.children[2]}
          </div>
        </div>
      </AdminLayout>
    )
  }
}

export default SideNavAdminLayout;
