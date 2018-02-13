import React from 'react';
import Link from 'gatsby-link';

import styles from './header.module';

const Header = () => (
  <div className={styles['header']}>
    <div className={styles['header-inner']}>
      <h1>
        <Link to="/">
          Gatsby
        </Link>
      </h1>
    </div>
  </div>
);

export default Header;
