//@flow
import * as React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout/Layout';

const BlogPage = ({ data }: Object): React.Node => (
  <Layout>
    <div className="blogs-preview-wrapper blogs-page-wrapper">
      <div className="blogs-preview">
        {data.allMarkdownRemark.edges.map((item: Object): React.Node => (
          <Link to={item.node.frontmatter.path} key={item.node.frontmatter.title}>
            <div
              className="blog"
              style={{ backgroundImage: `url(${item.node.frontmatter.image.replace('/static', '')})` }}
            >
              <div className="blog-card">
                <div className="info-wrapper">
                  <div className="title">{item.node.frontmatter.title}</div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </Layout>
);

export default BlogPage;

export const pageQuery = graphql`
  query BlogsQuery {
    allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "blogTemplate" } } }) {
      edges {
        node {
          frontmatter {
            title
            image
            path
          }
        }
      }
    }
  }
`;
