import { useState, useEffect, useRef } from "react";
import { Inter } from "next/font/google";
import { motion, useAnimation } from "framer-motion";
import { FaUser, FaProjectDiagram, FaListAlt } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import Image from 'next/image';

const inter = Inter({ subsets: ["latin"] });

const tabItems = [
  { id: "profile", label: "Profile", icon: <FaUser /> },
  { id: "projects", label: "Projects", icon: <FaProjectDiagram /> },
  { id: "hobbies", label: "Hobbies", icon: <FaListAlt /> },
];

const animations = {
  fadeIn: { opacity: 1, transition: { duration: 0.5 } },
  fadeOut: { opacity: 0, transition: { duration: 0.5 } },
  slideUp: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  slideDown: { y: 20, opacity: 0, transition: { duration: 0.5 } },
  scaleUp: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
  scaleDown: { scale: 0.9, opacity: 0.7, transition: { duration: 0.3 } }
};

export default function Home() {
  const [activeTab, setActiveTab] = useState("profile");

  const profileControls = useAnimation();
  const projectsControls = useAnimation();
  const hobbiesControls = useAnimation();

  const { ref: profileRef, inView: profileInView } = useInView({ triggerOnce: true });
  const { ref: projectsRef, inView: projectsInView } = useInView({ triggerOnce: true });
  const { ref: hobbiesRef, inView: hobbiesInView } = useInView({ triggerOnce: true });

  useEffect(() => {
    profileControls.start(profileInView ? animations.fadeIn : animations.fadeOut);
    projectsControls.start(projectsInView ? animations.fadeIn : animations.fadeOut);
    hobbiesControls.start(hobbiesInView ? animations.fadeIn : animations.fadeOut);
  }, [profileInView, projectsInView, hobbiesInView, profileControls, projectsControls, hobbiesControls]);

  useEffect(() => {
    const handleScroll = () => {
      const profilePos = profileRef.current?.getBoundingClientRect().top;
      const projectsPos = projectsRef.current?.getBoundingClientRect().top;
      const hobbiesPos = hobbiesRef.current?.getBoundingClientRect().top;

      if (hobbiesPos < window.innerHeight && hobbiesPos > 0) {
        setActiveTab("hobbies");
      } else if (projectsPos < window.innerHeight && projectsPos > 0) {
        setActiveTab("projects");
      } else if (profilePos < window.innerHeight && profilePos > 0) {
        setActiveTab("profile");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [profileRef, projectsRef, hobbiesRef]);

  return (
    <div className={`${inter.className} bg-gray-900 text-white min-h-screen flex`}>
      {/* Left Side Tab Bar */}
      <aside className="w-1/6 bg-black text-white h-screen fixed top-0 left-0 flex flex-col items-center py-4">
        <div className="flex flex-col space-y-4 w-full">
          {tabItems.map((item) => (
            <div
              key={item.id}
              className={`p-4 cursor-pointer rounded-full transition duration-300 flex flex-col items-center ${
                activeTab === item.id ? "bg-gray-800" : "hover:bg-gray-700"
              }`}
              onClick={() => {
                document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                setActiveTab(item.id);
              }}
            >
              <div className="text-xl">{item.icon}</div>
              <span className="text-xs mt-2">{item.label}</span>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <div className="w-5/6 ml-auto p-6">
        {/* Top Section - Banner */}
        <section className="relative bg-gray-800 text-white h-64 flex items-center justify-center mb-6 overflow-hidden">
          <Image
            src="https://via.placeholder.com/1200x400"
            alt="Banner"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 opacity-50"
          />
          <motion.div
            className="relative z-10 p-6 bg-black bg-opacity-70 rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
            <p className="text-lg mt-2">Showcasing my skills, projects, and more.</p>
          </motion.div>
        </section>

        {/* Profile Section */}
        <motion.section id="profile" ref={profileRef} animate={profileControls} initial={animations.fadeOut} className="bg-black text-white p-6 rounded-lg shadow-lg mb-6">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <Image
              src="https://via.placeholder.com/120"
              alt="Profile Picture"
              width={120}
              height={120}
              className="rounded-full border-4 border-gray-800"
            />
            <div>
              <h1 className="text-3xl font-semibold">User Name</h1>
              <p className="text-gray-400">Short bio or title about the user.</p>
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section id="projects" ref={projectsRef} animate={projectsControls} initial={animations.fadeOut} className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-300">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Example Project Cards */}
            <motion.div
              className="relative bg-gray-800 text-white p-6 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 group"
              initial={animations.slideDown}
              whileInView={animations.slideUp}
              viewport={{ once: true }}
            >
              <Image
                src="https://via.placeholder.com/400x250"
                alt="Project 1"
                width={400}
                height={250}
                className="w-full h-40 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold mb-2">Project 1</h3>
              <p>Description of project 1.</p>

              {/* Buttons */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-70">
                <a href="#" className="text-white py-2 px-4 rounded-lg border border-white mx-2 hover:bg-gray-700 transition-colors duration-300">Visit Website</a>
                <a href="#" className="text-white py-2 px-4 rounded-lg border border-white mx-2 hover:bg-gray-700 transition-colors duration-300">Source Code</a>
              </div>
            </motion.div>
            <motion.div
              className="relative bg-gray-800 text-white p-6 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 group"
              initial={animations.slideDown}
              whileInView={animations.slideUp}
              viewport={{ once: true }}
            >
              <Image
                src="https://via.placeholder.com/400x250"
                alt="Project 2"
                width={400}
                height={250}
                className="w-full h-40 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold mb-2">Project 2</h3>
              <p>Description of project 2.</p>

              {/* Buttons */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-70">
                <a href="#" className="text-white py-2 px-4 rounded-lg border border-white mx-2 hover:bg-gray-700 transition-colors duration-300">Visit Website</a>
                <a href="#" className="text-white py-2 px-4 rounded-lg border border-white mx-2 hover:bg-gray-700 transition-colors duration-300">Source Code</a>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Hobbies Section */}
        <motion.section id="hobbies" ref={hobbiesRef} animate={hobbiesControls} initial={animations.fadeOut}>
          <h2 className="text-2xl font-semibold mb-4 text-gray-300">Hobbies</h2>
          <div className="space-y-4">
            <motion.div
              className="bg-gray-800 text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105"
              initial={animations.slideDown}
              whileInView={animations.slideUp}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-2">Hobby 1</h3>
              <p>Description of hobby 1.</p>
            </motion.div>
            <motion.div
              className="bg-gray-800 text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105"
              initial={animations.slideDown}
              whileInView={animations.slideUp}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-2">Hobby 2</h3>
              <p>Description of hobby 2.</p>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
