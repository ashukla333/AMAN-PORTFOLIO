import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { gsap } from "gsap";
import {
  FaArrowRight,
  FaArrowDown,
  FaReact,
  FaNodeJs,
  FaJsSquare,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiMongodb } from "react-icons/si";

const stack = [
  "REACT.JS",
  "NEXT.JS",
  "TYPESCRIPT",
  "TAILWIND CSS",
  "GSAP",
  "FRAMER MOTION",
  "NODE.JS",
  "MONGODB",
  "EXPRESS",
  "REDUX",
];

const services = [
  { title: "Web Development", desc: "React, Next.js, modern stacks" },
  { title: "UI Engineering", desc: "Design-system & component work" },
  { title: "E-commerce", desc: "Storefronts & admin dashboards" },
  { title: "Motion & UX", desc: "GSAP, Framer Motion, micro-interactions" },
];

const HomePage = () => {
  const router = useRouter();
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".hero-anim", { y: 60, opacity: 0 });
      gsap.set(".hero-line", { y: 110, opacity: 0 });
      gsap.set(".hero-card", { y: 40, opacity: 0 });

      const tl = gsap.timeline({ delay: 1.6 });
      tl.to(".hero-anim", {
        y: 0,
        opacity: 1,
        stagger: 0.07,
        duration: 0.8,
        ease: "power3.out",
      })
        .to(
          ".hero-line",
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 1.1,
            ease: "power4.out",
          },
          "-=0.6"
        )
        .to(
          ".hero-card",
          {
            y: 0,
            opacity: 1,
            stagger: 0.08,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.7"
        );

      gsap.to(".scroll-cue", {
        y: 8,
        repeat: -1,
        yoyo: true,
        duration: 1.2,
        ease: "sine.inOut",
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative bg-[#050505] overflow-hidden grain">
      <div className="absolute inset-0 bg-grid-soft mask-radial pointer-events-none"></div>

      {/* Top status row */}
      <div className="relative z-10 border-b border-white/[0.06] px-4 sm:px-6 md:px-10 py-3 sm:py-4 flex flex-wrap items-center justify-between gap-2 sm:gap-3 font-mono text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] text-white/50">
        <div className="hero-anim flex items-center gap-2 sm:gap-3">
          <span>EDITION ’26</span>
          <span className="text-white/20">/</span>
          <span>VOL.02 — FRONTEND</span>
        </div>
        <div className="hero-anim flex items-center gap-2 sm:gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-dot"></span>
          <span className="hidden xs:inline">AVAILABLE FOR HIRE — REMOTE / MUMBAI</span>
          <span className="xs:hidden">AVAILABLE · MUMBAI</span>
        </div>
      </div>

      {/* HERO — Massive editorial type */}
      <div className="relative z-10 px-4 sm:px-6 md:px-10 pt-8 sm:pt-10 md:pt-16 pb-8">
        <div className="hero-anim section-num mb-6 sm:mb-8">{"INDEX / 00 — HELLO WORLD"}</div>

        <h1 className="font-display font-bold leading-[0.85] tracking-tighter text-[16vw] sm:text-[14vw] lg:text-[11vw] uppercase break-words">
          <span className="mask">
            <span className="hero-line block">Frontend</span>
          </span>
          <span className="mask">
            <span className="hero-line flex items-baseline gap-3 sm:gap-4 flex-wrap">
              <span className="font-serif-display italic font-normal text-white/40 normal-case">developer</span>
              <span className="w-[12vw] h-[2px] bg-white/30 hidden sm:inline-block"></span>
            </span>
          </span>
          <span className="mask">
            <span className="hero-line block">&amp; builder.</span>
          </span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10 sm:mt-12">
          {/* Intro copy */}
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="hero-anim text-white/80 text-sm sm:text-base md:text-lg leading-relaxed">
              I’m <span className="text-white font-semibold">Aman Shukla</span> —
              a Frontend Engineer &amp; Team Lead based in Mumbai. I build
              scalable web and mobile applications with{" "}
              <span className="text-white">React.js, Next.js</span> and React
              Native — with{" "}
              <span className="text-white">3.5+ years</span> of shipping
              production-grade products and 20+ websites.
            </p>

            <div className="hero-anim mt-6 sm:mt-7 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={() => router.push("/projects")}
                className="btn-fill inline-flex items-center justify-center gap-3 border border-white/30 px-5 sm:px-7 py-3.5 sm:py-4 text-xs sm:text-sm font-medium tracking-tight w-full sm:w-auto"
              >
                Browse Selected Work
                <FaArrowRight />
              </button>
              <button
                onClick={() => router.push("/contact")}
                className="btn-fill-dark inline-flex items-center justify-center gap-3 bg-white text-black px-5 sm:px-7 py-3.5 sm:py-4 text-xs sm:text-sm font-medium tracking-tight w-full sm:w-auto"
              >
                Start a Project
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MARQUEE */}
      <div className="relative z-10 border-y border-white/[0.06] py-4 sm:py-6 overflow-hidden mask-fade-edges hero-anim">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...stack, ...stack].map((t, i) => (
            <span
              key={i}
              className="font-display text-2xl sm:text-3xl md:text-5xl px-5 sm:px-8 text-white/40 hover:text-white transition-colors"
            >
              {t} <span className="text-white/15">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* BENTO GRID — Identity / Stats / Stack / Quote */}
      <div className="relative z-10 px-4 sm:px-6 md:px-10 py-10 sm:py-14 grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Big monogram card */}
        <div className="hero-card card md:col-span-5 md:row-span-2 p-6 sm:p-8 md:p-10 relative overflow-hidden flex flex-col justify-between gap-6 min-h-[320px] sm:min-h-[360px]">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="section-num">IDENTITY · 01</div>
              <div className="mt-3 sm:mt-4 font-display text-lg sm:text-xl md:text-2xl tracking-tight">
                Aman Shukla<span className="font-serif-display italic text-white/40">,</span>
                <br />
                <span className="text-white/60">Frontend Developer.</span>
              </div>
            </div>
            <span className="font-mono text-[10px] text-white/40 shrink-0">IN/01</span>
          </div>

          <div className="relative h-[140px] sm:h-[180px] md:h-[200px] flex items-center justify-center overflow-hidden">
            <span className="mono-letter text-[160px] sm:text-[200px] md:text-[280px] text-white/95 leading-none">A</span>
            <span className="mono-letter text-[160px] sm:text-[200px] md:text-[280px] text-white/20 leading-none -ml-6 sm:-ml-8 md:-ml-10">S</span>
          </div>

          <div className="flex items-end justify-between gap-2">
            <div className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] text-white/40 font-mono">
              EST. 2023
            </div>
            <div className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] text-white/40 font-mono">
              MUMBAI · IND
            </div>
          </div>
        </div>

        {/* Stat cards */}
        <div className="hero-card card md:col-span-4 p-6 sm:p-8 flex flex-col justify-between gap-4 min-h-[160px] sm:min-h-[170px]">
          <div className="section-num">EXPERIENCE · 02</div>
          <div className="flex items-end gap-2 sm:gap-3 flex-wrap">
            <span className="metric-num text-6xl sm:text-7xl md:text-8xl leading-none">3.5</span>
            <span className="font-display text-lg sm:text-xl text-white/40 mb-2 sm:mb-3">+ YRS</span>
          </div>
          <div className="text-xs sm:text-sm text-white/60">
            Shipping production apps.
          </div>
        </div>

        <div className="hero-card card md:col-span-3 p-6 sm:p-8 flex flex-col justify-between gap-4 min-h-[160px] sm:min-h-[170px]">
          <div className="section-num">PROJECTS · 03</div>
          <div className="flex items-end gap-2 sm:gap-3">
            <span className="metric-num text-6xl sm:text-7xl md:text-8xl leading-none">20</span>
            <span className="font-display text-lg sm:text-xl text-white/40 mb-2 sm:mb-3">+</span>
          </div>
          <div className="text-xs sm:text-sm text-white/60">Sites &amp; apps delivered.</div>
        </div>

        {/* Stack icons */}
        <div className="hero-card card md:col-span-4 p-6 sm:p-8 min-h-[160px] sm:min-h-[170px]">
          <div className="section-num">PRIMARY STACK · 04</div>
          <div className="mt-4 sm:mt-5 grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 text-white/80">
            {[<FaReact key="r" />, <SiNextdotjs key="n" />, <FaJsSquare key="j" />, <SiTypescript key="t" />, <SiTailwindcss key="tw" />, <FaNodeJs key="no" />, <SiMongodb key="m" />, <span key="g" className="font-mono text-xs sm:text-sm md:text-base">GSAP</span>].map(
              (icon, i) => (
                <div
                  key={i}
                  className="aspect-square flex items-center justify-center border border-white/[0.08] text-lg sm:text-xl md:text-2xl hover:bg-white hover:text-black transition-all"
                >
                  {icon}
                </div>
              )
            )}
          </div>
        </div>

        {/* Quote */}
        <div className="hero-card card md:col-span-3 p-6 sm:p-8 min-h-[160px] sm:min-h-[170px] flex flex-col justify-between gap-4">
          <div className="section-num">PHILOSOPHY · 05</div>
          <p className="font-serif-display italic text-base sm:text-lg leading-snug text-white/85">
            “Detail isn’t a feature — it’s the product.”
          </p>
          <div className="font-mono text-[10px] tracking-[0.2em] sm:tracking-[0.25em] text-white/40">
            — AMAN, 2026
          </div>
        </div>
      </div>

      {/* SERVICES STRIP */}
      <div className="relative z-10 border-t border-white/[0.06] px-4 sm:px-6 md:px-10 py-10 sm:py-14">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-8 sm:mb-10">
          <div>
            <div className="section-num">CAPABILITIES / 06</div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-6xl tracking-tighter mt-3">
              What I do <span className="font-serif-display italic text-white/40">best.</span>
            </h2>
          </div>
          <button
            onClick={() => router.push("/skills")}
            className="link-underline text-xs sm:text-sm text-white/70 inline-flex items-center gap-2"
          >
            See full skill set <FaArrowRight />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06]">
          {services.map((s, i) => (
            <div
              key={i}
              className="hero-card bg-[#050505] p-6 sm:p-8 hover:bg-[#0d0d0d] transition-colors group cursor-default"
            >
              <div className="flex items-center justify-between mb-8 sm:mb-10">
                <span className="font-mono text-[10px] tracking-[0.2em] sm:tracking-[0.25em] text-white/40">
                  / {String(i + 1).padStart(2, "0")}
                </span>
                <FaArrowRight className="text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="font-display text-lg sm:text-xl md:text-2xl font-semibold leading-tight mb-2 sm:mb-3">
                {s.title}
              </h3>
              <p className="text-xs sm:text-sm text-white/55 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="relative z-10 px-4 sm:px-6 md:px-10 py-6 sm:py-8 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.06] font-mono text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] text-white/40">
        <span className="flex items-center gap-2 sm:gap-3">
          <FaArrowDown className="scroll-cue" /> SCROLL TO EXPLORE
        </span>
        <button
          onClick={() => router.push("/about")}
          className="link-underline"
        >
          NEXT — ABOUT (01)
        </button>
      </div>
    </section>
  );
};

export default HomePage;
