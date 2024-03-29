/*eslint-disable*/

const path = require('path');

const gatsby = require('gatsby');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            excerpt(pruneLength: 250)
            html
            id
            frontmatter {
              path
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if (node.frontmatter.templateKey !== 'sponsor' && node.frontmatter.templateKey !== 'speakersTemplate') {
        createPage({
          path: node.frontmatter.path,
          component: path.resolve(`src/templates/${node.frontmatter.templateKey}.js`),
          context: {},
        });
      }
      return false;
    });
  });
};
