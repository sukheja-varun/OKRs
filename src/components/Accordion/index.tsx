import React, { memo } from 'react';

import styles from './index.module.scss';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}
const Accordion: React.FC<AccordionProps> = (props) => {
  const { title, children } = props;
  const [isOpen, setOpen] = React.useState(false);

  return (
    <div className={styles.accordionWrapper}>
      <div
        role="button"
        className={`${styles.accordionTitle} ${isOpen ? styles.open : ''}`}
        onClick={() => setOpen(!isOpen)}
        onKeyPress={(e) => e.key === 'enter' && setOpen(!isOpen)}
        tabIndex={0}
      >
        {title}
      </div>
      <div
        className={`${styles.accordionItem} ${!isOpen ? styles.collapsed : ''}`}
      >
        <div className={styles.accordionContent}>{children}</div>
      </div>
    </div>
  );
};
export default memo(Accordion);
