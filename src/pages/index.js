//@flow
import React from 'react';
import Layout from '../components/layout/Layout';
import Masthead from '../components/header/Masthead';
import AboutPreview from '../components/about/AboutPreview';
import BlogPreview from '../components/blog/BlogPreview';
import EventsPreview from '../components/events/EventsPreview';
import SpeakersPreview from '../components/speakers/SpeakersPreview';
import SponsorsPreview from '../components/sponsors/SponsorsPreview';

const HomePage = (): React.Node => (
  <div>
    <Layout>
      <Masthead />
      <AboutPreview />
      <SpeakersPreview />
      <EventsPreview />
      <SponsorsPreview />
      <BlogPreview />
    </Layout>
  </div>
);

export default HomePage;
