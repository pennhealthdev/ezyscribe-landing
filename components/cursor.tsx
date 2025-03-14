"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowDown, PlayCircleIcon } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { Button } from "./ui/button";
import { Popover } from "@radix-ui/react-popover";
import { PopoverContent, PopoverTrigger } from "./ui/popover";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Video } from "./video";

export function CursorGlass() {

    const cursorRef = useRef<HTMLDivElement>(null);

    // useGSAP(() => {
      

    //     gsap.to('.landing', {
    //         opacity: 0,
    //         backgroundPosition: '-70%, top center, center 30%, center 100%',
    //         stagger: 0.2,
    //         paused: true
    //     })

    //     const handleMouseMove = (event: MouseEvent) => {
    //         const cursor = document.querySelector('.cursor');
    //         if (cursor) {
    //           const x = event.clientX;
    //           const y = event.clientY;
    //         //   @ts-ignore
    //           cursor.style.transform = `translate(${x}px, ${y}px)`;
    //         }
    //       };
      
    //       window.addEventListener('mousemove', handleMouseMove);

    // });
    

    return (
        <>
        <div className="cursor bg-background/0 pointer-events-none -left-[20px] -top-4 backdrop-blur-sm fixed  -translate-x-1/2 -translate-y-1/2 w-10 h-10 z-50 rounded-full"></div>
        <section
            ref={cursorRef}
            className=" h-screen pointer-events-none fixed overflow-hidden w-full"
            >
           
        </section>
            </>
    )
}