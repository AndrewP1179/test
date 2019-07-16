//@flow
import * as React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import AliceCarousel from 'react-alice-carousel';

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
                  path
                  title
                  time
                  speakerName
                }
              }
            }
          }
        }
      `}
      render={(data: Object): React.Node => (
        <AliceCarousel mouseDragEnabled dotsDisabled>
          {data.allMarkdownRemark.edges.map((item: Object): React.Node => (
            <Link to={item.node.frontmatter.path} key={item.node.frontmatter.title}>
              <div className="event">
                <div className="time-wrapper">
                  <div className="time">{item.node.frontmatter.time.substring(5)}</div>
                </div>
                <div className="event-details">
                  <div className="speaker-name">{item.node.frontmatter.speakerName}:</div>
                  <div className="title">{item.node.frontmatter.title}</div>
                </div>
              </div>
            </Link>
          ))}
        </AliceCarousel>
      )}
    />
  </div>
);

export default EventsPreview;
