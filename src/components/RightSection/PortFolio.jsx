import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";

// Newer sites (top of list) — built at Realatte Ventures
const realestateSites = [
  {
    title: "Diamond Group",
    subtitle: "Realty / Corporate",
    category: "Next.js · Realty",
    description:
      "Premium real-estate corporate website with modern UI, project showcases and integrated CMS-driven content.",
    link: "https://daimondgroup.com",
    year: "2025",
    role: "Frontend Lead",
    stack: ["Next.js", "Tailwind", "GSAP"],
    accent: "DG",
  },
  {
    title: "Salarpuria Group",
    subtitle: "Realty / Corporate",
    category: "Next.js · Realty",
    description:
      "Corporate real-estate website with project portfolios, dynamic CMS and high-performance rendering.",
    link: "https://salaruriagroup.com",
    year: "2025",
    role: "Frontend Lead",
    stack: ["Next.js", "Tailwind", "Strapi"],
    accent: "SG",
  },
  {
    title: "Shreenaman Group",
    subtitle: "Realty / Corporate",
    category: "Next.js · Realty",
    description:
      "Corporate realty website built with Next.js, Strapi CMS and motion-driven UI to showcase projects.",
    link: "https://shreenamangroup.com",
    year: "2025",
    role: "Frontend",
    stack: ["Next.js", "Tailwind", "GSAP"],
    accent: "SN",
  },
  {
    title: "24High",
    subtitle: "Realty / Project",
    category: "Next.js · Project Site",
    description:
      "Project landing experience for a luxury real-estate development with interactive sections and lead capture.",
    link: "https://24high.in/",
    year: "2025",
    role: "Frontend",
    stack: ["Next.js", "Tailwind", "Framer Motion"],
    accent: "24",
  },
  {
    title: "Shree Sonigara",
    subtitle: "Realty / Corporate",
    category: "Next.js · Realty",
    description:
      "Modern corporate realty website with motion-driven UI, SEO and CMS integrations for content scaling.",
    link: "https://www.shreesonigara.com/",
    year: "2025",
    role: "Frontend",
    stack: ["Next.js", "Tailwind", "Strapi"],
    accent: "SS",
  },
  {
    title: "Purvanchal UAE",
    subtitle: "Realty / International",
    category: "Next.js · Realty",
    description:
      "International real-estate marketing site for UAE projects with multilingual readiness and lead flows.",
    link: "https://purvanchaluae.ae/",
    year: "2025",
    role: "Frontend",
    stack: ["Next.js", "Tailwind"],
    accent: "PU",
  },
  {
    title: "Insalliance",
    subtitle: "Realty / Corporate",
    category: "Next.js · Corporate",
    description:
      "Corporate site with project showcases, structured-data SEO and responsive layouts.",
    link: "https://insalliance.in/",
    year: "2024",
    role: "Frontend",
    stack: ["Next.js", "Tailwind"],
    accent: "IA",
  },
  {
    title: "JP Group",
    subtitle: "Realty / Corporate",
    category: "Next.js · Realty",
    description:
      "Real-estate corporate portal with project listings, contact funnels and CMS-managed content.",
    link: "https://jpgrp.in/",
    year: "2024",
    role: "Frontend",
    stack: ["Next.js", "Tailwind"],
    accent: "JP",
  },
  {
    title: "Raheja Universal",
    subtitle: "Realty / Corporate",
    category: "Next.js · Realty",
    description:
      "Corporate real-estate website with portfolio of developments and motion-rich storytelling.",
    link: "https://www.rahejauniversal.com/",
    year: "2024",
    role: "Frontend",
    stack: ["Next.js", "Tailwind", "GSAP"],
    accent: "RU",
  },
  {
    title: "InOne Oak",
    subtitle: "Realty / Project",
    category: "Next.js · Project Site",
    description:
      "Project landing experience for a residential development — image-led, motion-rich and conversion-optimised.",
    link: "https://www.inoneoak.com/",
    year: "2024",
    role: "Frontend",
    stack: ["Next.js", "Tailwind", "Framer Motion"],
    accent: "IO",
  },
  {
    title: "VTP Realty",
    subtitle: "Realty / Corporate",
    category: "Next.js · Realty",
    description:
      "Corporate realty website with portfolio of developments, advanced search and CMS-driven listings.",
    link: "https://www.vtprealty.in/",
    year: "2024",
    role: "Frontend",
    stack: ["Next.js", "Tailwind"],
    accent: "VTP",
  },
];

