//@flow
import * as React from 'react';
import * as Scroll from 'react-scroll';
import { Link } from 'gatsby';
import { withStateHandlers } from 'recompose';

let LinkTo = Scroll.Link;

type PropsType = { location: string, setState: any => any, show: boolean };

const ResponisveNavbar = (props: PropsType): React.Node => (
  <div className="responisve-navbar">
    <div className="menu-icon">
      <img src="/assets/menu.svg" alt="" onClick={(): boolean => props.setState({ show: !props.show })} />
    </div>
    {props.location !== '/' ? (
      <div
        className="responsive-wrapper-list"
        style={{ opacity: props.show ? 1 : 0, visibility: props.show ? 'visible' : 'hidden' }}
      >
        <img src="/assets/cancel.svg" alt="" onClick={(): boolean => props.setState({ show: !props.show })} />
        <ul>
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
          <li>
            <Link to="/jobs">Jobs</Link>
          </li>
        </ul>
      </div>
    ) : (
      <div
        className="responsive-wrapper-list"
        style={{ opacity: props.show ? 1 : 0, visibility: props.show ? 'visible' : 'hidden' }}
      >
        <img src="/assets/cancel.svg" alt="" onClick={(): boolean => props.setState({ show: !props.show })} />
        <ul>
          <LinkTo activeClass="home-active active" to="home" spy smooth duration={500}>
            <li onClick={(): boolean => props.setState({ show: !props.show })}>Home</li>
          </LinkTo>
          <LinkTo activeClass="home-active active" to="about" spy smooth duration={500}>
            <li onClick={(): boolean => props.setState({ show: !props.show })}>About</li>
          </LinkTo>
          <LinkTo activeClass="home-active active" to="speakers" spy smooth duration={500}>
            <li onClick={(): boolean => props.setState({ show: !props.show })}>Speakers</li>
          </LinkTo>
          <LinkTo activeClass="home-active active" to="events" spy smooth duration={500}>
            <li onClick={(): boolean => props.setState({ show: !props.show })}>Agenda</li>
          </LinkTo>
          <LinkTo activeClass="home-active active" to="sponsors" spy smooth duration={500}>
            <li onClick={(): boolean => props.setState({ show: !props.show })}>Location</li>
          </LinkTo>
          <LinkTo activeClass="home-active active" to="venue" spy smooth duration={500}>
            <li onClick={(): boolean => props.setState({ show: !props.show })}>Partners</li>
          </LinkTo>
          <LinkTo activeClass="home-active active" to="blog" spy smooth duration={500}>
            <li onClick={(): boolean => props.setState({ show: !props.show })}>News</li>
          </LinkTo>
          <Link to="/jobs">
            <li>Jobs</li>
          </Link>
        </ul>
      </div>
    )}
  </div>
);

/*eslint-disable*/

const enhance = withStateHandlers({ show: false }, { setState: () => newState => newState });

export default enhance(ResponisveNavbar);
