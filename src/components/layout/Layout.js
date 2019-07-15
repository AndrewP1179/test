//@flow
import * as React from 'react';
import Navbar from '../header/Navbar';
import Footer from '../footer/Footer';
type PropsType = { children: React.Node, location: string };
const Layout = (props: PropsType): React.Node => (
  <div className="layout">
    <Navbar location={props.location} />
    {props.children}
    <Footer />
  </div>
);

export default Layout;
