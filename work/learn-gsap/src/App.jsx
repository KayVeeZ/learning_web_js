import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';

const App = () => {
  const boxRef = useRef();

  useGSAP(()=>{
    gsap.to(boxRef.current,{
      duration:1,
      rotate: 360,
    });
  });

  return (
    <main>
      <div className="container">
        <div className="circle"></div>
        <div ref={boxRef} className="box"></div>
      </div>
      <div className="kuch">
        <div className="circle"></div>
        <div className="box"></div>
      </div>
    </main>
  )
}

export default App
