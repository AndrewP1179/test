//@flow
import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { lifecycle, compose, withStateHandlers } from 'recompose';
import Layout from '../components/layout/Layout';

const EventsPage = (props: Object): React.Node => {
  return (
    <Layout>
      <div className="events-preview">
        {props.filteredData.map((item: Object): React.Node => (
          <div className="events-wrapper" key={item.date}>
            <div className="event-date">{item.date}</div>
            {item.events.map((event: Object): React.Node => (
              <div className="event" key={event.node.frontmatter.path}>
                <div className="title">{event.node.frontmatter.title}</div>
                <div className="speaker-name">{event.node.frontmatter.speakerName}</div>
                <Link to={event.node.frontmatter.path}>
                  <div className="button">Read more</div>
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Layout>
  );
};

const enhance = compose(
  /*eslint-disable*/
  withStateHandlers({ filteredData: [] }, { setState: () => newState => newState }),
  lifecycle({
    componentDidMount() {
      const groups = this.props.data.allMarkdownRemark.edges.reduce((groups: Object, event: Object): Array => {
        const time = event.node.frontmatter.time;

        const pos1 = time.indexOf(' ');
        const pos2 = time.indexOf(' ', pos1 + 1);
        const pos3 = time.indexOf(' ', pos2 + 1);
        const date = time.substring(0, pos3);

        if (!groups[date]) {
          groups[date] = [];
        }
        groups[date].push(event);
        return groups;
      }, {});

      const filtered = Object.keys(groups).map((date: string): Array => {
        return {
          date,
          events: groups[date],
        };
      });
      this.props.setState({ filteredData: filtered });
    },
  }),
);

export default enhance(EventsPage);

export const pageQuery = graphql`
  query EventsQuery {
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
`;
