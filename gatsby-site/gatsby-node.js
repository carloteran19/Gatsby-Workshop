const path = require('path');
const axios = require('axios');

exports.createPages = async function({ graphql, actions}) {
  // 1. Query our tips! 
  const { data } = await graphql(`
  query {
    allMdx(filter: { frontmatter: { type: { eq: "tip" } } }) {
      nodes {
        id
        frontmatter {
          slug
        }
      }
    }
  }
  `);
  //2. Loop over tips 
  data.allMdx.nodes.forEach(tip => {
      //3. For each tip, create a page!
      actions.createPage({
        // What is the URL of the page
        path: `/tip/${tip.frontmatter.slug}`,
        // What react component will we render when someone hits this page?
        component: path.resolve('./src/components/templates/tip.js'),
        //What data is needed for the page itself 
        context: {
            id: tip.id,
        },
      });
  });
}

async function sourceUsers({ actions, createNodeId, createContentDigest }) {
  // 1. Fetch the users
  const { data: users } = await axios.get('https://jsonplaceholder.typicode.com/users');
  // 2. Loop over Each user
  users.forEach(user => {
    // 3. Create an object for the user
    const node = {
      // Data for the node
      ...user, // take everything from the user,
      // Custom data fields
      // custom ID
      id: createNodeId(`user-${user.id}`),
      parent: null, // there is no parent
      children: [], // no children
      internal: {
        type: `User`, // What should we call it?
        mediaType: 'application/json',
        contentDigest: createContentDigest(user), // helps gatsby know when a node changed
      }
    }
    actions.createNode(node);
  });
}

exports.sourceNodes = async function({ actions, createNodeId, createContentDigest }) {
  await sourceUsers({actions, createNodeId, createContentDigest});
}