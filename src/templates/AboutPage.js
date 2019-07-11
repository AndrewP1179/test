import * as React from 'react';
import { graphql } from 'gatsby';

const AboutPageTemplate = props => <div>{console.log(props)} </div>;

export default AboutPageTemplate;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`;
