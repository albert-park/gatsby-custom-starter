import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import styles from './layouts.module.scss';
import '../styles/base.global.scss';

const Layout = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div className={styles['layout']}>
      {children}
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;
