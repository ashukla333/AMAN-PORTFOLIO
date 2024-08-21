import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBirthdayCake,
  FaBriefcase,
  FaGraduationCap,
  FaUserAlt,
} from "react-icons/fa";

const About = () => {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-center md:flex-1 md:items-start bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-lg shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Left side - Profile Picture */}
      <motion.div
        className="flex-[0.4] mb-4 md:mb-0 md:mr-8"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="/amanProfile.jpeg" // Replace with your profile image path
          alt="Profile Picture"
          className="rounded-sm md:w-[500px] hover-effect h-full w-full hover:shadow-lg transition-shadow duration-300 ease-in-out object-cover md:h-[300px]"
          width={1000}
          height={1000}
        />
      </motion.div>

      {/* Right side - Details */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex-[0.6]"
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="md:text-4xl text-xl font-bold mb-3 text-[#86C232] drop-shadow-sm">Aman Shukla</h2>
        <p className="md:text-2xl text-lg mb-6 bg-clip-text md:block hidden  text-transparent bg-gradient-to-r from-amber-400 via-red-500 to-pink-500">Frontend Developer</p>

        <ul className="space-y-2 text-gray-800">
          <li>
            <FaBirthdayCake className="inline-block mr-2 text-[#86C232]" />
            <strong>Birthday:</strong> 3rd July 2001
          </li>
          <li>
            <FaBriefcase className="inline-block mr-2 text-[#86C232]" />
            <strong>Experience:</strong> 2 Years
          </li>
          <li>
            <FaPhoneAlt className="inline-block mr-2 text-[#86C232]" />
            <strong>Phone:</strong> +91 9324596328
          </li>
          <li>
            <FaMapMarkerAlt className="inline-block mr-2 text-[#86C232]" />
            <strong>City:</strong> Kalyan (Mumbai), India
          </li>
          <li>
            <FaUserAlt className="inline-block mr-2 text-[#86C232]" />
            <strong>Age:</strong> 24
          </li>
          <li>
            <FaGraduationCap className="inline-block mr-2 text-[#86C232]" />
            <strong>Degree:</strong> Computer Engineering
          </li>
          <li>
            <FaEnvelope className="inline-block mr-2 text-[#86C232]" />
            <strong>Email:</strong> amanshukla3747@gmail.com
          </li>
          <li>
            <strong>Freelance:</strong> Available
          </li>
        </ul>

        <motion.p
          className="mt-6 text-gray-700 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          I am a passionate frontend developer with 2 years of experience in
          building responsive and interactive web applications. Proficient in
          JavaScript, React, and Next.js, I enjoy crafting clean and efficient
          code that brings ideas to life on the web.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default About;
