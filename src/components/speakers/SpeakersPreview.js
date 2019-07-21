//@flow
import * as React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';

const SpeakersPreview = (): React.Node => (
  <div className="speakers-preview-wrapper">
    <StaticQuery
      query={graphql`
        query ShowSpeakersQuery {
          allMarkdownRemark(limit: 4, filter: { frontmatter: { templateKey: { eq: "speakersTemplate" } } }) {
            edges {
              node {
                frontmatter {
                  title
                  speakersDescription
                  speakersImage
                  speakersJob
                }
              }
            }
          }
        }
      `}
      render={(data: Object): React.Node => {
        console.log(data);
        return (
          <div className="speaker-preview">
            {data.allMarkdownRemark.edges.map((item: Object): React.Node => (
              <div
                className="speaker"
                key={item.node.frontmatter.title}
                style={{ backgroundImage: `url(${item.node.frontmatter.speakersImage.replace('/static', '')})` }}
              >
                <div className="speaker-card">
                  <div className="info-wrapper">
                    <div className="title">{item.node.frontmatter.title}</div>
                    <div className="job">{item.node.frontmatter.speakersJob}</div>
                    <div className="description">{item.node.frontmatter.speakersDescription}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      }}
    />
    <Link className="button read-more speaker-btn" to="/speakers">
      Show more
    </Link>
  </div>
);

export default SpeakersPreview;
