import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Abhishek Yadav",
    feedback:
      "Great work! The project was completed on time and exceeded my expectations.",
    rating: 5,
    image: "/frontend_developer.jpg",
  },
  {
    name: "Adarsh S.",
    feedback: "Amazing attention to detail and very responsive throughout.",
    rating: 4,
    image: "/frontend_developer.jpg",
  },
  {
    name: "anonymous",
    feedback: "I'm extremely satisfied with the work delivered.",
    rating: 5,
    image: "/frontend_developer.jpg",
  },
  {
    name: "anonymous",
    feedback:
      "A pleasure to work with! The project was delivered on time and was of high quality.",
    rating: 4,
    image: "/frontend_developer.jpg",
  },
  {
    name: "anonymous",
    feedback: "The work was excellent and the communication was top-notch.",
    rating: 5,
    image: "/frontend_developer.jpg",
  },
];

const TestimonialCard = ({ name, feedback, rating, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
      <Image
        src={image}
        alt={name}
        height={1000}
        width={1000}
        className="rounded-full w-24 h-24 object-cover mb-4"
      />
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-600 mt-2">{feedback}</p>
      <div className="flex items-center justify-center mt-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <FaStar
            key={index}
            className={`${
              index < rating ? "text-yellow-500" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const Testimonial = () => {
  return (
    <div className="py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Testimonial</h2>
      <p className="text-center mb-12">See what others say about my work.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-12">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            feedback={testimonial.feedback}
            rating={testimonial.rating}
            image={testimonial.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
