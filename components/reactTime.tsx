import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const GsapTimelineExample = () => {
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.out" } });

    // Create a timeline with sequential animations
    tl.from(box1Ref.current, { x: 100, opacity: 1 })
      .from(box2Ref.current, { x: 100, opacity: 1 }, "-=0.5")  // "-=0.5" means this animation overlaps the previous one by 0.5s
      .from(box3Ref.current, { x: 100, opacity: 1 });

    // You can chain more animations to the timeline as needed
  }, []);

  return (
    <div>
      <div ref={box1Ref} style={boxStyle}>Box 1</div>
      <div ref={box2Ref} style={boxStyle}>Box 2</div>
      <div ref={box3Ref} style={boxStyle}>Box 3</div>
    </div>
  );
};

const boxStyle = {
  width: '100px',
  height: '100px',
  backgroundColor: 'blue',
  margin: '10px',
  opacity: 0,
};

export default GsapTimelineExample;
