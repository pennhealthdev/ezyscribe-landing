'use client';

import ReactLenis from "lenis/react";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';





export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const lenisRef = useRef<HTMLDivElement>(null);
useEffect(() => {
  function update(time:any) {
    // @ts-ignore
    lenisRef.current?.lenis?.raf(time * 1000)
  }

  gsap.ticker.add(update)

  return () => gsap.ticker.remove(update)
}, []);

// if (navigation.addEventListener) {
//   navigation.addeventListner("navigate", (event)=> {
//     if(!event.destination.url.includes(document.location.origin)){
//       return;
//     }
//     event.intercept({
//       handler: async () => {
//         const response = await fetch(event.destination.url);
//         const text = await response.text();
        
//         const transition = document .startViewTransition(()=>{
//           const body = text.match(/<body[^>]*>([\s\D]*)<\/body>/i)[1];
//           document.body.innerHTML = body;

//           const title = text.match(/<title[^>]*>(*?)<\/title>/i)[1];
//           document.title = title;
//         });

//         transition.ready.then(()=>{
//           window.scrollTo(0,0);
//         });
//         scroll: "manual",
//       }
//     })
//   })
// }

  return (
    <ReactLenis
      root
      options={{
        duration: 2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        touchMultiplier: 2,
        autoRaf: true,
        smoothWheel: true
      }}
    >
      {children}
    </ReactLenis>
  );
}