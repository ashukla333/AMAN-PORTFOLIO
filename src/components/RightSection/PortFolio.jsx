import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "E-Commerce Application (kigsvillah)",
    description:
      "A full-fledged e-commerce store built with the MERN stack, featuring product listings, shopping cart, and payment integration.",
    image: "/ecom1.png", // Replace with your image path
    link: "https://kigsvillah.vercel.app/", // Replace with your project link
    source: "https://github.com/ashukla333/ecom-website", // Replace with your source code link
  },
  {
    title: "HTML/CSS Template",
    description:
      "A responsive HTML/CSS template designed with modern web standards and best practices.",
    image: "/shif.png", // Replace with your image path
    link: "https://ashukla33317.github.io/shaif-cuisine/index.html", // Replace with your project link
    source: "https://github.com/ashukla33317/shaif-cuisine", // Replace with your source code link
  },
  {
    title: "PortWala Template",
    description:
      "A responsive HTML/CSS template designed with modern web standards and best practices.",
    image: "/port.png", // Replace with your image path
    link: "https://ashukla33317.github.io/Portwala-webPage/", // Replace with your project link
    source: "https://github.com/ashukla33317/Portwala-webPage", // Replace with your source code link
  },
  {
    title: "HTML/CSS Template",
    description:
      "A responsive HTML/CSS template designed with modern web standards and best practices.",
    image: "/demos.jpg", // Replace with your image path
    link: "#", // Replace with your project link
    source: "#", // Replace with your source code link
  },
  {
    title: "E-Commerce Application",
    description:
      "A full-fledged e-commerce store built with the MERN stack, featuring product listings, shopping cart, and payment integration.",
    image: "/demos.jpg", // Replace with your image path
    link: "#", // Replace with your project link
    source: "#", // Replace with your source code link
  },
  {
    title: "HTML/CSS Template",
    description:
      "A responsive HTML/CSS template designed with modern web standards and best practices.",
    image: "/demos.jpg", // Replace with your image path
    link: "#", // Replace with your project link
    source: "#", // Replace with your source code link
  },
  {
    title: "E-Commerce Application",
    description:
      "A full-fledged e-commerce store built with the MERN stack, featuring product listings, shopping cart, and payment integration.",
    image: "/demos.jpg", // Replace with your image path
    link: "#", // Replace with your project link
    source: "#", // Replace with your source code link
  },
  {
    title: "HTML/CSS Template",
    description:
      "A responsive HTML/CSS template designed with modern web standards and best practices.",
    image: "/demos.jpg", // Replace with your image path
    link: "#", // Replace with your project link
    source: "#", // Replace with your source code link
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const Portfolio = () => {
  return (
    <motion.div
      className="p-3"
      initial="initial"
      animate="animate"
      transition={{ staggerChildren: 0.2 }}
    >
      <h2 className="text-4xl font-bold mb-6 text-center">Projects</h2>
      <p className="text-lg mb-8 text-center">
        Check out some of the projects I have worked on.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 flex flex-col"
            variants={cardVariants}
            whileHover={{ scale: 1.001 }}
            whileTap={{ scale: 1.001 }}
          >
            <div className="relative p-2 h-[200px] w-full">
              <Image
                src={project.image}
                alt={project.title}
                height={1000}
                width={1000}
                className={`transition-transform ${
                  project.title == "E-Commerce Application (kigsvillah)" ||
                  "PortWala Template"
                    ? "object-contain"
                    : "object-cover"
                }   hover-effect  h-[200px] w-full `}
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="lg:text-base xl:text-lg text-lg font-semibold mb-4">
                {project.title}
              </h3>
              <p className="text-gray-700 lg:text-sm xl:text-lg text-base mb-6 flex-grow">
                {project.description}
              </p>
              <div className="flex justify-between mt-auto">
                <motion.a
                  href={project.link}
                  className="px-2  py-2 bg-[#86C232] text-white lg:text-sm xl:text-lg text-base font-semibold rounded-lg shadow-lg hover:bg-[#3eb489] transition duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Visit Website
                </motion.a>
                <motion.a
                  href={project.source}
                  className="px-2  py-2 bg-[#86C232]  lg:text-sm xl:text-lg text-base text-white font-semibold rounded-lg shadow-lg hover:bg-[#3eb489] transition duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Source Code
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Portfolio;
