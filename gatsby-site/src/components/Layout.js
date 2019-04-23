import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Helmet from 'react-helmet';
import 'normalize.css';
import Nav from './Nav';
import Footer from './Footer';
import './styles/global.css';
import LayoutStyles from './styles/LayoutStyles';

export default function Layout({ children }) {
    const data = useStaticQuery(graphql`
      query SiteData {
        site {
          siteMetadata {
            title
          }
        }
      }
    `);
    console.log(data);
    return (
        <LayoutStyles>
        <Helmet>
            <title> {data.site.siteMetadata.title} </title>
        </Helmet>
            <h1>{data.site.siteMetadata.title}</h1>
            <Nav />
            {children}
            <Footer />
        </LayoutStyles>
    );
}