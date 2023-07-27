import classes from './Input.module.css';

const Input = (props) => {
  return <input className={classes.postInput} {...props} />;
};

export default Input;
