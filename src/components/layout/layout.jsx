import Head from "next/head";
import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import { motion, useAnimation } from "framer-motion";
import {
  FaUser,
  FaProjectDiagram,
  FaListAlt,
  FaCode,
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

import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useRouter } from "next/router";

const tabItems = [
  { id: "home", label: "Home", icon: <FaHome />, link: "/" },
  { id: "about", label: "About", icon: <FaUser />, link: "/about" },
  { id: "skills", label: "Skills", icon: <FaCode />, link: "/skills" },
  { id: "resume", label: "Resume", icon: <FaBriefcase />, link: "/resume" },
  {
    id: "portfolio",
    label: "Projects",
    icon: <FaProjectDiagram />,
    link: "/projects",
  },
  {
    id: "testimonial",
    label: "Testimonial",
    icon: <FaAddressCard />,
    link: "/",
  },
  { id: "contact", label: "Contact", icon: <FaPhoneAlt />, link: "/" },
];

const animations = {
  fadeIn: { opacity: 1, transition: { duration: 0.5 } },
  fadeOut: { opacity: 0, transition: { duration: 0.5 } },
};

export default function Layout({ children }) {
  const Router = useRouter();
  const [activeTab, setActiveTab] = useState("");
  console.log({ Router });

  useEffect(() => {
    // Set the active tab based on the router's path
    const currentPath = Router.asPath;
    const matchingTab = tabItems.find((tab) => tab.link === currentPath);
    if (matchingTab) {
      setActiveTab(matchingTab.id);
    }
  }, [Router.asPath]); // Run the effect whenever the path changes

  const handleTabClick = (tab) => {
    Router.push(tab.link);
    setActiveTab(tab.id); // Update activeTab to the clicked tab's ID
  };

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

  const socialMedia = [
    { icon: <FaFacebookF />, url: "#" },
    { icon: <FaTwitter />, url: "#" },
    { icon: <FaLinkedinIn />, url: "#" },
    { icon: <FaGithub />, url: "#" },
  ];
  console.log(String(activeTab) == String(Router.asPath));

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>PORTFOLIO AMAN :)</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className={`bg-white playfair-display !text-[#86C232] min-h-screen flex`}
      >
        {/* Left Side Tab Bar */}
        <aside className="w-[18%]  overflow-y-scroll bg-[#222629] scrollbar-hide  text-gray-800 border-r-2 border-black  h-screen fixed top-0 left-0 flex flex-col items-center py-4">
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
                src="/amanProfile.jpeg"
                alt="Profile Picture"
                width={1000}
                height={1000}
                className="rounded-full h-20 hover-effect md:block hidden w-20 border-2 border-gray-800 object-cover"
              />
              <h1 className="text-xl font-bold !text-[#86C232]  md:block hidden">
                Aman Shukla
              </h1>
              <span className="bg-clip-text md:block hidden md:text-sm text-base lg:text-lg animate-pulse text-transparent bg-gradient-to-r from-amber-400 via-red-500 to-pink-500">
                Frontend Developer
              </span>
            </div>
            <div className="flex md:flex-row flex-col gap-4 md:mt-4 justify-center">
              {socialMedia.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.url}
                  whileHover={{ scale: 1.2, color: "#3eb489" }}
                  className="text-gray-200 text-xl"
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
                onClick={() => {
                  handleTabClick(tab);
                }}
                className={`flex items-center rounded-sm border  gap-3  font-semibold px-4 py-2 w-full ${
                  activeTab === tab.id
                    ? " !text-[#86C232]     bg-transparent"
                    : "hover:bg-gray-800 text-white  "
                }`}
              >
                <span>{tab.icon}</span>
                <span className="md:block text-[13px]   hidden">
                  {tab.label}
                </span>
              </motion.button>
            ))}
          </nav>
        </aside>

        {/* Right Side Content */}
        <main className="w-[82%] ml-auto bg-gray-50 ">
          <main className="flex-1 bg-gray-100 ">{children}</main>
        </main>
      </div>
    </div>
  );
}
