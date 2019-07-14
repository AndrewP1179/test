//@flow
import * as React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';

const AboutPreview = (): React.Node => (
  <div className="about-preview-wrapper">
    <div className="indexes">
      <div className="number">01</div>
      <div className="title">About</div>
    </div>
    <StaticQuery
      query={graphql`
        query AboutQuery {
          allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "aboutTemplate" } } }) {
            edges {
              node {
                html
              }
            }
          }
        }
      `}
      render={(data: Object): React.Node => (
        <div className="about-preview">
          {data.allMarkdownRemark.edges.map((item: Object): React.Node => (
            <div className="about" key="about-page">
              <div className="title">{item.node.html.substring(0, 164)}...</div>
            </div>
          ))}
          <div className="button read-more">
            <Link to="/about">Read more</Link>
          </div>
        </div>
      )}
    />
    <div className="indexes">
      <div className="number">02</div>
      <div className="title">Speakers</div>
    </div>
  </div>
);

export default AboutPreview;
