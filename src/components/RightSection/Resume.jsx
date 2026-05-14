import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { FiDownload, FiArrowUpRight, FiExternalLink } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";

const RESUME_DRIVE_URL =
  "https://drive.google.com/file/d/1pNm6kkfRO2wuqnSdnn0hq7IgCz9AodTz/view";

const experience = [
  {
    role: "Frontend Engineer & Team Lead",
    company: "Realatte Ventures LLP",
    type: "Full-time",
    period: "Oct 2024 — Present",
    location: "Mumbai, India",
    stack: ["React.js", "Next.js", "Tailwind CSS", "GSAP", "GraphQL", "Strapi"],
    bullets: [
      "Developed Hus Hiranandani Education platform with Next.js, Bootstrap & Strapi — including authentication and VPS deployment.",
      "Led a team of 4 frontend developers, improving project delivery speed by 30%.",
      "Delivered 20+ real estate & corporate websites with modern UI/UX and responsive design.",
      "Reduced website load time by 35% and achieved Lighthouse performance scores above 90.",
      "Increased organic traffic by 25% through SEO optimization and structured data.",
      "Implemented advanced animations using GSAP and Framer Motion to enhance user engagement.",
      "Integrated APIs, Google Maps and Strapi CMS for scalable dynamic content management.",
    ],
  },
  {
    role: "Software Developer",
    company: "BOPPO Technologies Pvt. Ltd.",
    type: "Full-time",
    period: "Oct 2022 — Oct 2024",
    location: "Navi Mumbai, India",
    stack: ["Next.js", "React.js", "React Native", "Redux Toolkit", "React Query", "MongoDB"],
    bullets: [
      "Developed BollywoodMDB mobile application in React Native, improving mobile user engagement.",
      "Built RangePlus e-commerce platform (Next.js, Redux Toolkit, React Query, Zustand) with payment gateway supporting 1000+ users.",
      "Reduced API response time by 40% using React Query and optimized data fetching.",
      "Improved search engine ranking through SSR and technical SEO strategies.",
      "Built admin dashboards with authentication, role-based access and full CRUD operations.",
      "Collaborated with cross-functional teams to deliver scalable, high-performance applications.",
    ],
  },
];

const education = [
  {
    title: "Bachelor of Engineering — Computer Engineering",
    place: "Bharat College of Engineering",
    period: "2018 — 2022",
    note: "CGPA: 7.5 · University of Mumbai · Focus on web technologies, software engineering and DS.",
  },
];

const achievements = [
  "Delivered 20+ production-grade websites with 30% improved performance.",
  "Led a frontend team and improved development efficiency by 30%.",
  "Built scalable e-commerce platforms with secure payments serving 1000+ users.",
  "Optimized applications achieving Lighthouse scores above 90.",
];

const focus = [
  { title: "SPA & SSR", issuer: "React.js · Next.js" },
  { title: "Performance & Core Web Vitals", issuer: "Lighthouse 90+" },
  { title: "Team Leadership", issuer: "4-dev frontend pod" },
];

