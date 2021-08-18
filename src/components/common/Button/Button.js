import React from 'react';
import styles from './Button.module.scss';

const Button = ({name}) => {
  return (
    <button className={styles.component}>{name}</button>
  );
}

export default Button;
