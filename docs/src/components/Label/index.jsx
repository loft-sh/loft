import React from 'react'
import styles from './styles.module.scss';

export default function Label({ children }) {
  return (
    <span className={ `${styles.label}`} >
      {children}
    </span>
  )
}