//@flow
import React from 'react';
import { graphql } from 'gatsby';
import FitText from '@kennethormandy/react-fittext';
import { compose, withHandlers } from 'recompose';
import Layout from '../components/layout/Layout';

type PropsType = { data: string, speakerData: Object, onFiltering: any => any };

const EventsTemplate = (props: PropsType): React.Node => {
  const filteredArray = props.onFiltering(props.data.speakers.edges, props.data.eventsQuery.frontmatter.relation);
  return (
    <Layout>
      <div className="event-post-container">
        <div className="event-post">
          <div className="title">
            <FitText minFontSize={35} maxFontSize={50} compressor={1.5}>
              {props.data.eventsQuery.frontmatter.title}
            </FitText>
          </div>

          <img className="image" src={props.data.eventsQuery.frontmatter.eventsImage.replace('/static', '')} alt="" />
          <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: props.data.eventsQuery.html }} />
          <div className="content-wrapper">
            <div className="speaker">
              <img
                src={
                  filteredArray.node.frontmatter.speakersImage &&
                  filteredArray.node.frontmatter.speakersImage.replace('/static', '')
                }
              />
              <div className="speaker-name">{filteredArray.node.frontmatter.title}</div>
              <div className="speaker-job">{filteredArray.node.frontmatter.speakersJob}</div>
            </div>

            <div className="date-wrapper">
              <div className="date-block">
                <div className="time">
                  <span className="question">When?</span>
                  {props.data.eventsQuery.frontmatter.time.replace(' ', ', ')}
                </div>
                <div className="place">
                  <span className="question">Where?</span>
                  {props.data.eventsQuery.frontmatter.place}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const enhance = compose(
  withHandlers({
    onFiltering: (): Object => (speakerData: Object, eventData: Object): Object => {
      return speakerData.find((speaker: Object): React.Node => speaker.node.frontmatter.title === eventData);
    },
  }),
);

export default enhance(EventsTemplate);

export const speaker = graphql`
  query($path: String!) {
    eventsQuery: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        eventsImage
        time
        place
        relation
      }
    }
    speakers: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "speakersTemplate" } } }) {
      edges {
        node {
          frontmatter {
            title
            speakersJob
            speakersImage
          }
        }
      }
    }
  }
`;
