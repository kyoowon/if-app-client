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
        'Some <i>strings</i> are slanted',
        'Some <strong>strings</strong> are bold',
        'HTML characters &times; &copy;'
      ],
      typeSpeed: 50,
      backSpeed: 50,
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
      <div className="type-wrap">
        <span style={{ whiteSpace: 'pre' }} ref={el} />
      </div>
      <div>
        <img />
        <img />
      </div>
      <Button variant="outlined" color="secondary">시작하기</Button>
    </div>
  )
}