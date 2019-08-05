//@flow
/* eslint-disable */
import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';

const Metadata = (props: Object): React.Node => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: { title, description, siteUrl },
      },
    }: Object): React.Node => (
      <Helmet title={title}>
        <meta name="description" content={description} />
        {/* {logo && <meta property="og:image" content={logo} />} */}
        {description && <meta property="og:description" content={description} />}
        {title && <meta property="og:title" content={title} />}
        {siteUrl && <meta property="og:url" content={siteUrl} />}
      </Helmet>
    )}
  />
);

const query = graphql`
  query metaTags {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`;

export default Metadata;
