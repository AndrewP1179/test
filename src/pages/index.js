//@flow
import React from 'react';
import Layout from '../components/layout/Layout';
import BlogPreview from '../components/blog/BlogPreview';

const HomePage = (): React.Node => (
  <div>
    <Layout>
      <BlogPreview />
    </Layout>
  </div>
);

export default HomePage;
