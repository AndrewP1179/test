//@flow
import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { uniqBy } from 'lodash';

const SpeakersPreview = (): React.Node => (
  <div className="speakers-preview-wrapper">
    <StaticQuery
      query={graphql`
        query ShowSpeakersQuery {
          allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "eventsTemplate" } } }) {
            edges {
              node {
                frontmatter {
                  speakerName
                  speakersImage
                  speakerJob
                }
              }
            }
          }
        }
      `}
      render={(data: Object): React.Node => {
        let filterdData = uniqBy(data.allMarkdownRemark.edges, 'node.frontmatter.speakerName');
        return (
          <div className="speaker-preview">
            {filterdData.map((item: Object): React.Node => (
              <div
                className="speaker"
                key={item.node.frontmatter.speakerName}
                style={{ backgroundImage: `url(${item.node.frontmatter.speakersImage.replace('/static', '')})` }}
              >
                <div className="speaker-card">
                  <div className="info-wrapper">
                    <div className="title">{item.node.frontmatter.speakerName}</div>
                    <div className="job">{item.node.frontmatter.speakerJob}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      }}
    />
  </div>
);

export default SpeakersPreview;
