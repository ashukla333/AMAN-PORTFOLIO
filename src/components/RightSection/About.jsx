import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useRouter } from "next/router";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBriefcase,
  FaGraduationCap,
  FaUserAlt,
  FaCoffee,
  FaCheckCircle,
  FaCode,
  FaArrowRight,
} from "react-icons/fa";

const personal = [
  { icon: <FaUserAlt />, label: "FULL NAME", value: "Aman Shukla" },
  { icon: <FaBriefcase />, label: "EXPERIENCE", value: "3.5+ Years" },
  { icon: <FaGraduationCap />, label: "DEGREE", value: "B.E. Computer Engineering" },
  { icon: <FaMapMarkerAlt />, label: "LOCATION", value: "Mumbai, India" },
  { icon: <FaEnvelope />, label: "EMAIL", value: "amanshukla3747@gmail.com" },
  { icon: <FaPhoneAlt />, label: "PHONE", value: "+91 9324596328" },
];

const traits = [
  "Scalable SPA / SSR architectures in React.js & Next.js",
  "Performance optimization & Core Web Vitals (Lighthouse 90+)",
  "Modern state management (Redux Toolkit, React Query, Zustand)",
  "API integration, authentication & VPS deployments",
  "SEO & structured data implementation",
  "Frontend team leadership & code reviews",
];

const interests = ["Typography", "Motion Design", "3D / WebGL", "Photography", "Coffee", "Cinema"];
const languages = [
  { name: "English", level: "Fluent" },
  { name: "Hindi", level: "Native" },
  { name: "Marathi", level: "Conversational" },
];

