import React, { memo } from 'react';

import styles from './index.module.scss';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <h1>React-OKRs</h1>
    </div>
  );
};
export default memo(Header);
