import React from 'react';

import RouterGather from '../router';
import './layout.scss'

function Layout() {

  return (
    <div className="layout">
      <div className="layout__left">
        left
      </div>
      <div className="layout__right">
        <RouterGather />
      </div>
    </div>
  )
}

export default Layout