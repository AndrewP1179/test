//@flow
import * as React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';

const BlogPreview = (): React.Node => (
  <div className="blogs-preview-wrapper home-preview">
    <div className="indexes">
      <div className="number">05</div>
      <div className="title">News</div>
    </div>
    <StaticQuery
      query={graphql`
        query HomePageQuery {
          allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "blogTemplate" } } }) {
            edges {
              node {
                frontmatter {
                  title
                  image
                  path
                }
              }
            }
          }
        }
      `}
      render={(data: Object): React.Node => (
        <div className="blogs-preview">
          {data.allMarkdownRemark.edges.map((item: Object): React.Node => (
            <Link to={item.node.frontmatter.path} key={item.node.frontmatter.title}>
              <div
                className="blog"
                style={{ backgroundImage: `url(${item.node.frontmatter.image.replace('/static', '')})` }}
              >
                <div className="blog-card">
                  <div className="info-wrapper">
                    <div className="title">{item.node.frontmatter.title}</div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    />
    <div className="button-wrapper">
      <Link className="button read-more blogs-button" to="/blogs">
        Show more
      </Link>
    </div>
  </div>
);

export default BlogPreview;
