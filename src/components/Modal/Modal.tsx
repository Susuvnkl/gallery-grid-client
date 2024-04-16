import styles from "./Modal.module.scss";
import { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  show: boolean;
}

function Modal(props: ModalProps) {
  const { children, show } = props;

  if (!show) return null;

  return (
    <div className={styles.Modal}>
      <div className={styles.ModalWrapper}>
        <div className={styles.ModalContainer}>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
