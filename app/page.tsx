"use client"
import { CursorGlass } from "@/components/cursor";
import { HeroSection } from "@/components/hero-section";
import { links, NavigationMain } from "@/components/navigationMain";
// import { NavigationMenuMenu } from "@/components/nav-menu";
import { TabletShowcase } from "@/components/tablet-showcase";
import { TabletShowcaseTwo } from "@/components/tablet-showcase2";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { TransitionLink } from "@/components/utils/TransitionLink";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis, { LenisRef } from "lenis/react";
import { ArrowDown, ArrowRight, ArrowRightCircle, BrainCircuit, HandCoins, Icon, MonitorSmartphone, Play, PlayCircle, ShieldCheck } from "lucide-react";
import { DynamicIcon } from "lucide-react/dynamic";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay"
import { Custombutton } from "@/components/custombutton";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Video } from "@/components/video";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InputForm } from "@/components/ContactForm";

gsap.registerPlugin(ScrollTrigger);

const SHOWCASE_ITEMS = [
  {
    title: 'Log into our platform quickly and effortlessly',
    description: 'Getting started with Ezyscribe is a breeze. Our technical team will provide you with complete support, ensuring the platform is set up quickly and effortlessly',
    image: '/authpage.png',
    focus: { x: 0, y: 40, scale: 1 },
    overlay: {
      type: 'text',
      content: '01 Strategy',
      position: 'bottom-right',
    },
    keepText: false, // Indicates the text should change
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock">
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>,
  },
  {
    title: 'Record consultation and submit for AI processing',
    description: 'Simply press the record button, and Ezyscribe will start capturing the audio. Once you stop recording, the file is automatically uploaded for AI processing.',
    image: '/ezyscribedrk1.webp',
    focus: { x: 50, y: 50, scale: 1 },
    overlay: {
      type: 'stats',
      content: '200+ Projects Delivered',
      position: 'top-left',
    },
    keepText: false, // Indicates the text should change
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mic">
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  },
  {
    title: 'If requested our scribe reviews the note and uploads it to EHR.',
    description: 'After submission, our assigned scribe takes over. They review and edit the data for accuracy, ensuring it’s seamlessly integrated into your EHR system within the specified turnaround time (TAT).',
    image: '/ezyscribedrk1.svg',
    focus: { x: 87, y: 13, scale: 2.5 },
    overlay: {
      type: 'custom',
      content: <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-primary rounded-full" />
        <span>Live Development</span>
      </div>,
      position: 'bottom-left',
    },
    keepText: true, // Indicates the text should be reused from the previous item
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pen">
      <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
    </svg>
  },
  {
    title: 'Receive ongoing support as data is processed and uploaded to HER',
    description: 'You’ll receive real-time updates as your documentation is processed and uploaded. Our team is always on hand to provide ongoing support and keep you informed every step of the way.',
    image: '/ezyscribedrk2.svg',
    focus: { x: 45, y: 27, scale: 2 },
    overlay: {
      type: 'metric',
      content: '+150% Growth',
      position: 'center',
    },
    keepText: false, // Indicates the text should change
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  },
];

const LOGO_SLIDER = [
  {
    image: '/Logos/1.png',
  },
  {
    image: '/Logos/2.png',
  },
  {
    image: '/Logos/3.png',
  },
  {
    image: '/Logos/4.png',
  },
  {
    image: '/Logos/5.png',
  },
  {
    image: '/Logos/6.png',
  },
  {
    image: '/Logos/7.png',
  },
  {
    image: '/Logos/8.png',
  },
  {
    image: '/Logos/9.png',
  },
  {
    image: '/Logos/10.png',
  },
  {
    image: '/Logos/12.png',
  },
  {
    image: '/Logos/13.png',
  },
  {
    image: '/Logos/14.png',
  },
  {
    image: '/Logos/15.png',
  },

]


