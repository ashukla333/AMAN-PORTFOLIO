import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import {
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiRedux,
  SiReactquery,
  SiFigma,
  SiVercel,
  SiPostman,
  SiFramer,
  SiGreensock,
  SiGraphql,
  SiMongodb,
  SiRedis,
  SiBootstrap,
  SiMui,
} from "react-icons/si";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGit,
  FaJsSquare,
  FaArrowRight,
  FaMobileAlt,
} from "react-icons/fa";

const groups = [
  {
    title: "Frontend",
    num: "01",
    items: [
      { icon: <FaReact />, label: "React.js" },
      { icon: <SiNextdotjs />, label: "Next.js" },
      { icon: <FaMobileAlt />, label: "React Native" },
      { icon: <SiTypescript />, label: "TypeScript" },
      { icon: <FaHtml5 />, label: "HTML5" },
      { icon: <FaCss3Alt />, label: "CSS3" },
      { icon: <SiTailwindcss />, label: "Tailwind CSS" },
      { icon: <SiBootstrap />, label: "Bootstrap" },
      { icon: <SiMui />, label: "Material UI" },
    ],
  },
  {
    title: "State & Data",
    num: "02",
    items: [
      { icon: <SiRedux />, label: "Redux" },
      { icon: <SiRedux />, label: "Redux Toolkit" },
      { icon: <SiReactquery />, label: "React Query" },
      { icon: <FaReact />, label: "Context API" },
      { icon: <span className="font-mono text-sm">Z</span>, label: "Zustand" },
    ],
  },
  {
    title: "Backend & Database",
    num: "03",
    items: [
      { icon: <FaNodeJs />, label: "Node.js" },
      { icon: <SiExpress />, label: "Express.js" },
      { icon: <span className="font-mono text-sm">{`{ }`}</span>, label: "REST APIs" },
      { icon: <SiGraphql />, label: "GraphQL" },
      { icon: <SiMongodb />, label: "MongoDB" },
      { icon: <SiRedis />, label: "Redis" },
    ],
  },
  {
    title: "Motion & Tools",
    num: "04",
    items: [
      { icon: <SiGreensock />, label: "GSAP" },
      { icon: <SiFramer />, label: "Framer Motion" },
      { icon: <FaGit />, label: "Git / GitHub" },
      { icon: <SiVercel />, label: "Vercel" },
      { icon: <SiPostman />, label: "Postman" },
      { icon: <SiFigma />, label: "Figma" },
    ],
  },
];

const coreSkills = [
  "SPA Development",
  "Server-Side Rendering (SSR)",
  "Performance Optimization",
  "Core Web Vitals",
  "SEO Optimization",
  "API Integration",
  "Authentication",
  "Responsive Design",
  "Cross-browser Compatibility",
  "VPS Deployment",
  "Team Leadership",
  "Code Reviews",
];

const Skills = () => {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".sk-title", { y: 100, opacity: 0 });
      gsap.set(".sk-anim", { y: 30, opacity: 0 });

      gsap.to(".sk-title", {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 1,
        ease: "power4.out",
      });
      gsap.to(".sk-anim", {
        y: 0,
        opacity: 1,
        stagger: 0.04,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.3,
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative bg-[#050505] overflow-hidden grain">
      <div className="absolute inset-0 bg-grid-soft mask-radial opacity-50 pointer-events-none"></div>

      <div className="relative z-10 border-b border-white/[0.06] px-6 md:px-10 py-5 flex items-center justify-between font-mono text-[10px] tracking-[0.25em] text-white/50">
        <span className="sk-anim">CHAPTER 02 / SKILLS</span>
        <span className="sk-anim">CRAFT · MASTERY · TOOLING</span>
      </div>

      <div className="relative z-10 px-6 md:px-10 pt-12 md:pt-16 pb-20">
        <div className="sk-anim section-num mb-8">02 / TOOLS OF THE TRADE</div>

        <h1 className="font-display font-bold leading-[0.9] tracking-tighter text-[14vw] sm:text-[10vw] lg:text-[7.5vw] uppercase">
          <span className="mask">
            <span className="sk-title block">Skills,</span>
          </span>
          <span className="mask">
            <span className="sk-title block">
              <span className="font-serif-display italic font-normal text-white/40 normal-case">stack</span> &amp;
            </span>
          </span>
          <span className="mask">
            <span className="sk-title block">toolset.</span>
          </span>
        </h1>

        <p className="sk-anim mt-10 max-w-2xl text-lg md:text-xl text-white/75 leading-snug">
          A complete snapshot of the technologies I use day-to-day — from
          foundational languages and state management to motion libraries and
          dev tooling. Built for shipping scalable, performant products.
        </p>

        {/* GROUPS */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06]">
          {groups.map((g, gi) => (
            <div key={gi} className="sk-anim bg-[#050505] p-8">
              <div className="flex items-baseline justify-between mb-8">
                <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
                  {g.title}
                  <span className="font-serif-display italic font-normal text-white/40 text-lg ml-2">
                    /{g.items.length}
                  </span>
                </h3>
                <span className="font-mono text-[10px] tracking-[0.25em] text-white/40">
                  / {g.num}
                </span>
              </div>

              <ul className="divide-y divide-white/[0.06]">
                {g.items.map((sk, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-between py-3 group cursor-default"
                  >
                    <span className="flex items-center gap-4">
                      <span className="font-mono text-[10px] text-white/30 w-6">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-xl text-white/60 group-hover:text-white transition-colors w-7 flex items-center justify-center">
                        {sk.icon}
                      </span>
                      <span className="text-base text-white/90 group-hover:text-white transition-colors">
                        {sk.label}
                      </span>
                    </span>
                    <FaArrowRight className="text-white/20 group-hover:text-white group-hover:translate-x-1 transition-all text-xs" />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Core skills chips */}
        <div className="sk-anim mt-16">
          <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
            <h3 className="font-display text-2xl md:text-3xl tracking-tight">
              Core <span className="font-serif-display italic text-white/40">expertise.</span>
            </h3>
            <div className="section-num">05 — DAY TO DAY</div>
          </div>

          <div className="flex flex-wrap gap-2">
            {coreSkills.map((s, i) => (
              <span
                key={i}
                className="chip hover:bg-white hover:text-black hover:border-white transition-all duration-300 cursor-default"
              >
                {String(i + 1).padStart(2, "0")} · {s}
              </span>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="sk-anim mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06]">
          {[
            { num: "3.5+", label: "Years of experience" },
            { num: "30+", label: "Apps shipped" },
            { num: "1000+", label: "Users supported" },
            { num: "90+", label: "Lighthouse score" },
          ].map((s, i) => (
            <div key={i} className="bg-[#050505] p-7 md:p-8">
              <div className="metric-num text-4xl md:text-6xl">{s.num}</div>
              <div className="font-mono text-[10px] tracking-[0.25em] text-white/40 mt-3">
                {s.label.toUpperCase()}
              </div>
            </div>
          ))}
        </div>

        {/* Footer cue */}
        <div className="sk-anim mt-16 flex items-center justify-between pt-8 border-t border-white/[0.06] font-mono text-[10px] tracking-[0.25em] text-white/40">
          <span>END OF CHAPTER 02</span>
          <Link href="/resume" className="link-underline inline-flex items-center gap-2">
            NEXT — RESUME (03) <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Skills;
