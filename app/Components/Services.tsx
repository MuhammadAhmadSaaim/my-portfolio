import { CodeBracketSquareIcon, CommandLineIcon, RocketLaunchIcon } from "@heroicons/react/16/solid"
import React from 'react'

const Services = () => {
    return (
        <div className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]">
            <p className="heading">
                My <span className="text-purple-900">Services</span>
            </p>
            <div className="grid grid-cols-l md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
                <div data-aos="fade-right">
                    <div className="bg-red-800 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
                        <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
                        <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
                            Frontend
                        </h1>
                        <p className="text-[15px] text-[#d3d2d2] font-normal">
                            Your digital presence begins with an engaging and user-friendly frontend. From responsive web designs to intuitive mobile app interfaces, I bring your vision to life with precision, creativity and detail.
                        </p>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-delay="250">
                    <div className="bg-orange-700 hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-[2rem]">
                        <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
                        <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
                            Backend
                        </h1>
                        <p className="text-[15px] text-[#d3d2d2] font-normal">
                            Behind every great frontend lies a powerful backend infrastructure. With expertise in server-side programming languages, databases, and cloud technologies, I develop scalable and secure backend systems.
                        </p>
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-delay="500">
                    <div className="bg-[#216869] hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]">
                        <CommandLineIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
                        <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
                            Fullstack
                        </h1>
                        <p className="text-[15px] text-[#d3d2d2] font-normal">
                            For comprehensive digital solutions, I offer full-stack development services. Whether launching a web application, a mobile app, or a cross-platform solution, my expertise ensures a stellar end product.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
