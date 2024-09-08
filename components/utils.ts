import sync, { cancelSync } from "framesync";
import { useEffect } from "react";
import { createExpoIn, reversed } from "@popmotion/easing";

import image1 from '../public/assets/giphy.webp'
import image2 from '@/public/assets/image2.jpeg'
import image3 from '@/public/assets/image3.jpeg'
import image4 from '@/public/assets/image4.jpeg'
import image5 from '@/public/assets/image5.jpeg'
import image6 from '@/public/assets/image6.jpeg'

import image7 from '@/public/assets/image7.jpeg'
import image8 from '@/public/assets/image8.jpeg'
import image9 from '@/public/assets/image9.jpeg'
import image10 from '@/public/assets/image10.jpeg'
import image11 from '@/public/assets/image11.jpeg'
import image12 from '@/public/assets/image12.jpeg'
import image13 from '@/public/assets/image13.jpeg'
import image14 from '@/public/assets/image14.jpeg'
import image15 from '@/public/assets/image15.jpeg'

// Version of Greensock's Quad ease out
export const powerOut4 = reversed(createExpoIn(4));

// Hook to use an animation loop
export const useAnimationLoop = (callback: any) => {
  useEffect(() => {
    sync.update(callback, true);
    return () => cancelSync.update(callback);
  }, [callback]);
};

// Center images using transforms
export const center = (_: any, generated: string) =>
  `translate(-50%, -50%) ${generated}`;

// Emulate slightly different image ratios by randomly generating size
const generateNumber = (base: any, range: any) => {
  return base - range / 2 + Math.round(Math.random() * range);
};
// export const generateSize = () => ({
//   height: generateNumber(150, 70),
//   width: generateNumber(300, 50)
// });
export const generateSize = () => ({
  height: 150,
  width: 280
});

// Instead of using images just use color placeholders.
const placeholderColors: Set<any> = new Set();
const images = [image1, image2, image3, image1, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15];
for (let i = 0; i < 6; i++) {
  placeholderColors.add(images[i]);
}

export const colors = Array.from(placeholderColors);
