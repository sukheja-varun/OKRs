import React, { memo } from 'react';

import styles from './index.module.scss';

interface ModalProps {
  isVisible: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}
const Modal: React.FC<ModalProps> = (props) => {
  const { isVisible, title, children, onClose } = props;

  if (!isVisible) return null;
  return (
    <div role="button" id="modal" className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <div>{title}</div>
          <div
            role="button"
            className={styles.close}
            onClick={onClose}
            onKeyPress={(e) => e.key === 'enter' && onClose()}
            tabIndex={0}
          >
            &times;
          </div>
        </div>
        <div className={styles.modalBody}>{children}</div>
      </div>
    </div>
  );
};
export default memo(Modal);