const FAQ_ITEMS = [
  {
    name: 'Dr. Alexander Blackwell',
    designation: 'MD',
    description: '"EzyScribe really allows me to easily record a patient encounter without worrying about missing important details. The AI-powered documentation is fast and accurate, saving my valuable time. With EzyScribe, I can focus more on patient care instead of paperwork as it has truly simplifies my workflow and reduced my administrative burden”.',
    image: '',
  },
  {
    name: 'Dr. Nathaniel Pierce',
    designation: '',
    description: '“The scribe support provided by EzyScribe really an add on since I can always ensure that documentation is accurate”.',
    image: '',
  },
  {
    name: '',
    designation: '',
    description: 'EzyScribe&apos;s scribe service is a lifesaver, documenting every detail precisely so I can concentrate on patient care.',
    image: '',
  },
]
export default function Home() {

  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  )
  const plugin2 = useRef(
    Autoplay({ delay: 1000, stopOnInteraction: false })
  )

  useEffect(() => {
    const scrollTriggerSettings = {
      trigger: ".main",
      start: "top 25%",
      toggleActions: "play reverse play reverse"

    };

    const leftXValues = [-100, -100, -100];
    const rightXValues = [100, 100, 100];
    const leftRotationValues = [-30, -20, -35];
    const rightRotationValues = [30, 20, 35];
    const yValues = [100, -150, -400];

    gsap.utils.toArray(".row").forEach((row: any, index: any) => {
      const cardLeft = row.querySelector(".card-left");
      const cardRight = row.querySelector(".card-right");

      // gsap.to(cardLeft, {
      //   x: leftXValues[index],
      //   stagger: 0.2,
      //   scrollTrigger: {
      //     trigger: ".main",
      //     start: "top center",
      //     end: "150% bottom",
      //     scrub: true,
      //     onUpdate: (self) => {
      //       const { progress } = self;
      //       const leftTransform = `
      //         translateX(${leftXValues[index]}px)
      //         translateY(${yValues[index]}px)
      //         rotate(${leftRotationValues[index]}deg)
      //       `;
      //       const rightTransform = `
      //         translateX(${rightXValues[index]}px)
      //         translateY(${yValues[index]}px)
      //         rotate(${rightRotationValues[index]}deg)
      //       `;
      //       cardLeft.style.transform = leftTransform;
      //       cardRight.style.transform = rightTransform;
      //     }
      //   }
      // })



    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
    }

  }, []);

  const genetateRows = () => {
    const rows = [];
    for (let i = 1; i <= 2; i++) {
      rows.push(
        <div className="row" key={i}>
          <div className="card card-left">
            <Image src={`/img-${2 * i - 1}.jpg`} alt="" fill={true} />
          </div>
          <div className="card card-right">
            <Image src={`/img-${2 * i}.jpg`} alt="" fill={true} />

          </div>
        </div>
      )
    }
    return rows;
  }

  const lenisRef = useRef<LenisRef>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const sectionQuoteRef = useRef<HTMLDivElement>(null);
  const sectionRef2 = useRef<HTMLDivElement>(null);
  const cta = useRef<HTMLDivElement>(null);


  // useEffect(() => {
  //   function update(time: any) {
  //     // @ts-ignore
  //     lenisRef.current?.lenis?.raf(time * 1000)
  //   }

  //   gsap.ticker.add(update)

  //   return () => gsap.ticker.remove(update)
  // }, [])

  // const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const quote = quoteRef.current;
    const words = quote!.innerText.split(' ');
    quote!.innerHTML = words.map(word => `<span class="word">${word}</span>`).join(' ');

    gsap.fromTo('.word', {
      opacity: 0.5
    },
      {
        opacity: 1,
        stagger: 1,
        scrollTrigger: {
          trigger: sectionQuoteRef.current,
          start: 'top +=30%',
          end: '+=140% +=30%',
          scrub: true,
          // markers: true,
          pin: true,
        }
      });

    // Pin the entire section
    ScrollTrigger.create({
      trigger: sectionRef2.current,
      start: 'top top',
      end: '+=400%',
      pin: '.sticky-container',
      scrub: true,
      //markers: true,
      pinSpacing: true,
    });

    // Hide all items initially except the first one
    gsap.set('.showcase-item', { opacity: 0, y: 20 });
    gsap.set('.showcase-image-wrapper', { opacity: 0 });
    gsap.set('.showcase-overlay', { opacity: 0, y: 20 });
    gsap.set('.showcase-item-0', { opacity: 1, y: 0 });
    gsap.set('.showcase-image-wrapper-0', { opacity: 1 });
    gsap.set('.showcase-overlay-0', { opacity: 1, y: 0 });

    // Set initial image position for first slide
    gsap.set('.showcase-image-0', {
      scale: 1,
      xPercent: 0,
      yPercent: 0,
    });

    // Create a main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef2.current,
        start: 'top top',
        end: '+=400%',
        scrub: 0.5,
      },
    });

    // Add animations for each transition
    SHOWCASE_ITEMS.forEach((item, index) => {
      if (index === SHOWCASE_ITEMS.length - 1) return;

      const duration = 1 / (SHOWCASE_ITEMS.length - 1);
      const position = index * duration;

      // Fade out current
      tl.to([
        `.showcase-item-${index}`,
        `.showcase-image-wrapper-${index}`,
        `.showcase-overlay-${index}`,
      ], {
        opacity: 0,
        duration: duration * 0.4,
      }, position);

      // Move out current text and overlay
      tl.to([`.showcase-item-${index}`, `.showcase-overlay-${index}`], {
        y: -20,
        duration: duration * 0.4,
      }, position);

      // Reset current image zoom
      tl.to(`.showcase-image-${index}`, {
        scale: 1,
        xPercent: 0,
        yPercent: 0,
        duration: duration * 0.4,
      }, position);

      // Fade in next
      tl.to([
        `.showcase-item-${index + 1}`,
        `.showcase-image-wrapper-${index + 1}`,
        `.showcase-overlay-${index + 1}`,
      ], {
        opacity: 1,
        duration: duration * 0.4,
      }, position + duration * 0.2);

      // Move in next text and overlay
      tl.fromTo(
        [`.showcase-item-${index + 1}`, `.showcase-overlay-${index + 1}`],
        { y: 20 },
        { y: 0, duration: duration * 0.4 },
        position + duration * 0.2
      );

      // Zoom and position next image
      tl.to(`.showcase-image-${index + 1}`, {
        scale: SHOWCASE_ITEMS[index + 1].focus.scale,
        xPercent: -(SHOWCASE_ITEMS[index + 1].focus.x - 50) * 2,
        yPercent: -(SHOWCASE_ITEMS[index + 1].focus.y - 50) * 2,
        duration: duration * 0.6,
      }, position + duration * 0.2);
    });

    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".main",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
        //markers: true,
        fastScrollEnd: true
      }
    });

    const cardLeftElements = gsap.utils.toArray('.card-left');
    const cardRightElements = gsap.utils.toArray('.card-right');
    const staggeredElements = [];

    for (let i = 0; i < Math.max(cardLeftElements.length, cardRightElements.length); i++) {
      if (cardLeftElements[i]) staggeredElements.push(cardLeftElements[i]);
      if (cardRightElements[i]) staggeredElements.push(cardRightElements[i]);
    }

    tl2.addLabel('start')
      .from(staggeredElements, {
        x: (index) => index % 2 === 0 ? '-100%' : '100%',
        rotation: (index) => index % 2 === 0 ? -45 : 45,
        opacity: 0,
        duration: 0.5, // Faster animation
        stagger: 0.2 // Stagger the animation
      });


    let tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: cta.current,
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
        //markers: true,
        fastScrollEnd: true
      }
    });

    tl3.fromTo(cta.current, {
      opacity: 0,
      y: 100,
      scale: 0.5
    }, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.5, // Faster animation
      animation: "spring(1, 80, 10, 10)"
    });

    let tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: "#how-we-work",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
        //markers: true,
        fastScrollEnd: true
      }
    });

    const workCardLeftElements = gsap.utils.toArray('.work-left');
    const workCardRightElements = gsap.utils.toArray('.work-right');
    const workstaggeredElements = [];

    for (let i = 0; i < Math.max(workCardLeftElements.length, workCardRightElements.length); i++) {
      if (workCardLeftElements[i]) workstaggeredElements.push(workCardLeftElements[i]);
      if (workCardRightElements[i]) workstaggeredElements.push(workCardRightElements[i]);
    }

    tl4.addLabel('start')
      .from(workstaggeredElements, {
        x: (index) => index % 2 === 0 ? '-100%' : '100%',
        // rotation: (index) => index % 2 === 0 ? -45 : 45,
        opacity: 0,
        duration: 0.7, // Faster animation
        stagger: 0.2 // Stagger the animation
      });



  },);

  const [src, setSrc] = useState('/testimonial1.jpg');



  return (
    <>
      {/* <ReactLenis options={{ autoRaf: false }} ref={lenisRef!} root> */}
      {/* <div className="absolute w-full min-h-fit h-[150%] pointer-events-none z-[-1]">
        <Image src='/test-bg.jpg' fill alt="" className="h-full" objectFit="cover" objectPosition="top center" quality={100}/>
      </div> */}
      {/* <CursorGlass /> */}
      <NavigationMain />
      <main className="relative">
        <HeroSection />
        <section className="relative flex flex-col bg-[#090909] mt-10">
          <div className="bg-gradient-to-r from-[#090909] to-white/0 z-10 w-[40%] h-full pointer-events-none absolute hidden sm:block sm:left-20 top-0"></div>
          <div className="bg-gradient-to-r from-[#090909] to-white/0 z-10 w-[40%] h-full pointer-events-none absolute hidden sm:block sm:left-20 top-0"></div>
          <div className="bg-gradient-to-r from-[#090909] to-white/0 z-10 w-[40%] h-full pointer-events-none absolute hidden sm:block sm:left-20 top-0"></div>
          <div className="bg-gradient-to-r from-[#090909] to-white/0 z-10 w-[40%] h-full pointer-events-none absolute hidden sm:block sm:left-20 top-0"></div>
          <div className="bg-gradient-to-l from-[#090909] to-white/0 z-10 w-[15%] h-full pointer-events-none absolute hidden sm:block sm:right-20 top-0"></div>
          <div className="bg-gradient-to-l from-[#090909] to-white/0 z-10 w-[15%] h-full pointer-events-none absolute hidden sm:block sm:right-20 top-0"></div>
          <div className="bg-[#1B1626] px-5 py-2 max-w-fit rounded-full text-background font-normal sm:absolute left-28 top-0 z-50 mb-10">
            Top EHR Platforms
          </div>
          {/* <h2 className="text-background mb-5 absolute left-20 top-2 z-50">Top EHR Platforms</h2> */}
          <Carousel
            plugins={[plugin2.current]}
            className="w-full sm:max-w-6xl"
          >
            <CarouselContent className="-ml-1">
              {LOGO_SLIDER.map((img, index) => (
                <CarouselItem key={index} className="px-2 pl-10 basis-1/2 lg:basis-2/12 sm:aspect-square sm:gap-10">
                  {/* <div className="p-1"> */}
                  <Card className="bg-transparent border-none">
                    <CardContent className="flex items-center justify-center sm:p-6 relative bg-transparent">
                      {/* <span className="text-2xl font-semibold">{index + 1}</span> */}
                      <Image src={img.image} alt="" fill objectFit="contain" className="" />
                    </CardContent>
                  </Card>
                  {/* </div> */}
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselPrevious /> */}
            {/* <CarouselNext /> */}
          </Carousel>

          
        </section>
        <section className="aboutus2 py-20 p-5 font-medium mt-10 sm:mt-0" id="about">
          <div className="absolute top-0 left-0   z-10 bg-gradient-to-b from-[#090909] to-white/0 w-full h-[10%] sm:h-[25%]  pointer-events-none "></div>

          <div className="grid sm:grid-cols-2 max-w-6xl gap-20">
            <div className="flex items-center h-full">
              <div className=" ">
                {/* <Image alt="" src="/EzyScribe.png" width={70} height={70} quality={100} objectFit="contain" className="" /> */}
                <div className="bg-[#1B1626] self-start text-left px-5 py-2 max-w-fit rounded-full text-background font-normal z-50">
                  About Us
                </div>
                <div className="space-y-10 mt-10">
                  <div className=" flex justify-between gap-2">
                    <ArrowRight className="w-28 text-background p-1 h-6.5 bg-[#1B1626] rounded-full" />
                    <p className="text-background text-base font-normal">
                      Pennhealth Informatics LLC has been dedicated to supporting healthcare providers across all specialties with expert clinical documentation solutions since 2017. Our in-house AI platform, EzyScribe, is a cutting-edge ambient AI scribe that delivers extremely accurate medical documentation while integrating seamlessly into your workflow.
                    </p>
                  </div>

                  <div className=" flex justify-between gap-2">
                    <ArrowRight className="w-28 text-background p-1 h-6.5 bg-[#1B1626] rounded-full" />
                    <p className="text-background text-base font-normal">
                      EzyScribe's user-friendly interface, professional assistance, and secure platform enable clinicians to concentrate more on patient care and less on administrative tasks. Whether you're a solo practitioner or part of a large healthcare system, EzyScribe adapts to your needs, ensuring efficiency, precision, and compliance in every encounter. At EzyScribe, we believe that patient care should be prioritized the most.
                    </p>
                  </div>

                </div>
              </div>
            </div>
            <div className=" relative h-[450px] w-full ">

              {/* <h2 className=" mt-10 text-5xl text-transparent bg-gradient-to-br from-background to-[#DDC3A5] inline-block bg-clip-text">
                Why Choose EzyScribe?
              </h2> */}
              <Image
                src='/abtus.jpeg'
                alt={`Dashboard View`}
                fill
                className="object-cover rounded-lg  "
                sizes="(max-width: 3060px) 100vw, 3060px"
                objectPosition="top center"
                quality={100}
              />

              {/* <Image alt="" src="/national-cancer-institute-L8tWZT4CcVQ-unsplash.jpg" fill /> */}
            </div>

          </div>
        </section>
        <section className="aboutus2 py-20 p-5 font-medium" >
          <div className="absolute top-0 left-0  z-10 bg-gradient-to-b from-[#090909] to-white/0 w-full h-[10%] sm:h-[25%]  pointer-events-none "></div>

          <div className="grid sm:grid-cols-2 max-w-6xl gap-20">
            <div className=" relative h-[450px] w-full ">
              <div className="bg-[#1B1626] self-start text-left px-5 py-2 max-w-fit rounded-full text-background font-normal">
                Why Choose EzyScribe?
              </div>
              {/* <h2 className=" mt-10 text-5xl text-transparent bg-gradient-to-br from-background to-[#DDC3A5] inline-block bg-clip-text">
                Why Choose EzyScribe?
              </h2> */}

             <div className=" relative h-full w-full mt-5">
             <Image
                src='/abtus.jpeg'
                alt={`Dashboard View`}
                fill
                className="object-cover rounded-lg  "
                sizes="(max-width: 3060px) 100vw, 3060px"
                objectPosition="top center"
                quality={100}
              />
             </div>
              
              {/* <Image alt="" src="/national-cancer-institute-L8tWZT4CcVQ-unsplash.jpg" fill /> */}
            </div>
            <div className="flex items-center h-full">
              <div className=" ">
                <Image alt="" src="/EzyScribe.png" width={70} height={70} quality={100} objectFit="contain" className="justify-self-end" />
                <div className="space-y-10 mt-10">
                  <div className=" flex justify-between gap-2">
                    <ArrowRight className="w-28 text-background p-1 h-6.5 bg-[#1B1626] rounded-full" />
                    <p className="text-background text-base font-normal">
                      Ezyscribe by Pennhealth Informatics is an advanced ambient AI medical scribe designed to deliver highly accurate clinical documentation that fits effortlessly into your workflow. More than just another documentation tool, it’s your trusted partner in care. Built with advanced AI technology, EzyScribe adapts easily to your practice, offering unparalleled accuracy, amiable design, and robust security.
                    </p>
                  </div>
                  <div className=" flex justify-between gap-2">
                    <ArrowRight className="w-28 text-background p-1 h-6.5 bg-[#1B1626] rounded-full" />
                    <p className="text-background text-base font-normal">Whether you're a solo practitioner juggling multiple responsibilities or part of a large healthcare system looking for efficiency, EzyScribe works seamlessly to fit your demands. Our user-friendly interface and top-tier security allow you to focus on what is most important—your patients. With dedicated support always available, our professionals are here to ensure your success. So let’s redefine the way you document care, together.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section ref={sectionQuoteRef} className=" h-[40vh] py-20 aboutus p-10">
          <div id="quote" ref={quoteRef} className="text-3xl sm:text-5xl max-w-6xl mx-auto font-medium text-background">
            Built with advanced AI technology, EzyScribe adapts easily to your practice, offering unparalleled accuracy, amiable design, and robust security.

          </div>
        </section>

        <section id="how-we-work" className="overflow-hidden">
          <div className="max-w-6xl w-full pb-20 px-5 ">
            <div className="bg-[#1B1626] self-start text-left px-5 py-2 max-w-fit rounded-full text-background font-normal">
              How does Ezyscribe work?
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1.5fr,3fr] gap-5 mt-5">
              <div
                className=" w-full h-96 sm:h-full rounded-2xl flex flex-col justify-end relative overflow-hidden p-5 bg-[#1a1a1a] bg-[url('/Ellipse 4078.png')] how-card-1 work-left"
                onMouseEnter={() => setSrc('/Voice-Text-Bold.gif')}
                onMouseLeave={() => setSrc('/testimonial1.jpg')}
              >
                <Image
                  id="animatedGif"
                  src='/Voice-Text-Bold.gif'
                  fill
                  objectFit="cover"
                  objectPosition="center"
                  alt=""
                  className="z-0 -mt-24 p-5"
                  quality={100}
                />

                <h5 className="text-base font-medium text-background z-10">Simply initiate recording.</h5>
                <p className="text-sm font-thin mt-2 text-background z-10">
                  EzyScribe will start listening to your patient encounter with a single click on Record. Our advanced speech recognition technology will immediately generate the transcript.
                </p>
              </div>

              <div className="bg-blue-900 p-5 relative overflow-hidden rounded-2xl bg-opacity-40 min-h-96 justify-end text-left flex flex-col bg-[url('/ellipse2.png')] bg-cover bg-no-repeat bg-left work-right">
                <Image
                  id="animatedGif"
                  src='/Soap-note.gif'
                  fill
                  objectFit="cover"
                  objectPosition="center"
                  alt=""
                  className="z-0 -mt-2 p-5"
                  quality={100}
                />
                <h5 className="text-base font-medium text-background z-10">Ambient AI technology.</h5>
                <p className="text-sm font-thin mt-2 text-background z-10">
                  Our cutting-edge ambient AI technology will quickly process the recorded audio to prepare a summarized report in customized format.
                </p>
              </div>


            </div>
            <div className="grid grid-cols-1 md:grid-cols-[3fr,1.5fr] gap-5 mt-5">
              <div
                className=" w-full h-96 sm:h-full rounded-2xl flex flex-col justify-end relative overflow-hidden p-5 bg-[#1a1a1a] bg-[url('/Ellipse4078.png')] bg-left-top work-left"
                onMouseEnter={() => setSrc('/Voice-Text-Bold.gif')}
                onMouseLeave={() => setSrc('/testimonial1.jpg')}
              >
                <Image
                  id="animatedGif"
                  src='/Title-new.gif'
                  fill
                  objectFit="contain"
                  objectPosition="center"
                  alt=""
                  className="z-0 -mt-10 p-5"
                  quality={100}
                />

                <h5 className="text-base font-medium text-background z-10">Human scribe support.</h5>
                <p className="text-sm font-thin mt-2 text-background z-10">
                  A dedicated scribe can be assigned on request to review the reports prepared by AI and manually paste the notes into EHR within turnaround time (TAT)
                </p>
              </div>

              <div className="bg-blue-900 p-5 relative overflow-hidden rounded-2xl bg-opacity-40 min-h-96 justify-end text-left flex flex-col bg-[url('/ellipse2.png')] bg-cover bg-no-repeat bg-left work-right">
                <Image
                  id="animatedGif"
                  src='/Final2.gif'
                  fill
                  objectFit="cover"
                  objectPosition="center"
                  alt=""
                  className="z-0 -mt-20 p-5"
                  quality={100}
                />
                <h5 className="text-base font-medium text-background z-10">Live status update</h5>
                <p className="text-sm font-thin mt-2 text-background z-10">
                  You will receive real-time updates as reports are prepared and uploaded into EHR and completed reports can be accessed for review from your dashboard.  Data will be stored securely in our cloud-based server and automatically deleted after 30 days.
                </p>
              </div>


            </div>
          </div>
        </section>

        {/* <TabletShowcaseTwo /> */}

        {/* <section
          ref={sectionRef2}
          className="relative w-full "
          id="services"
        >
          <div className="sticky-container h-screen flex items-center">
            <div className="w-full">
              <div className=" mx-auto max-w-6xl px-5">
                <div className=" relative grid grid-cols-1 lg:grid-cols-[2fr,2fr] gap-12 lg:gap-24 bg-[#ffffff] rounded-3xl h-[80vh] p-14 overflow-hidden tab-section-inner">
                  <svg width="0" height="0" aria-hidden="true" className="absolute left-0 top-0">
                    <filter id="dither" primitiveUnits="objectBoundingBox">
                      <feTurbulence type="fractalNoise" baseFrequency="4.71"></feTurbulence>
                      <feDisplacementMap in="SourceGraphic" scale=".52"></feDisplacementMap>
                      <feBlend in2="SourceGraphic"></feBlend>
                    </filter>
                  </svg>
                  <div className=" absolute ipad-big-2 -translate-x-40 translate-y-20 z-10">
                    {SHOWCASE_ITEMS.map((item, index) => (
                      <div
                        key={index}
                        className={`showcase-image-wrapper showcase-image-wrapper-${index} absolute  inset-0 rounded-lg overflow-hidden`}
                      >
                        <div className={`showcase-image showcase-image-${index} absolute inset-0`}>
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 100%) 100%, 100%"
                            priority={index === 0}
                            quality={100}
                          />
                        </div>

                        <div
                          className={`showcase-overlay showcase-overlay-${index} absolute inset-0 p-6 flex ${item.overlay.position === 'top-left' ? 'items-start justify-start' :
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
                  <div></div>

                  <div className="relative z-10 w-full items-center pt-5">
                    <h2 className="text-5xl font-medium mb-16 text-background">
                      How does Ezyscribe work?
                    </h2>

                    <div className="relative">
                      {SHOWCASE_ITEMS.map((item, index) => (
                        <div
                          key={index}
                          className={`showcase-item showcase-item-${index} absolute top-0 left-0 space-y-6`}
                        >
                          <div className="flex  gap-2">
                            <p className="w-6 text-background p-1.5 h-6 translate-y-1 bg-blue-100 text-black items-center text-sm justify-center flex rounded-full" >
                              {item.icon && item.icon}
                            </p>

                            <h3 className="text-2xl font-normal text-background">
                              {item.title}
                            </h3>
                          </div>
                          <p className="text-base font-normal text-accent/80 max-w-md">
                            {item.description}
                          </p>
                          <div className="hr-new-style" />
                        </div>
                      ))}
                    </div>
                  </div>


                  <div className="absolute z-[-1] w-[30%] h-60 top-[5%] right-[10%]">
                    <div className="relative w-full h-full">
                      <div className="absolute bottom-0 left-0  z-10 bg-gradient-to-t from-[#090909] to-white/0 w-full h-[100%]  pointer-events-none"></div>
                      <div className="absolute bottom-0 left-0  z-10 bg-gradient-to-t from-[#090909] to-white/0 w-full h-[100%]  pointer-events-none"></div>
                      <div className="absolute bottom-0 left-0  z-10 bg-gradient-to-t from-[#090909] to-white/0 w-full h-[100%]  pointer-events-none"></div>
                      <Image src='/Group 1171275294.png' alt="" fill objectFit="ccontain" quality={100} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}



        {/* <TabletShowcase /> */}
        {/* <section className="hero">
          <TransitionLink href="/about">About</TransitionLink>
        </section> */}
        <section className="main overflow-hidden py-20 p-5" id="benefits">
          {/* <div className="main-content overflow-hidden">
            <div className="logo">
            </div>
            <div className="copy">
              <div className="line">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="line">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="line">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="btn">
              <button>Lorem</button>
            </div>
          </div> */}
          {/* {genetateRows()} */}
          <div className="bg-[#1B1626] px-5 py-2 max-w-fit  mb-10 ml-[7.5rem]  rounded-full text-background text-left self-start font-normal">
            Benefits of Ezyscribe
          </div>
          <div className="row" >
            <div className="card card-left group hover:bg-red-600 transition-colors duration-700 ease-in-out">
              <h3 className="">AI-Powered Accuracy</h3>
              <p className="text-lg">Ezyscribe’s ambient AI scribe guarantees high accuracy and reliability in medical documentation, making it a trustworthy platform for healthcare providers. Its precision in recording information minimizes errors, leading to fewer denials and facilitating smoother, faster claims processing.</p>
              <div className="absolute bottom-0 right-0 opacity-30 text-background w-52 h-52 z-[-1] filter contrast-50">
                <Image src='/Dart-06.png' alt="" fill objectFit="contain" quality={100} />
              </div>
            </div>
            <div className="card card-right sm:mt-20 hover:bg-blue-600 transition-colors duration-700 ease-in-out">
              <h3 className="">Intuitive Interface</h3>
              <p className="text-lg">With Ezyscribe, physicians have access to an intuitive solution that documents relevant conversation in an accurate and timely manner, with just a microphone-equipped device and a web browser. This empowers them to focus purely on patient care while Ezyscribe handles everything clerical.</p>
              {/* <MonitorSmartphone width={200} height={200} className="absolute bottom-0 right-0 opacity-5 text-background" /> */}
              <div className="absolute bottom-0 right-0 opacity-30 text-background w-52 h-52 z-[-1] filter contrast-50">
                <Image src='/interact-interactive-action-smartphone-touch.svg' alt="" fill objectFit="contain" quality={100} />
              </div>
            </div>
          </div>
          <div className="row" >
            <div className="card card-left sm:-mt-20 -mt-8 hover:bg-purple-600 transition-colors duration-700 ease-in-out">
              <h3 className="">Save Costs</h3>
              <p className="text-lg">Our platform offers a cost-effective solution through optimal capacity utilization, ensuring high standards of accuracy. This enables healthcare providers to streamline their documentation processes, reduce overhead costs, and focus more on patient care.​</p>
              {/* <HandCoins width={200} height={200} className="absolute bottom-0 right-0 opacity-5 text-background" /> */}
              <div className="absolute bottom-0 right-0 opacity-30 text-background w-52 h-52 z-[-1] filter contrast-50">
                <Image src='/043-results.png' alt="" fill objectFit="contain" quality={100} />
              </div>
            </div>
            <div className="card card-right  hover:bg-yellow-600 transition-colors duration-700 ease-in-out">
              <h3 className="">HIPAA Compliant</h3>
              <p className="text-lg">Ezyscribe is fully HIPAA compliant, making it easy for healthcare providers to meet regulatory standards. The software ensures that patient information is securely handled and protected, maintaining confidentiality and trust.</p>
              {/* <ShieldCheck width={200} height={200} className="absolute bottom-0 right-0 opacity-5 text-background" /> */}
              <div className="absolute bottom-0 right-0 opacity-10 text-background w-52 h-52 z-[-1] filter contrast-0">
                <Image src='/hipaa-compliant-seeklogo-2.png' alt="" fill objectFit="contain" quality={100} />
              </div>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-6xl w-full pb-20 px-5">
            <div className="bg-[#1B1626] self-start text-left px-5 py-2 max-w-fit rounded-full text-background font-normal">
              Hear from our clients
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[3fr,1.5fr] gap-5 mt-5">
              <div className="bg-blue-900 p-10 relative  overflow-hidden rounded-2xl bg-opacity-40">
                <svg viewBox="0 0 162 128" aria-hidden="true" className="  w-40 absolute fill-[#090909] rotate-180 -bottom-10 right-10">
                  <path d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z" id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb">
                  </path>
                  <use x="86" href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"></use>
                </svg>
                <h4 className="text-xl font-medium mt-12 text-blue-50">"EzyScribe really allows me to easily record a patient encounter without worrying about missing important details. The AI-powered documentation is fast and accurate, saving my valuable time. With EzyScribe, I can focus more on patient care instead of paperwork as it has truly simplifies my workflow and reduced my administrative burden”.</h4>
                <h5 className="text-lg font-medium mt-10 text-blue-200">Dr. Alexander Blackwell</h5>
                {/* <p className="text-base text-background/60">Physician</p> */}
              </div>
              <div className=" w-full sm:h-full h-96 rounded-2xl bg-center bg-cover flex items-end justify-center relative overflow-hidden">
                <div className=" absolute bottom-0 right-0 left-0 top-0 h-full w-full bg-gradient-to-t z-[1] from-[#090909] to-black/50"></div>
                <Image src='/testimonial1.jpg' fill objectFit="cover" objectPosition="center" alt="" className="z-0" quality={100} />

                <h5 className="text-lg font-medium mt-10 text-background p-5 z-10">100 % of our physicians highly recommend EzyScribe to their colleagues.</h5>

              </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-[1.5fr,3fr] gap-5 mt-5">
              <div className=" w-full sm:h-full h-96 rounded-2xl bg-cover bg-center flex items-end justify-center relative overflow-hidden">
                <div className=" absolute bottom-0 right-0 left-0 top-0 h-full w-full bg-gradient-to-t z-[1] from-[#090909] to-black/50"></div>
                <Image src='/testimonial3.jpg' fill objectFit="cover" objectPosition="center" alt="" className="z-0" />

                <h5 className="text-lg font-medium mt-10 text-background p-5 z-10">100 % of our physicians highly recommend EzyScribe to their colleagues.</h5>
              </div>
              <div className="bg-blue-900 p-10 relative overflow-hidden rounded-2xl bg-opacity-40 min-h-96 justify-center text-left flex flex-col">
                <svg viewBox="0 0 162 128" aria-hidden="true" className="  w-40 absolute fill-[#090909] rotate-180 -bottom-10 right-10">
                  <path d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z" id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb">
                  </path>
                  <use x="86" href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"></use>
                </svg>
                <h4 className="text-xl font-medium mt-12 text-blue-50">“The scribe support provided by EzyScribe really an add on since I can always ensure that documentation is accurate”.</h4>
                <h5 className="text-lg font-medium mt-10 text-blue-200">Dr. Nathaniel Pierce</h5>
              </div>


            </div>

            {/* <Carousel
              plugins={[plugin.current]}
              className="w-full mt-10"
            >
              <CarouselContent className=" w-full hover:cursor-e-resize">
                {FAQ_ITEMS.map((items, index) => (
                  <CarouselItem key={index} className="">
                    <div className="p-1">
                      <Card className="bg-[#1A1A1A] border-none p-10 testimonial-card">
                        <CardContent className="flex items-center justify-center p-6 w-full">
                          <div className={`grid grid-cols-1  ${items.image ? 'lg:grid-cols-[1fr,2fr]' : 'lg:grid-cols-1'} gap-20 mx-auto `}>
                            {items.image &&
                              <div className="relative rounded-3xl overflow-hidden h-96">
                                <Image src={items.image} alt="" fill />
                              </div>
                            }
                            <div className="text-background stroke-background/10 self-center">
                              <svg fill="none" viewBox="0 0 162 128" aria-hidden="true" className="  w-40 absolute">
                                <path d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z" id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb">
                                </path>
                                <use x="86" href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"></use>
                              </svg>
                              <h4 className="text-2xl font-medium mt-12">{items.description}</h4>
                              {items.name && <h5 className="text-xl font-medium mt-10">{items.name}</h5>}
                              {items.designation && <p className="text-base text-background/60">{items.designation}</p>}
                            </div>
                          </div>

                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel> */}
          </div>
        </section>

        <section className="cta my-20 mb-40" ref={cta}>
          <div className="max-w-6xl w-full cta-inner  sm:px-40 p-5 mx-auto bg-[#1A1A1A] sm:h-96 h-[38rem] rounded-3xl grid grid-cols-1 md:grid-cols-[1.5fr,1fr] overflow-hidden relative">
            <div className="text-background self-center">
              <h3 className="text-5xl mb-10">Your Medical AI partner in clinical documentation</h3>
              <Custombutton>
                Learn More
              </Custombutton>
            </div>
            <div className="mt-5 -ml-36 sm:m-0">
              {/* <div className="absolute right-0 "> */}
              <div className=" ipad-big-2 hero-content group sm:absolute -right-36 top-10">
                {/* <ArrowDown className="w-6 h-6 text-muted-foreground" /> */}
                <div className="relative w-full h-full  rounded-lg rounded-b-none overflow-hidden">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 ">


                    <Dialog>
                      <DialogTrigger asChild className="bg-none">
                        <div className="button__holder ">
                          {/* <h2>Hover me &rarr;</h2> */}
                          <button className="plus text-center items-center justify-center flex">
                            <Play className="w-24 h-10 text-background" />
                          </button>
                        </div>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px] md:max-w-6xl">

                        <DialogHeader className="hidden">
                          <DialogTitle>Edit profile</DialogTitle>
                          <DialogDescription>
                            Make changes to your profile here. Click save when you're done.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="">
                          <Video />
                        </div>

                      </DialogContent>
                    </Dialog>



                  </div>
                  {/* <div className="absolute top-0 left-0  z-10 bg-gray-950 w-full h-full bg-opacity-0 group-hover:bg-opacity-30 pointer-events-none "></div> */}
                  {/* <div className="absolute top-0 left-0  z-10 bg-gradient-to-t from-[#00111C] to-white/0 w-full h-full  pointer-events-none "></div> */}

                  <Image
                    src='/ezyscribecom_dashboard_dark.webp'
                    alt={`Dashboard View`}
                    fill
                    className="object-cover rounded-lg rounded-b-none "
                    sizes="(max-width: 3060px) 100vw, 3060px"
                    objectPosition="top center"
                    quality={100}
                  />
                </div>
              </div>
              {/* </div> */}
              {/* <div className="button__holder ">
                <button className="plus text-center items-center justify-center flex">
                  <Play className="w-24 h-10 text-background" />
                </button>
              </div> */}
            </div>
          </div>
        </section>

        <section className="mt-20 p-5" id="faqs">
          <div className="max-w-6xl mx-auto w-full">
            <div className="bg-[#1B1626] self-start text-left px-5 py-2 max-w-fit rounded-full text-background font-normal">
              Frequently asked questions
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <Accordion type="single" collapsible className="w-full text-background mt-5 space-y-5 ">
                <AccordionItem value="item-1">
                  <AccordionTrigger >How do I get started using EzyScribe?  </AccordionTrigger>
                  <AccordionContent>
                    To get started with EzyScribe, simply click here to request a demo. Our team will walk you through the setup and implementation process, making sure your transition to our AI-powered, asynchronous ambient experience platform is smooth and effortless.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How does our AI medical documentation solution work?</AccordionTrigger>
                  <AccordionContent className="text-opacity-70">
                    EzyScribe uses AI-driven ambient technology to record and process clinical encounters. The platform transcribes spoken conversations into structured notes
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>How can our AI assistant improve the quality of your patient care? </AccordionTrigger>
                  <AccordionContent>
                    EzyScribe improves patient care by automating documentation, allowing physicians to focus more on patients. Its AI-powered ambient scribe technology captures accurate clinical notes in real-time, reducing errors and improving care coordination. For added flexibility, in-person scribe support is available to review, edit and then seamlessly upload the completed notes into your EHR system within the specified turnaround time (TAT), ensuring comprehensive, high-quality documentation and enhancing overall patient outcomes and satisfaction.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>How long does it take to set up our AI medical scribe and how easy is it to transition? </AccordionTrigger>
                  <AccordionContent>
                    The setup process is straightforward. Once you request a demo, our team will guide you through implementation, and most users can get started within a few days. The transition is seamless, with minimal disruption to your workflow.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>What specialties can use our AI Scribe? </AccordionTrigger>
                  <AccordionContent>
                    EzyScribe is flexible and customizable, making it suitable for a wide range of medical specialities, including primary care, cardiology, orthopedics, mental health, and more.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible className="w-full text-background mt-5 space-y-5">
                <AccordionItem value="item-6">
                  <AccordionTrigger>Is EzyScribe accessible on all devices?  </AccordionTrigger>
                  <AccordionContent>
                    Yes, EzyScribe is accessible on all devices, including desktops, laptops, tablets, and smartphones. Our platform is web-based and mobile-friendly, allowing you to document clinical encounters seamlessly from anywhere, whether you're in the office or on the go.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                  <AccordionTrigger>Can my templates be loaded into our AI scribe? </AccordionTrigger>
                  <AccordionContent>
                    Yes, your templates can be loaded into EzyScribe. Our system supports the integration of personalized templates, allowing users to tailor documentation workflow to meet their specific needs. Loading your templates will maintain consistency across notes, ensuring your unique formatting and content structure are preserved. This allows for a seamless transition from your existing documentation practices to the EzyScribe platform.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8">
                  <AccordionTrigger>Is it possible to manually edit the AI-generated draft myself through EzyScribe? </AccordionTrigger>
                  <AccordionContent>
                    Yes, you can take EzyScribe as a SaaS (Software as a Service) so that you can record your patient visits, generate AI draft notes and review and upload your notes into EHR.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-9">
                  <AccordionTrigger>Does our AI scribe support multiple languages? </AccordionTrigger>
                  <AccordionContent>
                    We currently support English and Spanish languages however; we are actively working on expanding our language support to include additional languages in the future. Our goal is to ensure that EzyScribe meets the diverse linguistic needs of healthcare providers and their patients.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-10">
                  <AccordionTrigger>What support options are available?</AccordionTrigger>
                  <AccordionContent>
                    We offer 24/7 live chat, email, and phone support. Average response time is under 15 minutes for critical issues.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

          </div>
        </section>

        <footer className="footer p-5 mt-60 py-20 pb-5 m-5 rounded-3xl" id="contact">
          <div className="grid grid-cols-1 md:grid-cols-[1fr,1fr] sm:p-10 p-0 footer-inner">
            <div className="space-y-10 text-background">
              <h3 className="text-5xl font-medium text-background">Join EzyScribe Today</h3>
              <Custombutton>
                Learn More
              </Custombutton>
            </div>
            <div className="sm:w-[95%]" >
              <InputForm />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[1fr,1fr,1fr] gap-5 text-left mx-auto p-10 items-center  footer-navs">
            <div className="relative sm:w-40 h-20 ">
              <Image src="/Ezy Logo.png" alt="" fill objectFit="contain" />
            </div>
            <div className=" sm:flex sm:justify-center w-full space-x-5 justify-start">
              {links.map((item, index) => (
                // <>
                <TransitionLink key={index} href={item.href} >{item.title}</TransitionLink>
                /* <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-background/80 hover:text-foreground transition-colors"
                >
                  {item}
                </a>
                </> */
              ))}
            </div>
            <div className="flex sm:space-x-2 sm:justify-end justify-center space-x-5">
              <Link href='' className="p-1 text-background border border-background/50 rounded-full">
                <FaFacebook />
              </Link>
              <Link href='' className="p-1 text-background border border-background/50 rounded-full">
                <FaInstagram />
              </Link>
              <Link href='' className="p-1 text-background border border-background/50 rounded-full">
                <FaTwitter />
              </Link>
              <Link href='' className="p-1 text-background border border-background/50 rounded-full">
                <FaLinkedin />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[1fr,1fr] mx-auto sm:p-10 pt-5 items-center">
            <div className="relative ">
              <p className="text-background text-base">&copy; 2023 EzyScribe</p>
            </div>

            <div className="sm:flex space-x-2 sm:justify-end">
              <Link href='' className="p-1 text-background">
                Terms & Conditions
              </Link>
              <Link href='' className="p-1 text-background">
                Privacy Policy
              </Link>
            </div>
          </div>
        </footer>
        {/* <div className="ipad">
          <div className="screen"></div>
          <div className="home-button"></div>
        </div> */}


      </main>
      {/* </ReactLenis> */}
    </>
  );
}
