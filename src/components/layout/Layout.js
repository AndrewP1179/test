//@flow
import * as React from 'react';
import Navbar from '../header/Navbar';
import ResponisveNavbar from '../header/ResponisveNavbar';
import Footer from '../footer/Footer';

type PropsType = { children: React.Node, location: string };

const Layout = (props: PropsType): React.Node => (
  <div className="layout">
    <div className="full-nav">
      <Navbar location={props.location} />
    </div>
    <div className="responsive-nav">
      <ResponisveNavbar location={props.location} />
    </div>

    <div className="children">{props.children}</div>
    <Footer />
  </div>
);

export default Layout;
