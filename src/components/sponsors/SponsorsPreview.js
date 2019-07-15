//@flow
import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const SponsorsPreview = (): React.Node => (
  <div className="sponsors-preview-wrapper">
    <div className="indexes">
      <div className="number">04</div>
      <div className="title">Partners</div>
    </div>
    <StaticQuery
      query={graphql`
        query SponsorsQuery {
          allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "sponsor" } } }) {
            edges {
              node {
                frontmatter {
                  templateKey
                  galleryImages {
                    sponsor
                  }
                }
              }
            }
          }
        }
      `}
      render={(data: Object): React.Node => (
        <div className="sponsors-preview">
          {data.allMarkdownRemark.edges.map((item: Object): Function =>
            item.node.frontmatter.galleryImages.map((image: Object): React.Node => (
              <div className="sponsor" key={image.sponsor}>
                <img src={image.sponsor.replace('/static', '')} alt="" />
              </div>
            )),
          )}
        </div>
      )}
    />
  </div>
);

export default SponsorsPreview;
