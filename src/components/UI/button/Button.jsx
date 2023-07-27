import classes from './Button.module.css';

const Button = ({ children, ...post }) => {
  return (
    <button {...post} className={[classes.btn, post.className].join(' ')}>
      {children}
    </button>
  );
};

export default Button;
