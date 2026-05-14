import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { gsap } from "gsap";
import {
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const tabItems = [
  { id: "home", label: "Index", link: "/", num: "00" },
  { id: "about", label: "About", link: "/about", num: "01" },
  { id: "skills", label: "Skills", link: "/skills", num: "02" },
  { id: "resume", label: "Resume", link: "/resume", num: "03" },
  { id: "portfolio", label: "Work", link: "/projects", num: "04" },
  { id: "testimonial", label: "Praise", link: "/testimonial", num: "05" },
  { id: "contact", label: "Contact", link: "/contact", num: "06" },
];

export default function Layout({ children }) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [time, setTime] = useState("");
  const loaderRef = useRef(null);

  useEffect(() => {
    const match = tabItems.find((t) => t.link === router.asPath);
    if (match) setActiveTab(match.id);
  }, [router.asPath]);

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const opts = { timeZone: "Asia/Kolkata", hour12: false, hour: "2-digit", minute: "2-digit" };
      setTime(d.toLocaleTimeString("en-GB", opts));
    };
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!loaderRef.current) return;
    const tl = gsap.timeline();
    tl.to(".loader-bar", { width: "100%", duration: 1, ease: "power3.inOut" })
      .to(".loader-count", {
        textContent: 100,
        duration: 1,
        ease: "power3.inOut",
        snap: { textContent: 1 },
      }, "<")
      .to(".loader-screen", {
        y: "-100%",
        duration: 0.9,
        ease: "power4.inOut",
      }, "+=0.1");
  }, []);

  const handleTabClick = (tab) => {
    router.push(tab.link);
    setActiveTab(tab.id);
    setMobileOpen(false);
  };

  const socials = [
    { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/aman-shukla-107674247/" },
    { icon: <FaGithub />, url: "https://github.com/ashukla333" },
    { icon: <FaTwitter />, url: "#" },
    { icon: <FaInstagram />, url: "#" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-[#f5f5f5]">
      <Head>
        <title>Aman Shukla — Frontend Developer · Portfolio ’26</title>
        <meta name="description" content="Aman Shukla — Frontend Developer specializing in React, Next.js, and modern motion design." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Preloader */}
      <div
        ref={loaderRef}
        className="loader-screen fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center"
      >
        <div className="font-display text-7xl md:text-9xl font-bold tracking-tighter mb-10">
          AS<span className="font-serif-display italic text-white/40">/</span>
        </div>
        <div className="w-64 md:w-96 h-px bg-white/10 relative overflow-hidden">
          <div className="loader-bar absolute left-0 top-0 h-full bg-white w-0"></div>
        </div>
        <div className="mt-5 font-mono text-[10px] tracking-[0.3em] text-white/40">
          LOADING PORTFOLIO · <span className="loader-count">0</span>%
        </div>
      </div>

      {/* Top Navigation */}
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-[#050505]/80 border-b border-white/[0.06]">
        <div className="flex items-center justify-between px-6 md:px-10 h-[68px]">
          {/* Monogram */}
          <button
            onClick={() => handleTabClick(tabItems[0])}
            className="flex items-center gap-3 group"
          >
            <span className="w-10 h-10 border border-white/30 flex items-center justify-center font-serif-display font-bold italic text-lg group-hover:bg-white group-hover:text-black transition-all duration-500">
              A
            </span>
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="font-display font-semibold text-sm tracking-tight">
                AMAN SHUKLA
              </span>
              <span className="font-mono text-[9px] tracking-[0.25em] text-white/40">
                FRONTEND · DEVELOPER
              </span>
            </span>
          </button>

          {/* Center nav (desktop) */}
          <nav className="hidden lg:flex items-center gap-1">
            {tabItems.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab)}
                  className={`relative px-4 py-2 text-sm font-medium tracking-tight transition-colors duration-300 ${
                    isActive ? "text-white" : "text-white/50 hover:text-white"
                  }`}
                >
                  <span className="font-mono text-[9px] text-white/30 mr-2">
                    {tab.num}
                  </span>
                  {tab.label}
                  {isActive && (
                    <span className="absolute -bottom-[18px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-white/50">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-dot"></span>
              MUMBAI · {time}
            </div>
            <button
              onClick={() => handleTabClick(tabItems[6])}
              className="hidden md:inline-flex btn-fill items-center gap-2 border border-white/30 px-5 py-2.5 text-sm font-medium hover:border-white"
            >
              Let’s talk →
            </button>
            {/* Mobile burger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2"
              aria-label="Menu"
            >
              <span className={`block w-6 h-px bg-white transition-transform duration-500 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}></span>
              <span className={`block w-6 h-px bg-white transition-opacity duration-500 ${mobileOpen ? "opacity-0" : ""}`}></span>
              <span className={`block w-6 h-px bg-white transition-transform duration-500 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile slide menu */}
      <div
        className={`fixed inset-0 top-[68px] z-30 bg-[#050505] lg:hidden transition-transform duration-700 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-6 py-8">
          {tabItems.map((tab, i) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab)}
                className={`w-full flex items-baseline justify-between py-5 border-b border-white/10 ${
                  isActive ? "text-white" : "text-white/50"
                }`}
              >
                <span className="flex items-baseline gap-5">
                  <span className="font-mono text-[10px] text-white/30">{tab.num}</span>
                  <span className="font-display font-semibold text-3xl tracking-tight">{tab.label}</span>
                </span>
                <span className="font-mono text-[10px] text-white/30">→</span>
              </button>
            );
          })}

          <div className="mt-10 flex flex-wrap gap-3">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center border border-white/20"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="pt-[68px]">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] bg-[#050505]">
        <div className="px-6 md:px-10 py-12 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <div className="font-display text-4xl md:text-5xl font-bold tracking-tighter leading-none">
              Have a project?
              <br />
              <span className="font-serif-display italic text-white/40">Let’s collaborate.</span>
            </div>
            <a
              href="mailto:amanshukla3747@gmail.com"
              className="link-underline inline-block mt-6 text-lg"
            >
              amanshukla3747@gmail.com
            </a>
          </div>

          <div className="md:col-span-3">
            <div className="font-mono text-[10px] tracking-[0.25em] text-white/40 mb-4">
              NAVIGATE
            </div>
            <ul className="space-y-2 text-sm">
              {tabItems.map((t) => (
                <li key={t.id}>
                  <button
                    onClick={() => handleTabClick(t)}
                    className="link-underline text-white/70 hover:text-white"
                  >
                    {t.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="font-mono text-[10px] tracking-[0.25em] text-white/40 mb-4">
              ELSEWHERE
            </div>
            <ul className="space-y-2 text-sm">
              {socials.map((s, i) => (
                <li key={i}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-white/70 hover:text-white"
                  >
                    {["LinkedIn", "GitHub", "Twitter", "Instagram"][i]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="font-mono text-[10px] tracking-[0.25em] text-white/40 mb-4">
              BASED IN
            </div>
            <p className="text-sm text-white/70">
              Kalyan, Mumbai
              <br />
              Maharashtra, India
            </p>
          </div>
        </div>

        <div className="border-t border-white/[0.06] px-6 md:px-10 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 font-mono text-[10px] tracking-[0.25em] text-white/40">
          <span>© {new Date().getFullYear()} AMAN SHUKLA · ALL RIGHTS RESERVED</span>
          <span>BUILT WITH NEXT.JS + GSAP + TAILWIND</span>
        </div>
      </footer>
    </div>
  );
}
