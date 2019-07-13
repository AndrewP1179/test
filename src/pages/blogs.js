//@flow
import * as React from 'react';
import { graphql } from 'gatsby';

const BlogPage = ({ data }: Object): React.Node => (
  <div className="blogs-preview">
    {data.allMarkdownRemark.edges.map((item: Object): React.Node => (
      <div className="blog" key={item.node.frontmatter.title}>
        <img src={item.node.frontmatter.image.replace('/static', '')} alt="" />
        <div className="title">{item.node.frontmatter.title}</div>
      </div>
    ))}
  </div>
);

export default BlogPage;

export const pageQuery = graphql`
  query BlogsQuery {
    allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "BlogTemplate" } } }) {
      edges {
        node {
          frontmatter {
            title
            image
          }
        }
      }
    }
  }
`;
