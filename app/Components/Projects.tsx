import Image from "next/legacy/image"
import React from 'react'

const Projects = () => {
    return (
        <div className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]">
            <h1 className="heading">
                Pro<span className="text-purple-900">jects</span>
            </h1>
            <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-l md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
                <div data-aos="fade-up" data-aos-delay="250">
                    <div className="transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
                        <Image src="/images/p1.jpg" alt="portfolio" layout="fill" className="object-contain" />
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="500">
                    <div className="transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
                        <Image src="/images/p2.jpg" alt="portfolio" layout="fill" className="object-contain" />
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="750">
                    <div className="transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
                        <Image src="/images/p3.jpg" alt="portfolio" layout="fill" className="object-contain" />
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="1000">
                    <div className="transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
                        <Image src="/images/p4.jpg" alt="portfolio" layout="fill" className="object-contain" />
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="1250">
                    <div className="transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
                        <Image src="/images/p5.jpg" alt="portfolio" layout="fill" className="object-contain" />
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="1500">
                    <div className="transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
                        <Image src="/images/p2.jpg" alt="portfolio" layout="fill" className="object-contain" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