// Earlier work (kept below)
const earlierWork = [
  {
    title: "RangePlus",
    subtitle: "E-Commerce Platform",
    category: "Next.js · MERN",
    description:
      "Scalable Next.js e-commerce platform with admin dashboard supporting 1000+ users and PayPal payment integration.",
    image: "/rangeplus1.png",
    link: "https://stage.rangeplus.com",
    year: "2023",
    role: "Frontend Lead",
    stack: ["Next.js", "Redux Toolkit", "React Query", "Zustand"],
  },
  {
    title: "Kingsvilla",
    subtitle: "E-Commerce Application",
    category: "MERN · Full-stack",
    description:
      "MERN-stack application with authentication, cart system, and a responsive UI — end-to-end e-commerce experience.",
    image: "/ecom1.png",
    link: "https://kigsvillah.vercel.app/",
    source: "https://github.com/ashukla333/ecom-website",
    year: "2024",
    role: "Full-stack",
    stack: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "FridayRelease",
    subtitle: "Movie Rating Platform",
    category: "Next.js · Platform",
    description:
      "Interactive movie rating platform with dynamic UI and real-time user interactions.",
    image: "/fridayRelease.png",
    link: "https://www.fridayrelease.com",
    year: "2023",
    role: "Frontend",
    stack: ["Next.js", "React", "Tailwind"],
  },
  {
    title: "Podberry",
    subtitle: "Content Platform",
    category: "Next.js · GraphQL",
    description:
      "Content platform built using Next.js and GraphQL for efficient data handling and scalability.",
    image: "/blogPage1.png",
    link: "#",
    year: "2024",
    role: "Frontend",
    stack: ["Next.js", "GraphQL", "Tailwind"],
  },
  {
    title: "Boppo Technologies",
    subtitle: "Corporate Website",
    category: "Next.js · Brand",
    description:
      "Modern marketing website built with Next.js and Tailwind CSS — optimized for performance and scalability.",
    image: "/boppotech.png",
    link: "https://www.boppotechnologies.com/",
    year: "2024",
    role: "Frontend",
    stack: ["Next.js", "Tailwind", "Framer Motion"],
  },
  {
    title: "BollywoodMDB",
    subtitle: "Mobile Application",
    category: "React Native",
    description:
      "React Native mobile app with API integration — improving mobile user engagement.",
    image: "/demos.jpg",
    year: "2023",
    role: "Mobile Dev",
    stack: ["React Native", "REST APIs"],
  },
  {
    title: "Shaif Cuisine",
    subtitle: "Restaurant Template",
    category: "HTML · CSS",
    description:
      "Responsive HTML/CSS template designed with modern web standards and best practices.",
    image: "/shif.png",
    link: "https://ashukla33317.github.io/shaif-cuisine/index.html",
    source: "https://github.com/ashukla33317/shaif-cuisine",
    year: "2022",
    role: "Frontend",
    stack: ["HTML5", "CSS3"],
  },
];

const allProjects = [...realestateSites, ...earlierWork];

// Stylized fallback card for projects without screenshots
const FallbackVisual = ({ accent, title }) => (
  <div className="absolute inset-0 bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-grid-soft opacity-60"></div>
    <div className="absolute inset-0 bg-gradient-to-tr from-[#050505] via-transparent to-[#161616]"></div>
    <div className="relative text-center">
      <div className="font-serif-display italic font-bold text-[28vw] md:text-[12vw] leading-[0.8] text-white/90">
        {accent}
      </div>
      <div className="font-mono text-[10px] tracking-[0.3em] text-white/40 mt-2">
        {title.toUpperCase()}
      </div>
    </div>
    <div className="absolute top-4 left-4 right-4 flex justify-between font-mono text-[10px] tracking-[0.25em] text-white/30">
      <span>WEB / LIVE</span>
      <span>REALTY</span>
    </div>
  </div>
);

const ProjectVisual = ({ p }) => {
  if (p.image) {
    return (
      <Image
        src={p.image}
        alt={p.title}
        fill
        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-700"
      />
    );
  }
  return <FallbackVisual accent={p.accent || p.title.slice(0, 2).toUpperCase()} title={p.subtitle || p.title} />;
};

