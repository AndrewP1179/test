//@flow
import React from 'react';
import { graphql } from 'gatsby';
import { compose, withHandlers, lifecycle, withStateHandlers } from 'recompose';
import axios from 'axios';
import Layout from '../components/layout/Layout';

type PropsType = { data: string, speakerData: Object };

const EventsTemplate = (props: PropsType): React.Node => {
  console.log(props);
  return (
    <Layout>
      <div className="event-post-container">
        <div className="event-post">
          <div className="title">{props.data.markdownRemark.frontmatter.title}</div>

          <img
            className="image"
            src={props.data.markdownRemark.frontmatter.eventsImage.replace('/static', '')}
            alt=""
          />
          <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />
          <div className="content-wrapper">
            <div className="speaker">
              <img src={props.speakerData.speakersImage && props.speakerData.speakersImage.replace('/static', '')} />
              <div className="speaker-name">{props.speakerData.speakerName}</div>
              <div className="speaker-job">{props.speakerData.speakerJob}</div>
            </div>

            <div className="date-wrapper">
              <div className="time">
                <span className="question">When? </span>
                {props.data.markdownRemark.frontmatter.time.replace(' ', ', ')}
              </div>
              <div className="place">
                <span className="question">Where? </span>
                {props.data.markdownRemark.frontmatter.place}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const enhance = compose(
  /* eslint-disable */
  withStateHandlers({ speakerData: {} }, { setState: () => newState => newState }),
  /* eslint-enable */

  withHandlers({
    onRequest: (props: PropsType): Function => () => {
      axios({
        url: `${props.location.origin}/___graphql`,
        method: 'post',
        data: {
          query: `
            query speakersQuery($title: String) {
              markdownRemark(frontmatter: { title: { eq: $title } }) {
                frontmatter {
                  title
                  speakersJob 
                  speakersImage
                }
              }
            }
          `,
          variables: {
            title: props.data.markdownRemark.frontmatter.relation,
          },
        },
      }).then((result: Object) => {
        props.setState({ speakerData: result.data.data.markdownRemark.frontmatter });
      });
    },
  }),
  lifecycle({
    componentDidMount() {
      this.props.onRequest();
    },
  }),
);

export default enhance(EventsTemplate);

export const events = graphql`
  query events($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        eventsImage
        time
        place
        relation
      }
    }
  }
`;
