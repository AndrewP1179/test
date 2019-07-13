//@flow
import React from 'react';
import { graphql } from 'gatsby';

type PropsType = { data: string };

const SpeakersTemplate = ({ data }: PropsType): React.Node => {
  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;
  return (
    <div className="event-post-container">
      <div className="event-post">
        <div className="title">{frontmatter.title}</div>
        <img src={frontmatter.image.replace('/static', '')} alt="" />
        <div className="speaker-job">{frontmatter.job}</div>
      </div>
    </div>
  );
};
export default SpeakersTemplate;

export const speakers = graphql`
  query speakers($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title
        image
        job
      }
    }
  }
`;
