'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const SHOWCASE_IMAGES = [
  {
    url: '/authpage.png',
    focus: { x: '50%', y: '50%', scale: 1 }, // Default view
  },
  {
    url: '/providerDash.png',
    focus: { x: '50%', y: '50%', scale: 1 }, 
  },
  {
    url: '/providerDash.png',
    focus: { x: '150%', y: '-50%', scale: 3 }, 
  },
  {
    url: '/taskupdated.png',
    focus: { x: '50%', y: '-50%', scale: 3 }, 
  },
  {
    url: '/taskupdated.png',
    focus: { x: '50%', y: '50%', scale: 1 }, 
  },
];

const FEATURES = [
  {
    title: 'Intuitive Dashboard',
    description: 'Experience a clean and modern interface designed for maximum productivity. Our dashboard puts everything you need at your fingertips.',
  },
  {
    title: 'Real-time Analytics',
    description: 'Track your performance with comprehensive analytics that update in real-time. Make data-driven decisions with confidence.',
  },
  {
    title: 'Smart Automation',
    description: 'Automate repetitive tasks and workflows to save time and reduce errors. Let the system work for you.',
  },
  {
    title: 'Seamless Integration',
    description: 'Connect with your favorite tools and services effortlessly. Our platform works harmoniously with your existing workflow.',
  },
  {
    title: 'Advanced Security',
    description: 'Rest easy knowing your data is protected by enterprise-grade security features and regular updates.',
  },
];

export function TabletShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const tabletRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Pin the tablet section
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: tabletRef.current,
        pinSpacing: false,
      });

      // Animate features
      FEATURES.forEach((_, index) => {
        const featureElement = `.feature-${index}`;
        
        gsap.from(featureElement, {
          opacity: 0,
          y: 100,
          duration: 0.1,
          scrollTrigger: {
            trigger: featureElement,
            start: 'top bottom',
            end: 'top top',
            toggleActions: 'play reverse play reverse',
            // markers: true,
          },
        });
      });

      // Animate tablet images with zoom effects
      SHOWCASE_IMAGES.forEach((image, index) => {
        const imageWrapper = `.showcase-image-${index}`;
        const imageElement = `.showcase-image-${index} .dashboard-image`;
        
        // Initial state
        gsap.set(imageWrapper, { opacity: 0 });
        gsap.set(imageElement, {
          scale: 1,
          xPercent: 0,
          yPercent: 0,
        });

        // Create timeline for each image
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: `.feature-${index}`,
            start: 'bottom bottom',
            end: 'top top',
            toggleActions: 'play reverse play reverse',
            // markers: true,
          },
        });

        tl.to(imageWrapper, {
          opacity: 1,
          duration: 0.4,
        })
        .to(imageElement, {
          scale: image.focus.scale,
          xPercent: (image.focus.x === '50%' ? 0 : (parseFloat(image.focus.x) - 50) * -1),
          yPercent: (image.focus.y === '50%' ? 0 : (parseFloat(image.focus.y) - 50) * -1),
          duration: 1.2,
          ease: 'power2.inOut',
        }, '-=0.2');
      });

      // Fade out the current section and fade in the next section
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'bottom bottom',
        end: 'bottom top',
        onEnter: () => {
          gsap.to(sectionRef.current, { opacity: 0, duration: 0.5 });
        },
        onLeaveBack: () => {
          gsap.to(sectionRef.current, { opacity: 1, duration: 0.5 });
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-muted"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-32">
          {/* Content Side */}
          <div ref={contentRef} className="space-y-96">
            {FEATURES.map((feature, index) => (
              <div
                key={index}
                className={`feature-${index} space-y-4 mt-20`}
              >
                <h3 className="text-2xl font-semibold">
                  {feature.title}
                </h3>
                <p className="text-lg text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Tablet Side */}
          <div ref={tabletRef} className="sticky top-0">
            <div className="tablet-frame relative ipad">
              <div className="relative w-full h-full bg-black rounded-lg overflow-hidden">
                {SHOWCASE_IMAGES.map((image, index) => (
                  <div
                    key={index}
                    className={`showcase-image-${index} absolute inset-0 opacity-0`}
                  >
                    <div className="dashboard-image relative w-full h-full transition-transform duration-1000">
                      <Image
                        src={image.url}
                        alt={`Dashboard View ${index + 1}`}
                        fill
                        className="object-cover rounded-lg"
                        sizes="(max-width: 800px) 100vw, 800px"
                        priority={index === 0}
                      />
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
