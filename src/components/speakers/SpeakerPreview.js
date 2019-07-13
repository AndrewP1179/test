//@flow
import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const SpeakerPreview = (): React.Node => (
  <div className="speakers-preview-wrapper">
    <StaticQuery
      query={graphql`
        query speakersQuery {
          allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "SpeakersTemplate" } } }) {
            edges {
              node {
                frontmatter {
                  title
                  image
                  job
                }
              }
            }
          }
        }
      `}
      render={(data: Object): React.Node => (
        <div className="speakers-preview">
          {data.allMarkdownRemark.edges.map((item: Object): React.Node => (
            <div className="speaker" key={item.node.frontmatter.title}>
              <img src={item.node.frontmatter.image.replace('/static', '')} alt="" />
              <div className="title">{item.node.frontmatter.title}</div>
              <div className="job">{item.node.frontmatter.job}</div>
            </div>
          ))}
        </div>
      )}
    />
  </div>
);

export default SpeakerPreview;
