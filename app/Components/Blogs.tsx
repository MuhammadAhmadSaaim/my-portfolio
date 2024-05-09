import { ChatBubbleLeftIcon, UserCircleIcon } from "@heroicons/react/16/solid"
import Image from "next/legacy/image"
import React from 'react'

const Blogs = () => {
    return (
        <div className="pt-[4rem] md:pt-[8rem] pb-[4rem] bg-[#02050a]">
            <h1 className="heading">
                MY <span className="text-purple-900">BLOGS</span>
            </h1>
            <div className="grid grid-cols-l lg:grid-cols-2 xl:grid-cols-3 mt-[4rem] gap-[3rem] w-[80%] mx-auto">
                <div>
                    <div className="w-[100%] relative h-[400px]">
                        <Image src="/images/blog3.jpg" alt="blog" layout="fill" className="object-cover" />
                    </div>
                    <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
                        <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
                            December 10,2023
                        </div>
                        <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
                            <div className="flex items-center space-x-3">
                                <UserCircleIcon className="w-[2rem] mx-auto h-[2rem] text-[#55e6a5]" />
                                <p className="text-white">By Ahmad</p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <ChatBubbleLeftIcon className="w-[2rem] mx-auto h-[2rem] text-[#55e6a5]" />
                                <p className="text-white">Comments(4)</p>
                            </div>
                        </div>
                        <p className="mt-[1rem] text-white text-[18px] font-semibold">Next Js Fullstack Development</p>
                    </div>
                </div>
                <div>
                    <div className="w-[100%] relative h-[400px]">
                        <Image src="/images/blog1.jpg" alt="blog" layout="fill" className="object-cover" />
                    </div>
                    <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
                        <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
                            Febuary 10,2024
                        </div>
                        <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
                            <div className="flex items-center space-x-3">
                                <UserCircleIcon className="w-[2rem] mx-auto h-[2rem] text-[#55e6a5]" />
                                <p className="text-white">By Ahmad</p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <ChatBubbleLeftIcon className="w-[2rem] mx-auto h-[2rem] text-[#55e6a5]" />
                                <p className="text-white">Comments(5)</p>
                            </div>
                        </div>
                        <p className="mt-[1rem] text-white text-[18px] font-semibold">Flutter CrashCourse</p>
                    </div>
                </div>
                <div>
                    <div className="w-[100%] relative h-[400px]">
                        <Image src="/images/blog2.jpg" alt="blog" layout="fill" className="object-cover" />
                    </div>
                    <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
                        <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
                            January 1,2023
                        </div>
                        <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
                            <div className="flex items-center space-x-3">
                                <UserCircleIcon className="w-[2rem] mx-auto h-[2rem] text-[#55e6a5]" />
                                <p className="text-white">By Ahmad</p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <ChatBubbleLeftIcon className="w-[2rem] mx-auto h-[2rem] text-[#55e6a5]" />
                                <p className="text-white">Comments(1)</p>
                            </div>
                        </div>
                        <p className="mt-[1rem] text-white text-[18px] font-semibold">Angular JS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs
