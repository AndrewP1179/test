//@flow
import React from 'react';
import Layout from '../components/layout/Layout';
import BlogPreview from '../components/blog/BlogPreview';
import EventsPreview from '../components/events/EventsPreview';
import SpeakersPreview from '../components/speakers/SpeakersPreview';

const HomePage = (): React.Node => (
  <div>
    <Layout>
      <BlogPreview />
      <EventsPreview />
      <SpeakersPreview />
    </Layout>
  </div>
);

export default HomePage;
