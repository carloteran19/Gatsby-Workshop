import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../Layout';
import { MDXRenderer } from 'gatsby-mdx';


export default function Tip({ data }) {
    return (
    <Layout>
      <Helmet>
        <title> {data.mdx.frontmatter.title} </title>
      </Helmet>  
      <MDXRenderer>{data.mdx.code.body}</MDXRenderer>
    </Layout>    
    );
}

// Write a page query that is dynamic 
export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      id 
      code {
        body     
      }
      frontmatter {
        slug
        title
      }    
    }
  }
`;