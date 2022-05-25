import React from 'react'
import Navbar from '../Navbar/Navbar'
import Styles from './Contents.module.scss'

type Props = {}

export default function Contents({ }: Props) {
  const code = new URL(window.location.href).searchParams.get("code");
  return (
    <div className={Styles.Contents}>
      <Navbar />
      Contents
      {code}
    </div>
  )
}