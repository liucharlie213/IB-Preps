// import React from 'react';
import Header from '../Header/Header.js';
import Sidebar from '../Sidebar/Sidebar.js';
// import './Layout.css';

// const Layout = ({ children }) => {
//   return (
//     <div className="app__layout">
//       <Header />
//       <Sidebar />
//       <main className="app__content">
//         {children}
//       </main>
//     </div>
//   );
// }

// export default Layout;
// Layout.js
import React from 'react';

import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="app-layout">
      <Header />
      <div className="app-content-wrapper">
        <Sidebar />
        <main className="app-content">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;
