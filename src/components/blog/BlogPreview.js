//@flow
import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const BlogPreview = (): React.Node => (
  <div className="blogs-preview-wrapper">
    <StaticQuery
      query={graphql`
        query HomePageQuery {
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
      `}
      render={(data: Object): React.Node => (
        <div className="blogs-preview">
          {data.allMarkdownRemark.edges.map((item: Object): React.Node => (
            <div className="blog" key={item.node.frontmatter.title}>
              <img src={item.node.frontmatter.image.replace('/static', '')} alt="" />
              <div className="title">{item.node.frontmatter.title}</div>
            </div>
          ))}
        </div>
      )}
    />
  </div>
);

export default BlogPreview;
