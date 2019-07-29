//@flow
import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/Layout';

const EventsPage = ({ data }: Object): React.Node => {
  const blankElement = data.allMarkdownRemark.edges.findIndex(
    (item: Object): number => item.node.frontmatter.title === '',
  );
  return (
    <Layout>
      <div className="speakers-preview-wrapper speakers-pages">
        {data.allMarkdownRemark.edges.length > 1 ? (
          data.allMarkdownRemark.edges.slice(blankElement + 1).map((item: Object): React.Node => (
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
          ))
        ) : (
          <div className="speakers-empty-block">Coming soon</div>
        )}
      </div>
    </Layout>
  );
};

export default EventsPage;

export const pageQuery = graphql`
  query SpeakersQuery {
    allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "speakersTemplate" } } }) {
      edges {
        node {
          frontmatter {
            title
            speakersImage
            speakersJob
            speakersDescription
          }
        }
      }
    }
  }
`;
