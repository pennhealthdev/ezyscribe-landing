'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const SHOWCASE_ITEMS = [
  {
    title: 'Strategy & Vision',
    description: 'We craft digital strategies that align with your business goals, creating a roadmap for success in the digital landscape.',
    image: '/authpage.png',
    focus: { x: 60, y: 40, scale: 1 },
    overlay: {
      type: 'text',
      content: '01 Strategy',
      position: 'bottom-right',
    },
  },
  {
    title: 'Design & Innovation',
    description: 'Our design process combines aesthetics with functionality, creating immersive digital experiences that captivate and convert.',
    image: '/providerDash.png',
    focus: { x: 50, y: 50, scale: 1 },
    overlay: {
      type: 'stats',
      content: '200+ Projects Delivered',
      position: 'top-left',
    },
  },
  {
    title: 'Development & Technology',
    description: 'We build robust, scalable solutions using cutting-edge technologies that drive your digital transformation forward.',
    image: '/providerDash.png',
    focus: { x: 100, y: 0, scale: 3 },
    overlay: {
      type: 'custom',
      content: <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-primary rounded-full" />
        <span>Live Development</span>
      </div>,
      position: 'bottom-left',
    },
  },
  {
    title: 'Analytics & Growth',
    description: 'Transform data into insights with our advanced analytics solutions, helping you make informed decisions for sustainable growth.',
    image: '/taskupdated.png',
    focus: { x: 50, y: 0, scale: 3 },
    overlay: {
      type: 'metric',
      content: '+150% Growth',
      position: 'center',
    },
  },
];

export function TabletShowcaseTwo() {
  const sectionRef2 = useRef<HTMLDivElement>(null);

  // useGSAP(()=>{

    
   
  // });

  return (
    <section
      ref={sectionRef2}
      className="relative w-full mt-[40rem]"
    >
      <div className="sticky-container h-screen flex items-center">
        <div className="w-full">
          <div className="max-w-[90rem] mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.5fr] gap-12 lg:gap-24">
              {/* Content Side */}
              <div className="relative z-10">
                <h2 className="text-5xl lg:text-6xl font-bold mb-16 tracking-tight">
                  What We Do
                </h2>
                
                <div className="relative">
                  {SHOWCASE_ITEMS.map((item, index) => (
                    <div
                      key={index}
                      className={`showcase-item showcase-item-${index} absolute top-0 left-0 space-y-6`}
                    >
                      <h3 className="text-3xl font-semibold tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-lg text-muted-foreground max-w-md">
                        {item.description}
                      </p>
                      <div className="h-0.5 w-24 bg-foreground" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Side */}
              <div className="relative aspect-[4/3] ipad ">
                {SHOWCASE_ITEMS.map((item, index) => (
                  <div
                    key={index}
                    className={`showcase-image-wrapper showcase-image-wrapper-${index} absolute  inset-0 rounded-xl overflow-hidden bg-muted`}
                  >
                    {/* Image Container */}
                    <div className={`showcase-image showcase-image-${index} absolute inset-0`}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1280px) 100vw, 50vw"
                        priority={index === 0}
                      />
                    </div>

                    {/* Overlay Container */}
                    <div
                      className={`showcase-overlay showcase-overlay-${index} absolute inset-0 p-6 flex ${
                        item.overlay.position === 'top-left' ? 'items-start justify-start' :
                        item.overlay.position === 'top-right' ? 'items-start justify-end' :
                        item.overlay.position === 'bottom-left' ? 'items-end justify-start' :
                        item.overlay.position === 'bottom-right' ? 'items-end justify-end' :
                        'items-center justify-center'
                      }`}
                    >
                      <div className="bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                        {typeof item.overlay.content === 'string' 
                          ? item.overlay.content 
                          : item.overlay.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}