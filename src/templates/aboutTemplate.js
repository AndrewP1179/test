//@flow
import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/Layout';

const AboutPageTemplate = ({ data }: Object): React.Node => (
  <Layout>
    <div className="about-page">
      <div className="page-title">{data.markdownRemark.frontmatter.title}</div>
      <div className="page-content" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </div>
  </Layout>
);

export default AboutPageTemplate;

export const aboutPageQuery = graphql`
  query AboutPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
