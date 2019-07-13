//@flow
import * as React from 'react';
import { graphql } from 'gatsby';

const EventsPage = ({ data }: Object): React.Node => (
  <div className="events-preview">
    {data.allMarkdownRemark.edges.map((item: Object): React.Node => (
      <div className="event" key={item.node.frontmatter.title}>
        <img src={item.node.frontmatter.eventsImage.replace('/static', '')} alt="" />
        <div className="title">{item.node.frontmatter.title}</div>
      </div>
    ))}
  </div>
);

export default EventsPage;

export const pageQuery = graphql`
  query EventsQuery {
    allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "SpeakersTemplate" } } }) {
      edges {
        node {
          frontmatter {
            title
            eventsImage
          }
        }
      }
    }
  }
`;
