import React from 'react'
import Navbar from '../Navbar/Navbar'
import Styles from './Contents.module.scss'
import Button from '@mui/material/Button';
import { useEffect, useRef } from "react"
import Typed from 'typed.js';


type Props = {}

export default function Contents({ }: Props) {
  const code = new URL(window.location.href).searchParams.get("code");
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);
  // Create reference to store the Typed instance itself
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        '애인이 남사친 혹은 여사친과 놀러간다고 한다면?',
        '애인을 가장 사랑하는 부분은?'
      ],
      typeSpeed: 50,
      backSpeed: 70,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])

  return (
    <div className={Styles.Contents}>
      <Navbar />
      <div className="user-info">
        <img className="user-me" />
        <img className="user-other"/>
      </div>
      <div className={Styles.type_wrap}>
        <span style={{ whiteSpace: 'pre' }} ref={el} />
      </div>
      <Button variant="outlined" color="secondary">시작하기</Button>
    </div>
  )
}