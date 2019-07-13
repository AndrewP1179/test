//@flow
import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';

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
                }
              }
            }
          }
        }
      `}
      render={(data: Object): React.Node => (
        <div className="speaker-preview">
          {data.allMarkdownRemark.edges.map((item: Object): React.Node => (
            <div className="event" key={item.node.frontmatter.speakerName}>
              <img src={item.node.frontmatter.speakersImage.replace('/static', '')} alt="" />
              <div className="title">{item.node.frontmatter.speakerName}</div>
            </div>
          ))}
        </div>
      )}
    />
  </div>
);

export default SpeakersPreview;
