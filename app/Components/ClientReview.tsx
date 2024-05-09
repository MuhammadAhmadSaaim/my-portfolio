import { StarIcon } from "@heroicons/react/16/solid";
import Image from "next/legacy/image";
import React from 'react'

interface Props {
    name: string;
    role: string;
    image: string;
    body: string;
    rating: number;
}

const ClientReview = ({ name, image, role, body, rating }: Props) => {

    const renderStars = (rating: number) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars.push(<StarIcon key={i} className="w-[2rem] h-[2rem] text-[#55e6a5]" />);
            } else {
                stars.push(<StarIcon key={i} className="w-[2rem] h-[2rem] text-gray-300" />);
            }
        }
        return stars;
    };
    return (
        <div className="flex flex-col text-center justify-center">
            <div className="mx-auto mb-[2rem] rounded-full">
                <Image src={image} alt={name} width={100} height={100} objectFit="contain" />
            </div>
            <div className="flex items-center mx-auto">
                {renderStars(rating)}
            </div>
            <h1 className="text-[25px] text-white mt-[1rem]">{name}</h1>
            <p className="text-[18px] text-white opacity-75 mt-[0.5rem] mb-[1.4rem]">{role}</p>
            <p className="text-[16px] text-white opacity-50 w-[90%] md:w-[50%] mx-auto">{body}</p>
        </div>
    )
}

export default ClientReview;
