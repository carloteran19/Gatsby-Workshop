import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import TipsListStyles from '../components/styles/TipsListStyles';


export default function TipsPage(props) {
    const tips = props.data.allMdx.nodes;
    return (
        <Layout>
        <TipsListStyles>  
            {tips.map(tip => (
                <li key={tip.id}>
                  <Link to={`/tip/${tip.frontmatter.slug}`}>{tip.frontmatter.title}</Link>
                </li>
            ))}
        </TipsListStyles>  
        </Layout>
    );
}

// this page will query All the tips from our markdown files
export const query = graphql`
  query {
      allMdx {
          nodes {
              id 
              frontmatter {
                  slug
                  title
              }
          }
      }
  }
`;