//@flow
import React from 'react';
import { graphql } from 'gatsby';
import FitText from '@kennethormandy/react-fittext';
import Layout from '../components/layout/Layout';

type PropsType = { data: string };

const Template = ({ data }: PropsType): React.Node => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <div className="blog-post-container">
        <div className="blog-post">
          <div className="title">
            <FitText minFontSize={35} maxFontSize={50} compressor={1.5}>
              {frontmatter.title}
            </FitText>
          </div>

          <div className="date">Date: {frontmatter.date}</div>
          <img className="image" src={frontmatter.image.replace('/static', '')} alt="" />
          <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </Layout>
  );
};
export default Template;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date
        image
      }
    }
  }
`;
