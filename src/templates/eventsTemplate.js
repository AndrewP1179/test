//@flow
import React from 'react';
import { graphql } from 'gatsby';
import { compose, withHandlers, lifecycle } from 'recompose';
import axios from 'axios';
import Layout from '../components/layout/Layout';

type PropsType = { data: string };

const EventsTemplate = ({ data }: PropsType): React.Node => {
  console.log(data);
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <div className="event-post-container">
        <div className="event-post">
          <div className="title">{frontmatter.title}</div>

          <img className="image" src={frontmatter.eventsImage.replace('/static', '')} alt="" />
          <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
          <div className="content-wrapper">
            <div className="speaker">
              {/* <img src={frontmatter.speakersImage.replace('/static', '')} />
              <div className="speaker-name">{frontmatter.speakerName}</div>
              <div className="speaker-job">{frontmatter.speakerJob}</div> */}
            </div>

            <div className="date-wrapper">
              <div className="time">
                <span className="question">When? </span>
                {frontmatter.time.replace(' ', ', ')}
              </div>
              <div className="place">
                <span className="question">Where? </span>
                {frontmatter.place}
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
    onRequest: (props: PropsType): Function => () => {
      axios({
        url: `${props.location.origin}/___graphql`,
        method: 'post',
        data: {
          query: `
            query speakersQuery($title: String) {
              markdownRemark(frontmatter: { title: { eq: $title } }) {
                html
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
        console.log(result.data);
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
