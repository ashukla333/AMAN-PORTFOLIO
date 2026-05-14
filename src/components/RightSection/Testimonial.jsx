import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { FaQuoteRight, FaStar, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Abhishek Yadav",
    role: "Product Manager",
    company: "FRIDAY RELEASE",
    feedback:
      "Aman delivered on time and exceeded expectations. The level of detail he puts into UI work is genuinely rare.",
    rating: 5,
    initials: "AY",
  },
  {
    name: "Adarsh S.",
    role: "Founder",
    company: "STARTUP",
    feedback:
      "Amazing attention to detail and incredibly responsive throughout. Easy to work with, and the final product felt premium.",
    rating: 5,
    initials: "AS",
  },
  {
    name: "Anonymous",
    role: "Senior Designer",
    company: "AGENCY",
    feedback:
      "Extremely satisfied with the work delivered. Aman’s polish on the final UI took the design over the finish line.",
    rating: 5,
    initials: "SD",
  },
  {
    name: "Anonymous",
    role: "Engineering Lead",
    company: "STARTUP",
    feedback:
      "A pleasure to work with — delivered on time and at high quality. Would happily collaborate again on the next product.",
    rating: 4,
    initials: "EL",
  },
  {
    name: "Anonymous",
    role: "Marketing Head",
    company: "BRAND",
    feedback:
      "The work was excellent and communication was top-notch throughout the entire engagement.",
    rating: 5,
    initials: "MH",
  },
];

const marqueeWords = [
  "FAST DELIVERY",
  "PIXEL PERFECT",
  "GREAT COMMUNICATION",
  "DETAIL-ORIENTED",
  "PROFESSIONAL",
  "RELIABLE",
  "CREATIVE",
];

const Testimonial = () => {
  const ref = useRef(null);

  useEffect(() => {
    let ScrollTrigger;
    const ctx = gsap.context(async () => {
      ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
      gsap.registerPlugin(ScrollTrigger);

      gsap.set(".ts-title", { y: 100, opacity: 0 });
      gsap.set(".ts-anim", { y: 30, opacity: 0 });
      gsap.set(".ts-card", { y: 40, opacity: 0 });

      gsap.to(".ts-title", {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 1,
        ease: "power4.out",
      });
      gsap.to(".ts-anim", {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.3,
      });

      gsap.utils.toArray(".ts-card").forEach((card) => {
        gsap.to(card, {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 90%" },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const featured = testimonials[0];

  return (
    <section ref={ref} className="relative bg-[#050505] overflow-hidden grain">
      <div className="absolute inset-0 bg-grid-soft mask-radial opacity-40 pointer-events-none"></div>

      <div className="relative z-10 border-b border-white/[0.06] px-6 md:px-10 py-5 flex items-center justify-between font-mono text-[10px] tracking-[0.25em] text-white/50">
        <span className="ts-anim">CHAPTER 05 / PRAISE</span>
        <span className="ts-anim">{testimonials.length} TESTIMONIALS</span>
      </div>

      <div className="relative z-10 px-6 md:px-10 pt-12 md:pt-16 pb-10">
        <div className="ts-anim section-num mb-8">05 / KIND WORDS</div>

        <h1 className="font-display font-bold leading-[0.9] tracking-tighter text-[14vw] sm:text-[10vw] lg:text-[7.5vw] uppercase">
          <span className="mask">
            <span className="ts-title block">Words from</span>
          </span>
          <span className="mask">
            <span className="ts-title block">
              <span className="font-serif-display italic font-normal text-white/40 normal-case">people </span>
              I worked with.
            </span>
          </span>
        </h1>

        <p className="ts-anim mt-10 max-w-2xl text-lg md:text-xl text-white/75 leading-snug">
          A few honest words from teammates, clients and collaborators who I’ve
          had the pleasure of building things with.
        </p>

        {/* FEATURED */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="ts-card card lg:col-span-8 p-8 md:p-12 relative">
            <FaQuoteRight className="text-5xl text-white/15 absolute top-8 right-8" />
            <div className="section-num">FEATURED · 01</div>
            <p className="mt-6 font-serif-display text-2xl md:text-4xl leading-tight text-white">
              “{featured.feedback}”
            </p>
            <div className="mt-10 flex items-center gap-4 pt-6 border-t border-white/[0.06]">
              <div className="w-14 h-14 border border-white/30 flex items-center justify-center font-serif-display italic font-bold text-lg">
                {featured.initials}
              </div>
              <div>
                <div className="font-display text-lg font-semibold">
                  {featured.name}
                </div>
                <div className="font-mono text-[10px] tracking-[0.25em] text-white/50">
                  {featured.role.toUpperCase()} · {featured.company}
                </div>
              </div>
              <div className="ml-auto flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar
                    key={i}
                    className={`text-xs ${
                      i < featured.rating ? "text-white" : "text-white/15"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Big stat card */}
          <div className="ts-card card lg:col-span-4 p-8 md:p-10 flex flex-col justify-between min-h-[260px]">
            <div className="section-num">SATISFACTION · 02</div>
            <div>
              <div className="metric-num text-7xl md:text-8xl">5.0</div>
              <div className="flex items-center gap-1 mt-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} className="text-white" />
                ))}
              </div>
              <div className="text-sm text-white/55 mt-3">
                Average rating across 15+ delivered projects.
              </div>
            </div>
            <div className="font-mono text-[10px] tracking-[0.25em] text-white/40">
              BASED ON CLIENT FEEDBACK
            </div>
          </div>
        </div>

        {/* GRID */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {testimonials.slice(1).map((t, i) => (
            <article key={i} className="ts-card card p-8 group">
              <div className="flex items-center justify-between mb-5">
                <FaQuoteRight className="text-2xl text-white/15 group-hover:text-white transition-colors" />
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <FaStar
                      key={idx}
                      className={`text-xs ${
                        idx < t.rating ? "text-white" : "text-white/15"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="font-serif-display text-lg md:text-xl leading-snug text-white/90">
                “{t.feedback}”
              </p>
              <div className="mt-7 pt-5 border-t border-white/[0.06] flex items-center gap-4">
                <div className="w-11 h-11 border border-white/20 flex items-center justify-center font-serif-display italic font-semibold text-sm">
                  {t.initials}
                </div>
                <div>
                  <div className="font-display text-base font-semibold">
                    {t.name}
                  </div>
                  <div className="font-mono text-[10px] tracking-[0.25em] text-white/45">
                    {t.role.toUpperCase()} · {t.company}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div className="relative z-10 border-y border-white/[0.06] py-8 overflow-hidden mask-fade-edges">
        <div className="flex animate-marquee-reverse whitespace-nowrap">
          {[...marqueeWords, ...marqueeWords].map((w, i) => (
            <span
              key={i}
              className="font-display text-3xl md:text-5xl px-10 text-white/40 hover:text-white transition-colors"
            >
              ★ {w}
            </span>
          ))}
        </div>
      </div>

      {/* Footer cue */}
      <div className="relative z-10 px-6 md:px-10 py-8 flex items-center justify-between font-mono text-[10px] tracking-[0.25em] text-white/40">
        <span>END OF CHAPTER 05</span>
        <Link href="/contact" className="link-underline inline-flex items-center gap-2">
          NEXT — CONTACT (06) <FaArrowRight />
        </Link>
      </div>
    </section>
  );
};

export default Testimonial;
