//@flow
import * as React from 'react';
import Navbar from '../header/Navbar';
import Footer from '../footer/Footer';

const Layout = ({ children }: React.Node): React.Node => (
  <div className="layout">
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default Layout;
