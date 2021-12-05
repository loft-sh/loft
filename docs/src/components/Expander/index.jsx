import React from 'react'
import styles from './styles.module.scss';

export default function Expander({ children }) {
  return (
    <span className={ `${styles.expander}`} >
      {children}
    </span>
  )
}