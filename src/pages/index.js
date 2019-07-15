//@flow
import React from 'react';
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
    <Layout location={props.location.pathname}>
      <Masthead />
      <AboutPreview />
      <SpeakersPreview />
      <EventsPreview />
      <SponsorsPreview />
      <Venue />
      <BlogPreview />
    </Layout>
  </div>
);

export default HomePage;
