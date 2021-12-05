import React from 'react'
import styles from './styles.module.scss';

export default function Input({ children }) {
  return (
    <span className={ `${styles.input}`} >
      {children}
    </span>
  )
}