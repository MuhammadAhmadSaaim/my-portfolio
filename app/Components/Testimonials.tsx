import React from 'react'
import TestimonialSlider from "./TestimonialSlider"

const Testimonials = () => {
    return (
        <div className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]">
            <h1 className="heading">
                Client <span className="text-purple-900">Reviews</span>
            </h1>
            <div className="pt-[5rem] pb-[4rem] w-[80%] mx-auto">
                <TestimonialSlider />
            </div>
        </div>
    )
}

export default Testimonials
