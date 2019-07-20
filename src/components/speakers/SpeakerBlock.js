//@flow

import * as React from 'react';
import { graphql, StaticQuery } from 'gatsby';

type PropsType = { name: string };

const SpeakerBlock = (props: PropsType): React.Node => (
  <div>
    {console.log(props)}
    <StaticQuery
      query={graphql`
        query SpeakerQuery {
          markdownRemark(frontmatter: { title: { eq: "asd" } }) {
            frontmatter {
              title
            }
          }
        }
      `}
      render={(newData: Object): React.Node => <header>{console.log(newData)}</header>}
    />
  </div>
);

export default SpeakerBlock;
