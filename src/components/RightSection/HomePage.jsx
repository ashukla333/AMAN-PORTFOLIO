import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa"; // Import the icon from react-icons
import { useRouter } from "next/router";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const titleVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    rotate: 3,
    boxShadow: "0px 6px 30px rgba(0, 0, 0, 0.3)",
  },
  tap: { scale: 0.95 },
};



const HomePage = () => {
  const router = useRouter();
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-amber-200 via-red-100 to-gray-200 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/amanProfile.jpeg" // Example black and white coding image URL
          alt="Background"
          height={1000}
          width={1000}
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50"></div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 uppercase text-center p-8 bg-opacity-60 rounded-lg shadow-lg">
        <motion.h1
          className="text-5xl font-bold text-[#86C232] mb-4"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.3 }}
          variants={titleVariants}
        >
          Welcome
        </motion.h1>
        <motion.h2
          className="text-4xl font-semibold mb-6"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.6 }}
          variants={textVariants}
        >
          I am{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-red-500 to-pink-500">
            Aman Shukla
          </span>
        </motion.h2>
        <motion.p
          className="text-lg mb-6"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.9 }}
          variants={textVariants}
        >
          A passionate Frontend Developer.
        </motion.p>
        <motion.div
          className="flex items-center justify-center"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 1.2 }}
          variants={textVariants}
        >
          <motion.a
           
            onClick={() => {
              router.push("/contact");
            }}
            className="flex items-center px-8 py-4 cursor-pointer text-base font-semibold text-white  drop-shadow-lg bg-[#3eb489] rounded-tl-md rounded-br-md shadow-lg hover:bg-[#86C232] transition duration-300"
            whileHover={buttonVariants.hover}
            whileTap={buttonVariants.tap}
          >
            <span className="mr-2">Get in Touch</span>
            <FaArrowRight className="text-xl" />
          </motion.a>
        </motion.div>
      </div>
      {/* Additional Creative Element */}
      <motion.div
        className="absolute bottom-2 right-2 hidden md:flex md:flex-row  flex-col items-center  gap-2"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <motion.div
          onClick={() => {
            router.push("/about");
          }}
          className="bg-[#86C232] animate-pulse cursor-pointer text-white px-4 py-2 rounded-full shadow-md text-sm"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.7 }}
        >
          Explore More
        </motion.div>
        <motion.div
          onClick={() => {
            router.push("/projects");
          }}
          className="bg-red-500 text-white animate-bounce cursor-pointer bg-gradient-to-r from-amber-400  to-purple-500 px-4 py-2 rounded-full shadow-md text-sm"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.9 }}
        >
          View Projects
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomePage;
