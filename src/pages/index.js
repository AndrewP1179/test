//@flow
import React from 'react';
import Layout from '../components/layout/Layout';
import BlogPreview from '../components/blog/BlogPreview';
import SpeakerPreview from '../components/speakers/SpeakerPreview';

const HomePage = (): React.Node => (
  <div>
    <Layout>
      <BlogPreview />
      <SpeakerPreview />
    </Layout>
  </div>
);

export default HomePage;
