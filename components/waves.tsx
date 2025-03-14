"use client"
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Stats from 'stats.js';

const Waves: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
 

    var window = global.window || global.window;

    let container: HTMLDivElement | null = null;
    let camera: THREE.PerspectiveCamera, scene: THREE.Scene, renderer: THREE.WebGLRenderer;
    const particles: THREE.Sprite[] = [];
    let mouseX = 0, mouseY = 0;
    let count = 0;
    const stats = new Stats();

    const SEPARATION = 100, AMOUNTX = 50, AMOUNTY = 50;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    const init = () => {
      container = document.createElement('div');
      sectionRef.current?.appendChild(container);

      camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 1, 10000);
      camera.position.z = 2000;
      camera.position.y = 500;

      scene = new THREE.Scene();

      const PI2 = Math.PI * 2;

      let i = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          const canvas = document.createElement('canvas');
          canvas.width = 64;
          canvas.height = 64;
          const context = canvas.getContext('2d');
          if (context) {
            const positionZ = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2);
            const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32);
            const colorStop = (positionZ + 50) / 3000; // Normalize to range [0, 1]
            const color = `rgb(${Math.min(255, Math.max(0, 255 * colorStop))}, 0, ${Math.min(255, Math.max(0, 255 * (1 - colorStop)))})`;

            context.fillStyle = color;
            context.beginPath();
            context.arc(32, 32, 30, 0, PI2, true);
            context.fill();

            const texture = new THREE.CanvasTexture(canvas);
            const material = new THREE.SpriteMaterial({ map: texture });
            const particle = particles[i++] = new THREE.Sprite(material);
            particle.position.x = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2);
            particle.position.z = positionZ;
            scene.add(particle);
          }
        }
      }

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);

      document.addEventListener('mousemove', onDocumentMouseMove, false);
      document.addEventListener('touchstart', onDocumentTouchStart, false);
      document.addEventListener('touchmove', onDocumentTouchMove, false);
      window.addEventListener('resize', onWindowResize, false);
    };

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const onDocumentMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX - windowHalfX;
      mouseY = event.clientY - windowHalfY;
    };

    const onDocumentTouchStart = (event: TouchEvent) => {
      if (event.touches.length === 1) {
        event.preventDefault();
        mouseX = event.touches[0].pageX - windowHalfX;
        // mouseY = event.touches[0].pageY - windowHalfY;
      }
    };

    const onDocumentTouchMove = (event: TouchEvent) => {
      if (event.touches.length === 1) {
        event.preventDefault();
        mouseX = event.touches[0].pageX - windowHalfX;
        // mouseY = event.touches[0].pageY - windowHalfY;
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);
      render();
      // stats.update();
    };

    const render = () => {
      renderer.setClearColor(0x000000, 0); // Set background color to black
      camera.position.x += (mouseX - camera.position.x) * 0.05;
      // camera.position.y += (-mouseY - camera.position.y) * 0.01;
      camera.lookAt(scene.position);

      let i = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          const particle = particles[i++];
          particle.position.y = (Math.sin((ix + count) * 0.3) * 50) + (Math.sin((iy + count) * 0.5) * 50);
          particle.scale.x = particle.scale.y = (Math.sin((ix + count) * 0.3) + 1) * 4 + (Math.sin((iy + count) * 0.5) + 1) * 4;
        }
      }
      renderer.render(scene, camera);
      count += 0.1;
    };

    init();
    animate();

    return () => {
      document.removeEventListener('mousemove', onDocumentMouseMove);
      document.removeEventListener('touchstart', onDocumentTouchStart);
      document.removeEventListener('touchmove', onDocumentTouchMove);
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

  return <div ref={sectionRef} style={{ position: 'relative', width: '100%', height: '100%' }} className='hero-content' />;
};

export default Waves;
