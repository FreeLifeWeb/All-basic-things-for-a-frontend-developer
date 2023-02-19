import React from 'react';
import classes from './MyInput.module.css';

// React.forwardRef необходим,чтобы передавать ссылку в наш кастомный инпут
const MyInput = React.forwardRef((props, ref) => (
  <input ref={ref} className={classes.myInput} {...props} />
));
export default MyInput;
