import classes from './Modal.module.css';

const Modal = ({ children, visible, setVisible }) => {
  let rootClasses = [classes.postModal];

  if (visible) rootClasses = [classes.postModal, classes.active];

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div
        className={classes.postModalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
