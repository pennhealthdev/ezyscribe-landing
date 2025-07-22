"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {  Play } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Video } from "./video";
import Waves from "./waves";
import { SparcleButton } from "./sparkle-button";
import { TrialRequestInputForm } from "./TrialRequestForm";

export function HeroSection() {

    const heroRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {

        gsap.fromTo('.main-tool-bar', {
            opacity: 0,
            y: -100,

        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power4.out',
        })

        gsap.fromTo('.hero-content', {
            opacity: 0,
            y: 100,

        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power4.out',
            stagger: 0.2,
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: heroRef.current,
                start: 'top top',
                end: 'bottom bottom',
                scrub: true,
            },
        });

        tl.to('.ipad-big', {
            scale: 1.3,
        })

    });


    return (
        <section
            ref={heroRef}
            className=" max-h-[150vh]  flex flex-col pt-28  px-4 overflow-hidden w-full landing relative bg-black"
        >
            <div className="absolute sm:top-0 -top-20 left-0 right-0 bottom-0 overflow-hidden">
                <Waves />
            </div>


            <div className="sm:max-w-6xl mx-auto text-center items-center justify-center">
                <h1 className="hero-content text-4xl md:text-6xl font-medium mb-6 text-transparent bg-gradient-to-br from-background to-[#DDC3A5] inline-block bg-clip-text ">
                    Your <span className="text-transparent">AI-Powered</span><br />Medical Scribing solution
                </h1>
                <p className="text-background/70 mb-10 text-lg hero-content">
                    Easy & Accurate Documentation Tailored to Your Practice's Needs

                </p>
                {/* <p className="hero-content text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Transform your ideas into stunning reality with our cutting-edge design
                    and development solutions.
                </p> */}
                <div className="flex sm:gap-10 gap-2 w-full self-center mb-10 justify-center">
                    <Dialog>
                        <DialogTrigger asChild>
                            <SparcleButton className="[--active:1!important] hover:[--active:0!important] hero-content">
                                Try for 7 days
                            </SparcleButton>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Please fill the form.</DialogTitle>
                                <DialogDescription>
                                <TrialRequestInputForm />
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>



                    <SparcleButton className="hero-content" link href="#contact">
                        Contact Support
                    </SparcleButton>
                </div>


            </div>
            {/* <div className="absolute top-0 left-0  z-10 bg-gradient-to-t from-[#00111C] to-white/0 w-full h-full  pointer-events-none "></div>
            <div className="absolute top-0 left-0  z-10 bg-gradient-to-t from-[#00111C] to-white/0 w-full h-full  pointer-events-none "></div> */}
            <div className="absolute -bottom-5 left-0  z-10 bg-gradient-to-t from-[#090909] to-white/0 w-full h-[25%]  pointer-events-none "></div>
            <div className="absolute -bottom-5 left-0  z-10 bg-gradient-to-t from-[#090909] to-white/0 w-full h-[25%]  pointer-events-none "></div>
            <div className="absolute -bottom-5 left-0  z-10 bg-gradient-to-t from-[#090909] to-white/0 w-full h-[25%]  pointer-events-none "></div>
            <div className="absolute -bottom-5 left-0  z-10 bg-gradient-to-t from-[#090909] to-white/0 w-full h-[25%]  pointer-events-none "></div>

            <div className=" ipad-big hero-content group w-[calc(512px/1.3)] h-[calc(384px/1.3)] sm:w-[calc(512px*2)] sm:h-[calc(384px*2)]">
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
                            <DialogContent className="sm:max-w-[425px] md:max-w-6xl h-screen">

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
                        src='/ezyscribescreen.png'
                        alt={`Dashboard View`}
                        fill
                        className="object-contain rounded-lg rounded-b-none object-top"
                        sizes="(max-width: 3060px) 100vw, 3060px"
                        quality={100}
                        priority
                    />
                </div>
            </div>
        </section>
    )
}