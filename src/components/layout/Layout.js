//@flow
import * as React from 'react';
import MediaQuery from 'react-responsive';
import Navbar from '../header/Navbar';
import ResponisveNavbar from '../header/ResponisveNavbar';
import Footer from '../footer/Footer';

type PropsType = { children: React.Node, location: string };

const Layout = (props: PropsType): React.Node => (
  <div className="layout">
    <MediaQuery minWidth={992}>
      <Navbar location={props.location} />
    </MediaQuery>
    <MediaQuery maxWidth={992}>
      <ResponisveNavbar location={props.location} />
    </MediaQuery>
    {props.children}
    <Footer />
  </div>
);

export default Layout;
