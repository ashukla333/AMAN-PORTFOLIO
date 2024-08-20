import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import { motion, useAnimation } from "framer-motion";
import {
  FaUser,
  FaProjectDiagram,
  FaListAlt,
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGit,
  FaDatabase,
  FaJsSquare,
  FaBootstrap,
  FaHome,
  FaBriefcase,
  FaAddressCard,
  FaPhoneAlt,
  FaRegEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { SiExpress, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import HomePage from "@/components/RightSection/HomePage";
import About from "@/components/RightSection/About";
import Skills from "@/components/RightSection/Skills";
import Resume from "@/components/RightSection/Resume";
import PortFolio from "@/components/RightSection/PortFolio";
import Services from "@/components/RightSection/Services";
import Testimonial from "@/components/RightSection/Testimonial";
import Contact from "@/components/RightSection/Contact";

const inter = Inter({ subsets: ["latin"] });

const tabItems = [
  { id: "home", label: "Home", icon: <FaHome /> },
  { id: "about", label: "About", icon: <FaUser /> },
  { id: "skills", label: "Skills", icon: <FaCode /> },
  { id: "resume", label: "Resume", icon: <FaBriefcase /> },
  { id: "portfolio", label: "Portfolio", icon: <FaProjectDiagram /> },
  { id: "services", label: "Services", icon: <FaListAlt /> },
  { id: "testimonial", label: "Testimonial", icon: <FaAddressCard /> },
  { id: "contact", label: "Contact", icon: <FaPhoneAlt /> },
];

const animations = {
  fadeIn: { opacity: 1, transition: { duration: 0.5 } },
  fadeOut: { opacity: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");

  const profileControls = useAnimation();
  const homeControls = useAnimation();
  const aboutControls = useAnimation();
  const skillsControls = useAnimation();
  const resumeControls = useAnimation();
  const portfolioControls = useAnimation();
  const servicesControls = useAnimation();
  const testimonialControls = useAnimation();
  const contactControls = useAnimation();

  const { ref: homeRef, inView: homeInView } = useInView({ triggerOnce: true });
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
  });
  const { ref: skillsRef, inView: skillsInView } = useInView({
    triggerOnce: true,
  });
  const { ref: resumeRef, inView: resumeInView } = useInView({
    triggerOnce: true,
  });
  const { ref: portfolioRef, inView: portfolioInView } = useInView({
    triggerOnce: true,
  });
  const { ref: servicesRef, inView: servicesInView } = useInView({
    triggerOnce: true,
  });
  const { ref: testimonialRef, inView: testimonialInView } = useInView({
    triggerOnce: true,
  });
  const { ref: contactRef, inView: contactInView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    profileControls.start(homeInView ? animations.fadeIn : animations.fadeOut);
    homeControls.start(homeInView ? animations.fadeIn : animations.fadeOut);
    aboutControls.start(aboutInView ? animations.fadeIn : animations.fadeOut);
    skillsControls.start(skillsInView ? animations.fadeIn : animations.fadeOut);
    resumeControls.start(resumeInView ? animations.fadeIn : animations.fadeOut);
    portfolioControls.start(
      portfolioInView ? animations.fadeIn : animations.fadeOut
    );
    servicesControls.start(
      servicesInView ? animations.fadeIn : animations.fadeOut
    );
    testimonialControls.start(
      testimonialInView ? animations.fadeIn : animations.fadeOut
    );
    contactControls.start(
      contactInView ? animations.fadeIn : animations.fadeOut
    );
  }, [
    homeInView,
    aboutInView,
    skillsInView,
    resumeInView,
    portfolioInView,
    servicesInView,
    testimonialInView,
    contactInView,
    homeControls,
    aboutControls,
    skillsControls,
    resumeControls,
    portfolioControls,
    servicesControls,
    testimonialControls,
    contactControls,
    profileControls,
  ]);

  useEffect(() => {
    const handleScroll = () => {
      const homePos = homeRef.current?.getBoundingClientRect().top;
      const aboutPos = aboutRef.current?.getBoundingClientRect().top;
      const skillsPos = skillsRef.current?.getBoundingClientRect().top;
      const resumePos = resumeRef.current?.getBoundingClientRect().top;
      const portfolioPos = portfolioRef.current?.getBoundingClientRect().top;
      const servicesPos = servicesRef.current?.getBoundingClientRect().top;
      const testimonialPos =
        testimonialRef.current?.getBoundingClientRect().top;
      const contactPos = contactRef.current?.getBoundingClientRect().top;

      if (contactPos < window.innerHeight && contactPos > 0) {
        setActiveTab("contact");
      } else if (testimonialPos < window.innerHeight && testimonialPos > 0) {
        setActiveTab("testimonial");
      } else if (servicesPos < window.innerHeight && servicesPos > 0) {
        setActiveTab("services");
      } else if (portfolioPos < window.innerHeight && portfolioPos > 0) {
        setActiveTab("portfolio");
      } else if (resumePos < window.innerHeight && resumePos > 0) {
        setActiveTab("resume");
      } else if (skillsPos < window.innerHeight && skillsPos > 0) {
        setActiveTab("skills");
      } else if (aboutPos < window.innerHeight && aboutPos > 0) {
        setActiveTab("about");
      } else if (homePos < window.innerHeight && homePos > 0) {
        setActiveTab("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [
    homeRef,
    aboutRef,
    skillsRef,
    resumeRef,
    portfolioRef,
    servicesRef,
    testimonialRef,
    contactRef,
  ]);

  const skills = [
    { icon: <FaHtml5 className="text-red-600" />, label: "HTML", level: 90 },
    { icon: <FaCss3Alt className="text-blue-600" />, label: "CSS", level: 75 },
    {
      icon: <FaReact className="text-blue-400" />,
      label: "React.js",
      level: 80,
    },
    {
      icon: <FaNodeJs className="text-green-600" />,
      label: "Node.js",
      level: 60,
    },
    { icon: <FaGit className="text-orange-600" />, label: "Git", level: 70 },
    {
      icon: <FaDatabase className="text-yellow-500" />,
      label: "MongoDB",
      level: 60,
    },
    {
      icon: <FaJsSquare className="text-yellow-600" />,
      label: "JavaScript",
      level: 80,
    },
    {
      icon: <FaBootstrap className="text-purple-600" />,
      label: "Bootstrap",
      level: 75,
    },
    {
      icon: <SiTailwindcss className="text-teal-500" />,
      label: "Tailwind CSS",
      level: 85,
    },
    {
      icon: <SiNextdotjs className="text-black" />,
      label: "Next.js",
      level: 75,
    },
    {
      icon: <SiExpress className="text-gray-400" />,
      label: "Express.js",
      level: 55,
    },
  ];

  const socialMedia = [
    { icon: <FaFacebookF />, url: "#" },
    { icon: <FaTwitter />, url: "#" },
    { icon: <FaLinkedinIn />, url: "#" },
    { icon: <FaGithub />, url: "#" },
  ];

  return (
    <div
      className={`${inter.className} bg-white playfair-display text-black min-h-screen flex`}
    >
      {/* Left Side Tab Bar */}
      <aside className="w-[18%]  overflow-y-scroll scrollbar-hide  text-gray-800 border-r-2 border-black bg-white h-screen fixed top-0 left-0 flex flex-col items-center py-4">
        {/* Profile Section */}
        <motion.section
          id="profile"
          ref={homeRef}
          animate={homeControls}
          initial={animations.fadeOut}
          className="flex flex-col gap-2"
        >
          <div className="flex flex-col gap-3 md:flex-col items-center">
            <Image
              src="/aman.jpg"
              alt="Profile Picture"
              width={1000}
              height={1000}
              className="rounded-full h-20 md:block hidden w-20 border-2 border-gray-800 object-cover"
            />
            <h1 className="text-xl font-bold  md:block hidden">Aman Shukla</h1>
            <span className="bg-clip-text md:block hidden md:text-sm text-base lg:text-lg animate-pulse text-transparent bg-gradient-to-r from-amber-400 via-red-500 to-pink-500">
          Frontend Developer
          </span>
          </div>
          <div className="flex md:flex-row flex-col gap-4 md:mt-4 justify-center">
            {socialMedia.map((item, index) => (
              <motion.a
                key={index}
                href={item.url}
                whileHover={{ scale: 1.2, color: "#000" }}
                className="text-gray-600 text-xl"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* Tab Navigation */}
        <nav className="flex flex-col gap-4 mt-8">
          {tabItems.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center rounded-sm border-2  gap-3  font-semibold px-2 py-2 w-full ${
                activeTab === tab.id
                  ? "bg-black   border-gray-200  text-white"
                  : "hover:bg-gray-200   text-gray-800"
              }`}
            >
              <span>{tab.icon}</span>
              <span className="md:block text-[13px]   hidden">{tab.label}</span>
            </motion.button>
          ))}
        </nav>
      </aside>

      {/* Right Side Content */}
      <main className="w-[82%] ml-auto bg-gray-50 ">
        <motion.section
          id="home"
          ref={homeRef}
          animate={homeControls}
          initial={animations.fadeOut}
          className={` ${activeTab === "home" ? "" : "hidden"}`}
        >
          <HomePage />
        </motion.section>

        <motion.section
          id="about"
          ref={aboutRef}
          animate={aboutControls}
          initial={animations.fadeOut}
          className={`p-6 ${activeTab === "about" ? "" : "hidden"}`}
        >
          <About />
        </motion.section>

        <motion.section
          id="skills"
          ref={skillsRef}
          animate={skillsControls}
          initial={animations.fadeOut}
          className={`p-6 ${activeTab === "skills" ? "" : "hidden"}`}
        >
          <div>
            <Skills skills={skills} />
          </div>
        </motion.section>

        <motion.section
          id="resume"
          ref={resumeRef}
          animate={resumeControls}
          initial={animations.fadeOut}
          className={`p-6 ${activeTab === "resume" ? "" : "hidden"}`}
        >
          <div>
            <Resume />
          </div>
        </motion.section>

        <motion.section
          id="portfolio"
          ref={portfolioRef}
          animate={portfolioControls}
          initial={animations.fadeOut}
          className={`p-6 ${activeTab === "portfolio" ? "" : "hidden"}`}
        >
          <PortFolio />
        </motion.section>

        <motion.section
          id="services"
          ref={servicesRef}
          animate={servicesControls}
          initial={animations.fadeOut}
          className={`p-6 ${activeTab === "services" ? "" : "hidden"}`}
        >
          <div>
            <Services />
          </div>
        </motion.section>

        <motion.section
          id="testimonial"
          ref={testimonialRef}
          animate={testimonialControls}
          initial={animations.fadeOut}
          className={`p-6 ${activeTab === "testimonial" ? "" : "hidden"}`}
        >
          <div>
            <Testimonial />
          </div>
        </motion.section>

        <motion.section
          id="contact"
          ref={contactRef}
          animate={contactControls}
          initial={animations.fadeOut}
          className={`p-6 ${activeTab === "contact" ? "" : "hidden"}`}
        >
          <Contact />
        </motion.section>
      </main>
    </div>
  );
}
