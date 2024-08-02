import Image from "next/legacy/image"
import React from 'react'

const Projects = () => {
    const goToProjectLink = (link: string) => {
        window.open(link);
    };

    return (
        <div className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[1rem]">
            <h1 className="heading">
                Pro<span className="text-purple-900">jects</span>
            </h1>
            <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-l md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
                <div data-aos="fade-up" data-aos-delay="250" onClick={() => goToProjectLink('https://www.linkedin.com/posts/muhammadahmadsaaim_mobileappdevelopment-flutter-dart-activity-7197597685061685248-qvCe?utm_source=share&utm_medium=member_desktop')}>
                    <div className="transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
                        <Image src="/images/p1.jpg" alt="portfolio" layout="fill" className="object-contain" />
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="500" onClick={() => goToProjectLink('https://www.linkedin.com/posts/muhammadahmadsaaim_mobileappdevelopment-flutter-dart-activity-7197609363895672832-4zYx?utm_source=share&utm_medium=member_desktop')}>
                    <div className="transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
                        <Image src="/images/p2.jpg" alt="portfolio" layout="fill" className="object-contain" />
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="750" onClick={() => goToProjectLink('https://www.linkedin.com/posts/muhammadahmadsaaim_mobileappdevelopment-flutter-dart-activity-7197594949226237952-yO3w?utm_source=share&utm_medium=member_desktop')}>
                    <div className="transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
                        <Image src="/images/p3.jpg" alt="portfolio" layout="fill" className="object-contain" />
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="750" onClick={() => goToProjectLink('https://www.linkedin.com/posts/muhammadahmadsaaim_reactnative-react-reactjs-activity-7223931974199967745-1z8g?utm_source=share&utm_medium=member_desktop')}>
                    <div className="transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
                        <Image src="/images/p4.png" alt="portfolio" layout="fill" className="object-contain" />
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="750" onClick={() => goToProjectLink('https://www.linkedin.com/posts/muhammadahmadsaaim_reactnative-react-reactjs-activity-7223934247651143681-XUxx?utm_source=share&utm_medium=member_desktop')}>
                    <div className="transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
                        <Image src="/images/p5.png" alt="portfolio" layout="fill" className="object-contain" />
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="750" onClick={() => goToProjectLink('https://www.linkedin.com/posts/muhammadahmadsaaim_reactnative-react-reactjs-activity-7225026450138046464-NnA-?utm_source=share&utm_medium=member_desktop')}>
                    <div className="transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
                        <Image src="/images/p6.png" alt="portfolio" layout="fill" className="object-contain" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
