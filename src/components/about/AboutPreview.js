//@flow
import * as React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import FitText from '@kennethormandy/react-fittext';

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
              <FitText minFontSize={16} maxFontSize={40} compressor={2.5}>
                <div className="title" dangerouslySetInnerHTML={{ __html: `${item.node.html.substring(0, 164)}...` }} />
              </FitText>
            </div>
          ))}
          <Link className="button read-more" to="/about">
            Read more
          </Link>
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
