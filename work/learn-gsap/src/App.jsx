import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef, useState } from 'react';

const App = () => {
  const [xValue, setXValue] = useState(0);
  const randomX = gsap.utils.random(-500,500,100);
  const rotateX = gsap.utils.random(-360,360,30);
  const boxRef = useRef();
  const boxRef1 = useRef();
  const [roti, setroti] = useState(0);
  const { contextSafe } = useGSAP();

  const rotateBox = contextSafe(function () {
    gsap.to(boxRef1.current, {
      rotate:360,
      duration: 1
    })
  })

  useGSAP(()=>{
    gsap.to(boxRef.current,{
      x:xValue,
      duration: 1,
      rotate:roti,
    })
  },{scope:'main', dependencies:[xValue, rotateX]});
  return (
    <main>
      <button onClick={()=>{
        setXValue(randomX);
        setroti(rotateX);
        rotateBox();
      }}>Animate</button>
      <div ref={boxRef} className="box"></div>
      <div ref={boxRef1} className="box"></div>
    </main>
  )
}

export default App
