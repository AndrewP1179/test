// @flow
import * as React from 'react';
import { Link } from 'gatsby';

type PropsType = { location: string };

const Navbar = (props: PropsType): React.Node => (
  <div className="navbar">
    {props.location !== '/' ? (
      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <a href="">Buy Ticket</a>
        </li>
        <li>
          <Link to="/blogs">News</Link>
        </li>
      </ul>
    ) : (
      <ul className="nav-list">
        <li>Home</li>
        <li>About</li>
        <li>Speakers</li>
        <li>Agenda</li>
        <li>Venue</li>
        <li>Partners</li>
        <li>News</li>
      </ul>
    )}
  </div>
);

export default Navbar;