const Resume = () => {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".rs-title", { y: 100, opacity: 0 });
      gsap.set(".rs-anim", { y: 30, opacity: 0 });

      gsap.to(".rs-title", {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 1,
        ease: "power4.out",
      });
      gsap.to(".rs-anim", {
        y: 0,
        opacity: 1,
        stagger: 0.06,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.3,
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative bg-[#050505] overflow-hidden grain">
      <div className="absolute inset-0 bg-grid-soft mask-radial opacity-40 pointer-events-none"></div>

      <div className="relative z-10 border-b border-white/[0.06] px-6 md:px-10 py-5 flex items-center justify-between font-mono text-[10px] tracking-[0.25em] text-white/50">
        <span className="rs-anim">CHAPTER 03 / RESUME</span>
        <span className="rs-anim">CV · 2026 EDITION</span>
      </div>

      <div className="relative z-10 px-6 md:px-10 pt-12 md:pt-16 pb-20">
        <div className="rs-anim section-num mb-8">03 / EXPERIENCE TIMELINE</div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          <h1 className="lg:col-span-8 font-display font-bold leading-[0.9] tracking-tighter text-[14vw] sm:text-[10vw] lg:text-[7vw] uppercase">
            <span className="mask">
              <span className="rs-title block">A career</span>
            </span>
            <span className="mask">
              <span className="rs-title block">
                <span className="font-serif-display italic font-normal text-white/40 normal-case">in</span> brief.
              </span>
            </span>
          </h1>

          <div className="rs-anim lg:col-span-4 flex flex-col gap-3">
            <a
              href={RESUME_DRIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-fill-dark inline-flex items-center justify-between bg-white text-black px-6 py-4 font-medium text-sm"
            >
              View Resume (Drive) <FiExternalLink />
            </a>
            <a
              href={RESUME_DRIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-fill inline-flex items-center justify-between border border-white/30 px-6 py-4 font-medium text-sm"
            >
              Download PDF <FiDownload />
            </a>
            <a
              href="mailto:amanshukla3747@gmail.com"
              className="font-mono text-[10px] tracking-[0.25em] text-white/40 hover:text-white transition-colors inline-flex items-center gap-2 mt-1"
            >
              OR EMAIL ME → AMANSHUKLA3747@GMAIL.COM
            </a>
          </div>
        </div>

        {/* Quick summary */}
        <div className="rs-anim grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-3">
            <div className="section-num">SUMMARY · 00</div>
          </div>
          <p className="md:col-span-9 text-lg md:text-xl text-white/85 leading-snug">
            Frontend Engineer with{" "}
            <span className="text-white font-medium">3.5+ years</span> of
            experience building scalable web and mobile applications using
            <span className="font-serif-display italic text-white"> React.js, Next.js</span>{" "}
            and React Native. Expert in SPA, SSR and performance optimization.
            Skilled at API integration, authentication and modern state
            management. Proven record of delivering{" "}
            <span className="text-white">20+ production-grade applications</span>,
            improving Core Web Vitals and leading frontend teams.
          </p>
        </div>

        {/* Experience timeline */}
        <div className="rs-anim grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-white/[0.06] pt-12">
          <div className="md:col-span-3">
            <div className="section-num">PROFESSIONAL · 01</div>
            <h3 className="font-display text-2xl md:text-3xl tracking-tight mt-3">
              Experience
            </h3>
          </div>

          <div className="md:col-span-9 space-y-10">
            {experience.map((e, i) => (
              <article
                key={i}
                className="rs-anim card p-7 md:p-8 relative group"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  <div className="md:col-span-3">
                    <div className="font-mono text-[10px] tracking-[0.25em] text-white/40">
                      {e.period}
                    </div>
                    <div className="font-mono text-[10px] tracking-[0.25em] text-white/30 mt-2">
                      {e.location.toUpperCase()}
                    </div>
                    <div className="font-mono text-[10px] tracking-[0.25em] text-white/30 mt-2">
                      {e.type.toUpperCase()}
                    </div>
                  </div>

                  <div className="md:col-span-9">
                    <div className="flex items-baseline justify-between flex-wrap gap-2">
                      <h4 className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
                        {e.role}
                      </h4>
                      <span className="font-mono text-xs text-white/40">
                        / {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="text-white/60 mt-1 inline-flex items-center gap-2 text-sm">
                      @ {e.company} <FiArrowUpRight />
                    </div>

                    <ul className="mt-5 space-y-2 text-sm text-white/70">
                      {e.bullets.map((b, j) => (
                        <li key={j} className="flex gap-3 leading-relaxed">
                          <span className="text-white/30">—</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {e.stack.map((s, k) => (
                        <span key={k} className="chip">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="rs-anim grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-white/[0.06] pt-12 mt-16">
          <div className="md:col-span-3">
            <div className="section-num">KEY WINS · 02</div>
            <h3 className="font-display text-2xl md:text-3xl tracking-tight mt-3">
              Achievements
            </h3>
          </div>

          <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((a, i) => (
              <div key={i} className="rs-anim card p-6 flex gap-4">
                <span className="font-mono text-[10px] tracking-[0.25em] text-white/40">
                  / {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm text-white/80 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="rs-anim grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-white/[0.06] pt-12 mt-16">
          <div className="md:col-span-3">
            <div className="section-num">EDUCATION · 03</div>
            <h3 className="font-display text-2xl md:text-3xl tracking-tight mt-3">
              Studies
            </h3>
          </div>

          <div className="md:col-span-9 grid grid-cols-1 gap-4">
            {education.map((e, i) => (
              <div key={i} className="rs-anim card p-7">
                <div className="font-mono text-[10px] tracking-[0.25em] text-white/40 mb-3">
                  {e.period}
                </div>
                <h4 className="font-display text-xl md:text-2xl font-semibold leading-tight">
                  {e.title}
                </h4>
                <div className="text-sm text-white/55 mt-1">{e.place}</div>
                <p className="mt-4 text-sm text-white/70 leading-relaxed">
                  {e.note}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Focus areas */}
        <div className="rs-anim grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-white/[0.06] pt-12 mt-16">
          <div className="md:col-span-3">
            <div className="section-num">FOCUS · 04</div>
            <h3 className="font-display text-2xl md:text-3xl tracking-tight mt-3">
              Areas
            </h3>
          </div>

          <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-4">
            {focus.map((c, i) => (
              <div key={i} className="rs-anim card p-6">
                <div className="font-mono text-[10px] tracking-[0.25em] text-white/40 mb-3">
                  / {String(i + 1).padStart(2, "0")}
                </div>
                <h4 className="font-display text-lg font-semibold">{c.title}</h4>
                <p className="text-xs text-white/50 mt-2">{c.issuer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer cue */}
        <div className="rs-anim mt-16 flex items-center justify-between pt-8 border-t border-white/[0.06] font-mono text-[10px] tracking-[0.25em] text-white/40">
          <span>END OF CHAPTER 03</span>
          <Link href="/projects" className="link-underline inline-flex items-center gap-2">
            NEXT — WORK (04) <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Resume;
