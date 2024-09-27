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
    title: "Boppo Technologies Main Website",
    description:
      "Designed and developed the user interface using Next.js and Tailwind CSS for a modern, responsive, and visually appealing website. The site delivers a seamless user experience across devices, optimizing performance and scalability while adhering to best practices in web design and development",
    image: "/boppotech.png", // Replace with your image path
    link: "https://www.boppotechnologies.com/", // Replace with your project link
    // source: "https://github.com/ashukla33317/Portwala-webPage", // Replace with your source code link
  },
  {
    title: "RangePlus Website & Dashboard (E-Commerce)",
    description:
      "Developed a scalable e-commerce platform featuring a user-friendly interface for browsing and purchasing products. The admin dashboard allows seamless management of products, orders, users, and sales analytics. Integrated secure payment gateways and third-party APIs to enhance user experience and streamline business operations.",
    image: "/rangeplus1.png", // Replace with your image path
    link: "https://stage.rangeplus.com", // Replace with your project link
    // source: "#", // Replace with your source code link
  },
  {
    title: "Friday Release Website",
    description:
      "Friday Release Website Developed the user interface using HTML and CSS for a responsive and visually appealing website. Focused on clean design principles, ensuring an intuitive and seamless user experience across all devices, with attention to detail in layout, typography, and visual hierarchy.",
    image: "/fridayRelease.png", // Replace with your image path
    link: "https://www.fridayrelease.com", // Replace with your project link
    // source: "#", // Replace with your source code link
  },
  {
    title: "Dream & Discover Blog Website",
    description:
      " Developed a feature-rich blog platform using Next.js , Material UI , and Tailwind CSS for a clean, responsive design. Integrated secure user authentication with the MERN stack (MongoDB, Express, React, Node.js) to allow users to register, log in, and manage their profiles. The platform offers a seamless user experience with a modern and scalable interface.",
    image: "/blogPage1.png", // Replace with your image path
    link: "https://blog-mern-nu-one.vercel.app ", // Replace with your project link
    // source: "#", // Replace with your source code link
  },
  {
    title: "Boppo Go E-Commerce Website",
    description:
      "Built a dynamic and scalable e-commerce platform using Next.js . The website features optimized product listings, a responsive design, and a seamless user experience across devices. Focused on performance, speed, and modern web development practices to ensure a smooth shopping experience for users. ",
    image: "/demos.jpg", // Replace with your image path
    // link: "#", // Replace with your project link
    // source: "#", // Replace with your source code link
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
                {project.link && (
                  <motion.a
                    href={project.link}
                    className="px-2  py-2 bg-[#86C232] text-white lg:text-sm xl:text-lg text-base font-semibold rounded-lg shadow-lg hover:bg-[#3eb489] transition duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Visit Website
                  </motion.a>
                )}
                {project.source && (
                  <motion.a
                    href={project.source}
                    className="px-2  py-2 bg-[#86C232]  lg:text-sm xl:text-lg text-base text-white font-semibold rounded-lg shadow-lg hover:bg-[#3eb489] transition duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Source Code
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Portfolio;
