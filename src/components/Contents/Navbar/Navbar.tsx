import React from 'react'
import Styles from "./Navbar.module.scss"

type Props = {}

export default function Navbar({}: Props) {
  return (
    <div className={Styles.Navbar}>
      <ul>
        <li><a href='#'>if가 뭐지?</a></li>
        <li><a href='#'>QnA</a></li>
      </ul>
    </div>
  )
}