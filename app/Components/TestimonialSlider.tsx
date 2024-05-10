import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReview from "./ClientReview";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const TestimonialSlider = () => {
    return (

        <Carousel
            additionalTransfrom={0}
            arrows={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            centerMode={false}
            infinite
            responsive={responsive}
            itemClass="item"
        >
            <ClientReview image="/images/c1.jpg" name="Ali Nawaz" role="MERN Stack Developer" body="His attention to detail and problem-solving skills have truly set him apart." rating={5} />
            <ClientReview image="/images/c2.jpg" name="Fahad Iqbal" role="AI Specilist" body="As an AI Specialist has been invaluable to our project. His deep understanding of machine learning algorithms and artificial intelligence has significantly enhanced the functionality of our application." rating={4} />
            <ClientReview image="/images/c3.jpg" name="Reyan Ahtesham" role="UI/UX Designer" body="His designs are not only visually stunning but also highly intuitive and user-friendly." rating={5} />
            <ClientReview image="/images/c4.jpg" name="Saba Shafique" role="Web Developer" body="Ahmad has been instrumental Web Developer in our project. His expertise in front-end and back-end development has resulted in a seamless and responsive website." rating={5} />
        </Carousel>
    )
}

export default TestimonialSlider
