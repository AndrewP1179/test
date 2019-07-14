//@flow
import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const EventsPreview = (): React.Node => (
  <div className="events-preview-wrapper">
    <div className="indexes">
      <div className="number">03</div>
      <div className="title">Agenda</div>
    </div>
    <StaticQuery
      query={graphql`
        query ShowEventsQuery {
          allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "eventsTemplate" } } }) {
            edges {
              node {
                frontmatter {
                  title
                  time
                  place
                  speakerName
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
              <div className="title">{item.node.frontmatter.title}</div>
              <div className="time">{item.node.frontmatter.time}</div>
              <div className="speaker-name">{item.node.frontmatter.speakerName}</div>
            </div>
          ))}
        </div>
      )}
    />
  </div>
);

export default EventsPreview;