const About = () => {
  const ref = useRef(null);
  const router = useRouter();

  useEffect(() => {
    let ScrollTrigger;
    const ctx = gsap.context(async () => {
      ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
      gsap.registerPlugin(ScrollTrigger);

      gsap.set(".ab-title", { y: 100, opacity: 0 });
      gsap.set(".ab-anim", { y: 30, opacity: 0 });

      gsap.to(".ab-title", {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 1,
        ease: "power4.out",
      });
      gsap.to(".ab-anim", {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.3,
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative bg-[#050505] overflow-hidden grain">
      <div className="absolute inset-0 bg-grid-soft mask-radial opacity-60 pointer-events-none"></div>

      {/* Header */}
      <div className="relative z-10 border-b border-white/[0.06] px-6 md:px-10 py-5 flex items-center justify-between font-mono text-[10px] tracking-[0.25em] text-white/50">
        <span className="ab-anim">CHAPTER 01 / ABOUT</span>
        <span className="ab-anim">CURRENTLY · OPEN TO OPPORTUNITIES</span>
      </div>

      <div className="relative z-10 px-6 md:px-10 pt-12 md:pt-16 pb-20">
        {/* Title block */}
        <div className="ab-anim section-num mb-8">01 / WHO IS AMAN?</div>

        <h1 className="font-display font-bold leading-[0.9] tracking-tighter text-[14vw] sm:text-[10vw] lg:text-[7.5vw] uppercase">
          <span className="mask">
            <span className="ab-title block">A frontend</span>
          </span>
          <span className="mask">
            <span className="ab-title block">
              <span className="font-serif-display italic font-normal text-white/40 normal-case">developer </span>
              who
            </span>
          </span>
          <span className="mask">
            <span className="ab-title block">builds the web.</span>
          </span>
        </h1>

        {/* Lead paragraph */}
        <div className="ab-anim mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <p className="lg:col-span-7 text-lg md:text-2xl leading-snug text-white/85 font-light">
            I’m a Frontend Engineer with{" "}
            <span className="text-white font-medium">3.5+ years</span> of
            experience building scalable web and mobile applications in{" "}
            <span className="font-serif-display italic text-white">
              React.js, Next.js
            </span>{" "}
            and React Native. I’ve shipped{" "}
            <span className="text-white">20+ production apps</span>, optimized
            Core Web Vitals and led frontend teams to deliver high-quality user
            experiences.
          </p>

          <div className="lg:col-span-5">
            <div className="section-num mb-3">MANIFESTO</div>
            <p className="text-sm text-white/55 leading-relaxed">
              I believe great products come from a balance of taste and craft.
              I aim for interfaces that are quick to load, intuitive to use, and
              memorable in detail — work that respects both the user and the
              team behind it.
            </p>
          </div>
        </div>

        {/* BENTO GRID */}
        <div className="ab-anim mt-16 grid grid-cols-1 md:grid-cols-12 grid-rows-none md:grid-rows-[auto_auto_auto] gap-4">
          {/* Big monogram card */}
          <div className="card md:col-span-5 md:row-span-2 p-8 md:p-10 flex flex-col justify-between relative min-h-[420px]">
            <div>
              <div className="section-num">SIGNATURE</div>
              <h3 className="mt-4 font-display text-2xl tracking-tight">
                The mark of <span className="font-serif-display italic text-white/40">craft.</span>
              </h3>
            </div>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center">
                <div className="mono-letter text-[44vw] md:text-[20vw] leading-[0.8] text-white">
                  A
                </div>
                <div className="mono-letter text-[44vw] md:text-[20vw] leading-[0.8] text-white/15 -mt-8 md:-mt-10">
                  S
                </div>
              </div>
            </div>

            <div className="relative flex justify-between font-mono text-[10px] tracking-[0.25em] text-white/40">
              <span>SIN/ AS-26</span>
              <span>VERSION 2.0</span>
            </div>
          </div>

          {/* Personal info */}
          <div className="card md:col-span-7 p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="section-num">DOSSIER · 01</div>
              <span className="font-mono text-[10px] tracking-[0.25em] text-white/40">PERSONAL</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
              {personal.map((p, i) => (
                <div key={i} className="flex items-start gap-3 border-b border-white/[0.06] pb-3">
                  <span className="mt-1 text-white/60">{p.icon}</span>
                  <div className="flex flex-col min-w-0">
                    <span className="font-mono text-[10px] tracking-[0.25em] text-white/40">
                      {p.label}
                    </span>
                    <span className="text-sm text-white truncate">{p.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What I do */}
          <div className="card md:col-span-4 p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="section-num">EXPERTISE · 02</div>
              <FaCode className="text-white/40" />
            </div>
            <ul className="space-y-3">
              {traits.slice(0, 3).map((t, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/75">
                  <FaCheckCircle className="mt-1 text-white text-xs flex-shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Continued */}
          <div className="card md:col-span-3 p-8">
            <div className="section-num mb-6">PRINCIPLES · 03</div>
            <ul className="space-y-3">
              {traits.slice(3).map((t, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/75">
                  <FaCheckCircle className="mt-1 text-white text-xs flex-shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Interests */}
          <div className="card md:col-span-12 p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="section-num">INTERESTS · 04</div>
              <FaCoffee className="text-white/40" />
            </div>
            <div className="flex flex-wrap gap-3">
              {interests.map((i, idx) => (
                <span
                  key={idx}
                  className="chip hover:bg-white hover:text-black hover:border-white transition-all duration-300 cursor-default"
                >
                  {String(idx + 1).padStart(2, "0")} · {i}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="card md:col-span-5 p-8">
            <div className="section-num mb-6">LANGUAGES · 05</div>
            <div className="space-y-4">
              {languages.map((l, i) => (
                <div key={i} className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                  <span className="font-display text-lg">{l.name}</span>
                  <span className="font-mono text-[10px] tracking-[0.25em] text-white/40">
                    {l.level.toUpperCase()}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="card md:col-span-7 p-8 md:p-10 flex flex-col justify-between min-h-[220px]">
            <div className="section-num">NEXT STEP · 06</div>
            <h3 className="font-display text-3xl md:text-4xl tracking-tighter leading-tight">
              See what I’ve been{" "}
              <span className="font-serif-display italic text-white/40">building.</span>
            </h3>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => router.push("/projects")}
                className="btn-fill inline-flex items-center gap-3 border border-white/30 px-6 py-3 text-sm"
              >
                Selected Work <FaArrowRight />
              </button>
              <button
                onClick={() => router.push("/resume")}
                className="btn-fill-dark inline-flex items-center gap-3 bg-white text-black px-6 py-3 text-sm"
              >
                Resume <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
