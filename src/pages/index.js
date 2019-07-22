//@flow
import React from 'react';
import { Element } from 'react-scroll';
import Scroller from '../components/scroller/Scroller';
import Layout from '../components/layout/Layout';
import Masthead from '../components/header/Masthead';
import AboutPreview from '../components/about/AboutPreview';
import BlogPreview from '../components/blog/BlogPreview';
import EventsPreview from '../components/events/EventsPreview';
import SpeakersPreview from '../components/speakers/SpeakersPreview';
import SponsorsPreview from '../components/sponsors/SponsorsPreview';
import Venue from '../components/venue/Venue';

type PropsType = { location: Object };

const HomePage = (props: PropsType): React.Node => (
  <div>
    <Scroller />
    <Layout location={props.location.pathname}>
      <Element name="home">
        <Masthead />
      </Element>
      <Element name="about">
        <AboutPreview />
      </Element>
      <Element name="speakers">
        <SpeakersPreview />
      </Element>
      <Element name="events">
        <EventsPreview />
      </Element>
      <Element name="sponsors">
        <SponsorsPreview />
      </Element>
      <Element name="venue">
        <Venue />
      </Element>
      <Element name="blog">
        <BlogPreview />
      </Element>
    </Layout>
  </div>
);

export default HomePage;
