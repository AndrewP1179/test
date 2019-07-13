//@flow
import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const EventsPreview = (): React.Node => (
  <div className="events-preview-wrapper">
    <StaticQuery
      query={graphql`
        query ShowEventsQuery {
          allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "eventsTemplate" } } }) {
            edges {
              node {
                frontmatter {
                  title
                  eventsImage
                  time
                  place
                  speakerName
                  speakersImage
                }
              }
            }
          }
        }
      `}
      render={(data: Object): React.Node => (
        <div className="event-preview">
          {data.allMarkdownRemark.edges.map((item: Object): React.Node => (
            <div className="event" key={item.node.frontmatter.title}>
              <img src={item.node.frontmatter.eventsImage.replace('/static', '')} alt="" />
              <div className="title">{item.node.frontmatter.title}</div>
            </div>
          ))}
        </div>
      )}
    />
  </div>
);

export default EventsPreview;
