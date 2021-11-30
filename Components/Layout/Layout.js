import React from 'react';
import Head from 'next/head';
import Header from '../Header/Header';
import styles from '../Layout/Layout.module.css';
import PropTypes from 'prop-types';

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <Header />
      <div className={styles.main}>{children}</div>
    </>
  );
};

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Layout;
