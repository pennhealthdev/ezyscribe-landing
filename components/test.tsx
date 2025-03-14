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
    },
  ];
  
  // Pin the entire section
  ScrollTrigger.create({
    trigger: sectionRef2.current,
    start: 'top top',
    end: '+=400%',
    pin: '.sticky-container',
    scrub: true,
    pinSpacing: true,
  });
  
  // Hide all items initially except the first one
  gsap.set('.showcase-item', { opacity: 0, y: 20 });
  gsap.set('.showcase-image-wrapper', { opacity: 0 });
  gsap.set('.showcase-overlay', { opacity: 0, y: 20 });
  gsap.set('.showcase-item-0', { opacity: 1, y: 0 });
  gsap.set('.showcase-image-wrapper-0', { opacity: 1 });
  gsap.set('.showcase-overlay-0', { opacity: 1, y: 0 });
  
  // Set initial image position for the first slide
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
  
    // Fade out current image, text, and overlay
    if (!item.keepText) {
      tl.to([
        `.showcase-item-${index}`,
        `.showcase-image-wrapper-${index}`,
        `.showcase-overlay-${index}`,
      ], {
        opacity: 0,
        duration: duration * 0.4,
      }, position);
    } else {
      tl.to([`.showcase-image-wrapper-${index}`, `.showcase-overlay-${index}`], {
        opacity: 0,
        duration: duration * 0.4,
      }, position);
    }
  
    // Move out current text and overlay
    if (!item.keepText) {
      tl.to([`.showcase-item-${index}`, `.showcase-overlay-${index}`], {
        y: -20,
        duration: duration * 0.4,
      }, position);
    } else {
      tl.to(`.showcase-overlay-${index}`, {
        y: -20,
        duration: duration * 0.4,
      }, position);
    }
  
    // Reset current image zoom
    tl.to(`.showcase-image-${index}`, {
      scale: 1,
      xPercent: 0,
      yPercent: 0,
      duration: duration * 0.4,
    }, position);
  
    // Fade in next image and overlay
    if (!item.keepText) {
      tl.to([
        `.showcase-item-${index + 1}`,
        `.showcase-image-wrapper-${index + 1}`,
        `.showcase-overlay-${index + 1}`,
      ], {
        opacity: 1,
        duration: duration * 0.4,
      }, position + duration * 0.2);
    } else {
      tl.to([`.showcase-image-wrapper-${index + 1}`, `.showcase-overlay-${index + 1}`], {
        opacity: 1,
        duration: duration * 0.4,
      }, position + duration * 0.2);
    }
  
    // Move in next text and overlay
    if (!item.keepText) {
      tl.fromTo(
        [`.showcase-item-${index + 1}`, `.showcase-overlay-${index + 1}`],
        { y: 20 },
        { y: 0, duration: duration * 0.4 },
        position + duration * 0.2
      );
    } else {
      tl.fromTo(`.showcase-overlay-${index + 1}`, { y: 20 }, { y: 0, duration: duration * 0.4 }, position + duration * 0.2);
    }
  
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
      fastScrollEnd: true,
    },
  });
  