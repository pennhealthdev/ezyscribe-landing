'use client';

import { useEffect, useState } from 'react';
import { BookDashed, Icon, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NavigationMenu } from './ui/navigation-menu';
import { NavigationMenuSub } from './nav-menu';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { TransitionLink } from './utils/TransitionLink';
import { SparcleButton } from './sparkle-button';

export const links = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '#about',
  },
  {
    title: 'How we work',
    href: '#how-we-work',
  },
  {
    title: 'Benefits',
    href: '#benefits',
  },
  {
    title: 'Faqs',
    href: '#faqs',
  },
  {
    title: 'Contact',
    href: '#contact',
  },
]

export function NavigationMain() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {

    if (typeof window === "undefined") {
      // Exit if not in the client-side environment
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setIsMobileMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useGSAP(() => {
    const showAnim = gsap.from('.main-tool-bar', {
      yPercent: isMobileMenuOpen ? -500 : -150,
      paused: true,
      duration: 0.2
    }).progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: "max",
      //markers: true,
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse()
      }
    });
  });

  return (
    <nav
      className={cn(
        'fixed  left-0 right-0 z-50 transition-all duration-300 rounded-lg main-tool-bar',
        isScrolled
          ? 'top-0'
          : 'top-0'
      )}
    >
      <div className={cn(
        'max-w-6xl mx-auto px-10 flex items-center justify-between transition-all duration-300 rounded-full nav-div',
        isScrolled
          ? 'bg-background/0 backdrop-blur-sm  py-2'
          : 'bg-transparent py-2  backdrop-blur-sm'
      )}>
        <Link href='#' >
          <Image src="/Ezy Logo white.png" alt='Logo' width={100} height={100} />
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-evenly  w-1/2 overflow-hidden">
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
          {/* <NavigationMenuSub /> */}

        </div>

        <SparcleButton className="hidden sm:block" link href='https://app.ezyscribe.com' target='_blank'>
          Sign In
        </SparcleButton>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 z-[999] bg-black text-background   md:hidden">
            <div className="flex flex-col p-4">
              {links.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="py-2 text-background/80 hover:text-background transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title}
                </a>
              ))}
              <SparcleButton className=" block sm:hidden" link href='https://app.ezyscribe.com' target='_blank'>
                Sign In
              </SparcleButton>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}