const Portfolio = () => {
  const ref = useRef(null);
  const [filter, setFilter] = useState("All");

  const filters = ["All", "Realty", "Next.js", "MERN", "Mobile"];
  const filtered =
    filter === "All"
      ? allProjects
      : allProjects.filter((p) => {
          if (filter === "Realty") return p.category.includes("Realty") || p.category.includes("Project Site") || p.category.includes("Corporate");
          if (filter === "Next.js") return p.category.includes("Next.js");
          if (filter === "MERN") return p.category.includes("MERN");
          if (filter === "Mobile") return p.category.includes("Native");
          return true;
        });

  useEffect(() => {
    let ScrollTrigger;
    const ctx = gsap.context(async () => {
      ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
      gsap.registerPlugin(ScrollTrigger);

      gsap.set(".pf-title", { y: 100, opacity: 0 });
      gsap.set(".pf-anim", { y: 30, opacity: 0 });

      gsap.to(".pf-title", {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 1,
        ease: "power4.out",
      });
      gsap.to(".pf-anim", {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.3,
      });

      gsap.utils.toArray(".pf-card").forEach((card) => {
        gsap.fromTo(
          card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 88%" },
          }
        );
      });
    }, ref);
    return () => ctx.revert();
  }, [filter]);

  return (
    <section ref={ref} className="relative bg-[#050505] overflow-hidden grain">
      <div className="absolute inset-0 bg-grid-soft mask-radial opacity-40 pointer-events-none"></div>

      <div className="relative z-10 border-b border-white/[0.06] px-6 md:px-10 py-5 flex items-center justify-between font-mono text-[10px] tracking-[0.25em] text-white/50">
        <span className="pf-anim">CHAPTER 04 / WORK</span>
        <span className="pf-anim">{allProjects.length} PROJECTS · CURATED</span>
      </div>

      <div className="relative z-10 px-6 md:px-10 pt-12 md:pt-16 pb-20">
        <div className="pf-anim section-num mb-8">04 / SELECTED WORK</div>

        <h1 className="font-display font-bold leading-[0.9] tracking-tighter text-[14vw] sm:text-[10vw] lg:text-[7.5vw] uppercase">
          <span className="mask">
            <span className="pf-title block">Crafted</span>
          </span>
          <span className="mask">
            <span className="pf-title block">
              <span className="font-serif-display italic font-normal text-white/40 normal-case">with </span>care.
            </span>
          </span>
        </h1>

        <div className="pf-anim mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <p className="lg:col-span-7 text-lg md:text-xl text-white/75 leading-snug">
            A curated set of products, sites and platforms I’ve led or shipped —
            including 20+ real-estate websites at Realatte Ventures and earlier
            e-commerce, content and mobile work at BOPPO Technologies.
          </p>

          <div className="lg:col-span-5 flex flex-wrap gap-2 justify-start lg:justify-end">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`chip transition-all duration-300 ${
                  filter === f
                    ? "bg-white text-black border-white"
                    : "hover:border-white"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* FEATURED — top 2 large */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-4">
          {filtered.slice(0, 2).map((p, i) => (
            <article
              key={p.title}
              className="pf-card card group overflow-hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-white/[0.04]">
                <ProjectVisual p={p} />
                {p.image && (
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
                )}

                <div className="absolute top-5 left-5 flex items-center gap-2 z-10">
                  <span className="chip bg-[#050505]/80 backdrop-blur">
                    {p.year}
                  </span>
                  <span className="chip bg-[#050505]/80 backdrop-blur">
                    FEATURED
                  </span>
                </div>

                {p.link && p.link !== "#" && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute right-5 bottom-5 w-14 h-14 flex items-center justify-center bg-white text-black opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-10"
                  >
                    <FiArrowUpRight className="text-2xl" />
                  </a>
                )}
              </div>

              <div className="p-7 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] tracking-[0.25em] text-white/40">
                    {p.category.toUpperCase()}
                  </span>
                  <span className="font-mono text-[10px] text-white/40">
                    {p.role.toUpperCase()}
                  </span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
                  {p.title}
                  <span className="font-serif-display italic font-normal text-white/40 text-2xl ml-2">
                    /{p.subtitle.toLowerCase()}
                  </span>
                </h3>
                <p className="text-sm md:text-base text-white/65 mt-4 leading-relaxed">
                  {p.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s, k) => (
                    <span key={k} className="chip">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-5 text-sm">
                  {p.link && p.link !== "#" && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline inline-flex items-center gap-2"
                    >
                      Visit live <FiArrowUpRight />
                    </a>
                  )}
                  {p.source && (
                    <a
                      href={p.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline inline-flex items-center gap-2 text-white/65"
                    >
                      Source <FiGithub />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* SECONDARY GRID */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.slice(2).map((p, i) => (
            <article
              key={p.title}
              className="pf-card card group overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-white/[0.04]">
                <ProjectVisual p={p} />
                <div className="absolute top-3 left-3 z-10">
                  <span className="chip bg-[#050505]/80 backdrop-blur">
                    {p.year}
                  </span>
                </div>
                {p.link && p.link !== "#" && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${p.title}`}
                    className="absolute right-3 bottom-3 w-10 h-10 flex items-center justify-center bg-white text-black opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-10"
                  >
                    <FiArrowUpRight />
                  </a>
                )}
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] tracking-[0.25em] text-white/40">
                    {p.category.toUpperCase()}
                  </span>
                  <span className="font-mono text-[10px] text-white/40">
                    /{String(i + 3).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="text-sm text-white/60 mt-2 leading-relaxed line-clamp-3 flex-1">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
                  {p.link && p.link !== "#" && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline inline-flex items-center gap-2"
                    >
                      Visit <FiArrowUpRight />
                    </a>
                  )}
                  {p.source && (
                    <a
                      href={p.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline inline-flex items-center gap-2 text-white/60"
                    >
                      Source <FiGithub />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer cue */}
        <div className="pf-anim mt-16 flex items-center justify-between pt-8 border-t border-white/[0.06] font-mono text-[10px] tracking-[0.25em] text-white/40">
          <span>END OF CHAPTER 04</span>
          <Link href="/testimonial" className="link-underline inline-flex items-center gap-2">
            NEXT — PRAISE (05) <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
