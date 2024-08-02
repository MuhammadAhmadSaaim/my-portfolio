"use client";
import React, { useEffect, useState } from 'react';
import Footer from "../Components/Footer";
import MobileNav from "../Components/MobileNav";
import Nav from '../Components/Nav';
import 'aos/dist/aos.css';

const ServicesPage = () => {
    const [nav, setNav] = useState(false);
    const openNav = () => setNav(true);
    const closeNav = () => setNav(false);

    const services = [
        {
            title: "React-Native Application",
            description: "Building cross-platform mobile applications with React Native for iOS and Android. Leveraging the power of JavaScript and React, we deliver high-performance, visually appealing, and user-friendly mobile apps that meet your business needs and provide a seamless user experience.",
            color: "bg-purple-900"
        },
        {
            title: "Flutter/Dart Application",
            description: "Developing high-performance mobile apps using Flutter and Dart. With Flutter’s expressive UI and Dart’s robust programming, we create beautiful, natively compiled applications for mobile, web, and desktop from a single codebase, ensuring consistency and reducing development time.",
            color: "bg-[#216869]"
        },
        {
            title: "NextJS/TypeScript",
            description: "Creating modern web applications with Next.js and TypeScript. We utilize the power of Next.js for server-side rendering and static site generation, combined with TypeScript’s type safety, to build scalable, maintainable, and high-performance web applications tailored to your business objectives.",
            color: "bg-red-800"
        },
        {
            title: "SQL",
            description: "Designing and managing relational databases with SQL. Our expertise in SQL allows us to create efficient, secure, and scalable database solutions, ensuring your data is well-organized and easily accessible, which is crucial for making informed business decisions.",
            color: "bg-yellow-600"
        },
        {
            title: "MongoDB",
            description: "Working with NoSQL databases like MongoDB for scalable data solutions. We specialize in using MongoDB to handle large volumes of unstructured data, providing flexible and scalable solutions that can adapt to your evolving data needs and enhance your application's performance.",
            color: "bg-indigo-500"
        },
        {
            title: "NodeJS",
            description: "Building server-side applications with Node.js. Our Node.js solutions are designed to deliver fast, scalable, and reliable server-side applications. We focus on creating robust backend systems that can handle high traffic and provide seamless integration with front-end technologies.",
            color: "bg-orange-600"
        },
    ];

    return (
        <div className="overflow-x-hidden">
            <MobileNav nav={nav} closeNav={closeNav} />
            <Nav openNav={openNav} />
            <div className="mt-[10vh] relative z-[30] flex bg-[#121212] justify-center">
                <div className="w-full max-w-5xl p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt">
                    {services.map((service, index) => (
                        <div key={index} className={`${service.color} p-6 rounded-lg shadow-lg transform transition-transform hover:-translate-y-2`}>
                            <h2 className="text-2xl font-bold mb-2 text-white">{service.title}</h2>
                            <p className="text-gray-100">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ServicesPage;
