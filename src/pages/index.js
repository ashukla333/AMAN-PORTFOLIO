import { useState, useEffect, useRef } from "react";
import { Inter } from "next/font/google";
import { FaUser, FaSuitcase, FaFileAlt } from 'react-icons/fa';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [activeTab, setActiveTab] = useState("profile");
  const profileRef = useRef(null);
  const portfolioRef = useRef(null);
  const resumeRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const profilePos = profileRef.current.getBoundingClientRect().top;
      const portfolioPos = portfolioRef.current.getBoundingClientRect().top;
      const resumePos = resumeRef.current.getBoundingClientRect().top;

      if (resumePos < window.innerHeight && resumePos > 0) {
        setActiveTab("resume");
      } else if (portfolioPos < window.innerHeight && portfolioPos > 0) {
        setActiveTab("portfolio");
      } else if (profilePos < window.innerHeight && profilePos > 0) {
        setActiveTab("profile");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${inter.className} bg-gray-900 text-white`}>
      <main className="relative min-h-screen flex flex-col lg:flex-row">
        {/* Floating Tab Bar */}
        <aside className="fixed top-0 left-0 z-50 w-16 md:w-20 lg:w-24 bg-black text-white h-screen flex flex-col items-center py-4 shadow-lg">
          <div className="flex flex-col items-center space-y-6">
            <div
              className={`p-3 cursor-pointer rounded-full transition-transform duration-300 ${
                activeTab === "profile" ? "bg-gray-800 transform scale-125" : "hover:bg-gray-700"
              }`}
              onClick={() => {
                setActiveTab("profile");
                profileRef.current.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <FaUser className="w-8 h-8" />
              <span className="text-xs mt-2">Profile</span>
            </div>
            <div
              className={`p-3 cursor-pointer rounded-full transition-transform duration-300 ${
                activeTab === "portfolio" ? "bg-gray-800 transform scale-125" : "hover:bg-gray-700"
              }`}
              onClick={() => {
                setActiveTab("portfolio");
                portfolioRef.current.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <FaSuitcase className="w-8 h-8" />
              <span className="text-xs mt-2">Portfolio</span>
            </div>
            <div
              className={`p-3 cursor-pointer rounded-full transition-transform duration-300 ${
                activeTab === "resume" ? "bg-gray-800 transform scale-125" : "hover:bg-gray-700"
              }`}
              onClick={() => {
                setActiveTab("resume");
                resumeRef.current.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <FaFileAlt className="w-8 h-8" />
              <span className="text-xs mt-2">Resume</span>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 lg:ml-24 lg:mt-16 p-6">
          {/* Top Section - Banner with Parallax Scrolling */}
          <section className="relative h-96 bg-blue-700 text-white flex items-center justify-center overflow-hidden bg-fixed">
            <div className="absolute inset-0 bg-black opacity-40" />
            <div className="relative z-10 flex items-center justify-center">
              <h1 className="text-5xl font-bold transform translate-y-[-50px] animate-bannerText">Welcome to My Portfolio</h1>
            </div>
          </section>

          {/* Content Sections */}
          <div className="mt-12">
            {/* Profile Section */}
            <section ref={profileRef} className="bg-black text-white p-8 rounded-lg shadow-lg mb-12 animate-fadeIn">
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                <img
                  src="https://via.placeholder.com/120"
                  alt="Profile Picture"
                  className="w-40 h-40 rounded-full border-4 border-gray-800 shadow-lg"
                />
                <div>
                  <h1 className="text-4xl font-bold">User Name</h1>
                  <p className="text-gray-400 mt-2">Short bio or title about the user. Enthusiastic web developer with a passion for creating engaging user experiences.</p>
                </div>
              </div>
            </section>

            {/* Portfolio Section */}
            <section ref={portfolioRef} className="animate-slideIn mb-12">
              <h2 className="text-3xl font-semibold mb-6 text-gray-300">Portfolio</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Example Portfolio Items */}
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Project 1</h3>
                  <p className="text-gray-600">Description of project 1. Showcasing innovative solutions and creative designs.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Project 2</h3>
                  <p className="text-gray-600">Description of project 2. Emphasizing functionality and user experience.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Project 3</h3>
                  <p className="text-gray-600">Description of project 3. Highlighting key achievements and impactful solutions.</p>
                </div>
              </div>
            </section>

            {/* Resume Section */}
            <section ref={resumeRef} className="animate-slideIn">
              <h2 className="text-3xl font-semibold mb-8 text-gray-300">Resume</h2>
              <div className="space-y-10">
                {/* Skills */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Skills</h3>
                  <div className="flex flex-wrap gap-4">
                    <span className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg">JavaScript</span>
                    <span className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg">React</span>
                    <span className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg">Node.js</span>
                    {/* Add more skills as needed */}
                  </div>
                </div>

                {/* Qualifications */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Qualifications</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Bachelors Degree in Computer Science</li>
                    <li>Certified Web Developer</li>
                    {/* Add more qualifications as needed */}
                  </ul>
                </div>

                {/* Unique Attributes */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Unique Attributes</h3>
                  <p className="text-gray-300">Passionate about technology, problem-solving, and continuous learning.</p>
                </div>

                {/* Cards */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Cards</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <h4 className="text-lg font-semibold mb-2 text-gray-800">Card Title 1</h4>
                      <p className="text-gray-600">Card description 1 with engaging content and visuals.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <h4 className="text-lg font-semibold mb-2 text-gray-800">Card Title 2</h4>
                      <p className="text-gray-600">Card description 2 showcasing unique attributes.</p>
                    </div>
                    {/* Add more cards as needed */}
                  </div>
                </div>

                {/* Interests */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Interests</h3>
                  <p className="text-gray-300">Web development, design, and open-source projects.</p>
                </div>

                {/* Hobbies */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Hobbies</h3>
                  <p className="text-gray-300">Photography, hiking, and reading tech blogs.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
