import React from 'react'
import Particle from "./Particles"
import TextEffect from "./TextEffects"
import Image from "next/legacy/image";
import { ArrowDownTrayIcon, PlayCircleIcon } from "@heroicons/react/16/solid";

const greeting = "HI I'M";
const PDF_URL = '/docs/MuhammadAhmadSaaim-CV.pdf';

const Hero = () => {
    const handleDownloadCV = () => {
        const downloadLink = document.createElement('a');
        downloadLink.href = PDF_URL;
        downloadLink.download = 'MuhammadAhmadSaaim-CV.pdf';
        downloadLink.click();
    };

    return (
        <div className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-cover bg-center">
            <div ><Particle /></div>
            <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
                <div>
                    <h1 className="text-[35px] md:text-[50px] text-white font-bold">
                        {greeting} <span className="text-purple-900">AHMAD!</span>
                    </h1>
                    <TextEffect />
                    <p className="mt-[1.5rem] text-[18px] text-[#ffffff92]">
                        Let&apos;s Connect and Create<br />Whether you&apos;re a fellow coder, a potential collaborator, or simply curious about the wonders of technology, I invite you to explore my portfolio. Together, let&apos;s innovate, create, and inspire.
                    </p>
                    <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
                        <button onClick={handleDownloadCV} className="px-[2rem] hover:bg-purple-900 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2 rounded-full">
                            <p>Download Resume</p>
                            <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
                        </button>
                    </div>
                </div>
                <div className="w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]">
                    <Image src="/images/u1.jpg" alt="user" layout="fill" className="object-cover rounded-full" />
                </div>
            </div>
        </div>
    )
}

export default Hero
