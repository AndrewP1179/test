//@flow
import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const SponsorsPreview = (): React.Node => (
  <div className="sponsors-preview-wrapper">
    <StaticQuery
      query={graphql`
        query SponsorsQuery {
          allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "sponsor" } } }) {
            edges {
              node {
                frontmatter {
                   
                }
              }
            }
          }
        }
      `}
      render={(data: Object): React.Node => (
        <div className="sponsors-preview">
          {data.allMarkdownRemark.edges.map((item: Object): React.Node => (
            <div className="sponsor" key={item.node.frontmatter.sponsor}>
              <img src={item.node.frontmatter.sponsor.replace('/static', '')} alt="" />
            </div>
          ))}
        </div>
      )}
    />
  </div>
);

export default SponsorsPreview;
