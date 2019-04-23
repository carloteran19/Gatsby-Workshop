import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';


export default function UsersPage(props) {
    const users = props.data.allUser.nodes;
    return (
        <Layout>
          {users.map(user => (
              <li key={user.id}>
                {user.username}
              </li>
          ))}
        </Layout>
    );
}

// this page will query All the tips from our markdown files
export const query = graphql`
  query {
      allUser {
          nodes {
              id 
              name
              username
              company {
                  name
                  bs
              }
          }
      }
  }
`;