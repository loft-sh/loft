import React from 'react'
import styles from './styles.module.scss';

export default function NavStep({ children }) {
  return (
    <span className={ `${styles.step}`} >
      {children}
    </span>
  )
}