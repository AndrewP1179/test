//@flow
import * as React from 'react';

import { Link } from 'react-scroll';

const Scroller = (): React.Node => (
  <div className="scroller">
    <Link activeClass="home-active active" to="home" spy smooth duration={500}>
      <div className="wrapper">
        <div className="dot"></div>
        <div className="title">Home</div>
      </div>
    </Link>
    <Link activeClass="about-active active" to="about" spy smooth={true} duration={500}>
      <div className="wrapper">
        <div className="dot"></div>
        <div className="title">About</div>
      </div>
    </Link>
    <Link activeClass="speakers-active active" to="speakers" spy smooth={true} duration={500}>
      <div className="wrapper">
        <div className="dot"></div>
        <div className="title">Speakers</div>
      </div>
    </Link>
    <Link activeClass="agenda-active active" to="events" spy smooth={true} duration={500}>
      <div className="wrapper">
        <div className="dot"></div>
        <div className="title">Agenda</div>
      </div>
    </Link>
    <Link activeClass="sponsors-active active" to="sponsors" spy smooth={true} duration={500}>
      <div className="wrapper">
        <div className="dot"></div>
        <div className="title">Partners</div>
      </div>
    </Link>
    <Link activeClass="venue-active active" to="venue" spy smooth={true} duration={500}>
      <div className="wrapper">
        <div className="dot"></div>
        <div className="title">Location</div>
      </div>
    </Link>
    <Link activeClass="blogs-active active" to="blog" spy smooth={true} duration={500}>
      <div className="wrapper">
        <div className="dot"></div>
        <div className="title">News</div>
      </div>
    </Link>
  </div>
);

export default Scroller;
