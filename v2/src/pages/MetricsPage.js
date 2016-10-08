import React, { Component } from 'react';

import SideNavAdminLayout from 'src/layouts/SideNavAdminLayout';

class MetricsPage extends Component {
  render() {
    return (
      <SideNavAdminLayout>
        <div>Metrics</div>
        <nav>
          <ul>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
          </ul>
        </nav>
        <div role="main">
          main content
        </div>
      </SideNavAdminLayout>
    );
  }
}

export default MetricsPage;
