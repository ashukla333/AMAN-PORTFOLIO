import React from "react";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi"; // Importing an icon for the button

const Resume = () => {
  return (
    <motion.div
      className="p-6 h-screen"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold mb-4 text-center">Resume</h2>
      <p className="text-lg mt-4 text-black text-center">
        With 2 years of experience as a Frontend Developer, I have developed
        strong expertise in JavaScript, React, and Next.js. My ability to create
        responsive and dynamic web applications has allowed me to successfully
        deliver projects that are not only visually appealing but also
        user-friendly and highly functional.
      </p>
      <p className="text-lg mt-4 text-black text-center">
        I am well-versed in modern frontend technologies, including responsive
        design, ensuring that websites and applications perform flawlessly
        across various devices and screen sizes. My dedication to staying
        updated with the latest industry trends ensures that my solutions are
        both innovative and effective.
      </p>

      {/* Download Button */}
      <div className="mt-8 flex justify-center">
        <motion.a
          href="/aman_s_resume.pdf" 
          download
          className="flex items-center px-6 py-3 hover:bg-[#3eb489] text-white font-semibold rounded-lg shadow-lg bg-[#86C232] transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiDownload className="mr-2" /> Download Resume
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Resume;
