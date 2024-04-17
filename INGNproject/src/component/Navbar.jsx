import React from 'react'
import styles from './Navbar.module.scss'

export const Navbar = ({setCategory}) => {
  return (

    <div className={styles.Header}>
        <h2>INGN</h2>
    <ul>
        <li onClick={() => setCategory('Alle')}>Alle</li>
        <li>|</li>
        <li onClick={() => setCategory('Indland')}>Indland</li>
        <li>|</li>
        <li onClick={() => setCategory('Udland')}>Udland</li>
        <li>|</li>
        <li onClick={() => setCategory('Teknologi')}>Teknologi</li>
        <li>|</li>
        <li onClick={() => setCategory('Sport')}>Sport</li>
        <li>|</li>
        <li onClick={() => setCategory('Politik')}>Politik</li>
        <li>|</li>
        <li onClick={() => setCategory('Samfund')}>Samfund</li>
      </ul>
     </div>
  )
}
