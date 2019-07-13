//@flow
import React from 'react';
import { graphql } from 'gatsby';

type PropsType = { data: string };

const EventsTemplate = ({ data }: PropsType): React.Node => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <div className="event-post-container">
      <div className="event-post">
        <div className="title">{frontmatter.title}</div>
        <div className="date">{frontmatter.date}</div>
        <div className="place">{frontmatter.place}</div>
        <div className="speaker-name">{frontmatter.speakerName}</div>
        {/* <img src={frontmatter.image.replace('/static', '')} alt="" /> */}
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
};
export default EventsTemplate;

export const events = graphql`
  query events($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        image
        date
        place
        speakerName
      }
    }
  }
`;
