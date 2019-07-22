//@flow
import * as React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout/Layout';

const JobsPage = ({ data }: Object): React.Node => {
  return (
    <Layout>
      {console.log(data)}
      <div className="jobs-preview">
        {data.allMarkdownRemark.edges.map((item: Object): React.Node => (
          <div className="jobs-block-wrapper" key={item.node.frontmatter.path}>
            <div className="job" key={item.node.frontmatter.path}>
              <div className="title">{item.node.frontmatter.title}</div>
              <div className="organization">
                <span className="text">Organziation: </span>
                <span className="company">{item.node.frontmatter.organization}</span>
              </div>
              <div
                className="job-post-content"
                dangerouslySetInnerHTML={{ __html: `${item.node.html.substring(0, 150)}...` }}
              />
              <Link to={item.node.frontmatter.path}>
                <div className="button">Details</div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default JobsPage;

export const pageQuery = graphql`
  query JobsQuery {
    allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "jobTemplate" } } }) {
      edges {
        node {
          html
          frontmatter {
            path
            title
            organization
          }
        }
      }
    }
  }
`;
