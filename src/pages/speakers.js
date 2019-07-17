//@flow
import * as React from 'react';
import { graphql } from 'gatsby';
import { uniqBy } from 'lodash';
import Layout from '../components/layout/Layout';

const EventsPage = ({ data }: Object): React.Node => {
  let filterdData = uniqBy(data.allMarkdownRemark.edges, 'node.frontmatter.speakerName');

  return (
    <Layout>
      <div className="speakers-preview-wrapper speakers-pages">
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
    </Layout>
  );
};

export default EventsPage;

export const pageQuery = graphql`
  query SpeakersQuery {
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
`;
