// @flow
import * as React from 'react';
import { Link } from 'gatsby';
import * as Scroll from 'react-scroll';

let LinkTo = Scroll.Link;

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
        <LinkTo activeClass="home-active active" to="home" spy smooth duration={500}>
          <li>Home</li>
        </LinkTo>
        <LinkTo activeClass="home-active active" to="about" spy smooth duration={500}>
          <li>About</li>
        </LinkTo>
        <LinkTo activeClass="home-active active" to="speakers" spy smooth duration={500}>
          <li>Speakers</li>
        </LinkTo>
        <LinkTo activeClass="home-active active" to="events" spy smooth duration={500}>
          <li>Agenda</li>
        </LinkTo>
        <LinkTo activeClass="home-active active" to="sponsors" spy smooth duration={500}>
          <li>Venue</li>
        </LinkTo>
        <LinkTo activeClass="home-active active" to="venue" spy smooth duration={500}>
          <li>Partners</li>
        </LinkTo>
        <LinkTo activeClass="home-active active" to="blog" spy smooth duration={500}>
          <li>News</li>
        </LinkTo>
      </ul>
    )}
  </div>
);

export default Navbar;
