import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";
import { FiArrowUpRight, FiSend } from "react-icons/fi";

const budgets = ["< $1k", "$1k–$5k", "$5k–$10k", "$10k+"];
const scopes = ["Web App", "E-commerce", "Marketing Site", "Dashboard", "Motion / UI"];

const Contact = () => {
  const ref = useRef(null);
  const [budget, setBudget] = useState(budgets[1]);
  const [scope, setScope] = useState([]);

  useEffect(() => {
    let ScrollTrigger;
    const ctx = gsap.context(async () => {
      ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
      gsap.registerPlugin(ScrollTrigger);

      gsap.set(".ct-title", { y: 100, opacity: 0 });
      gsap.set(".ct-anim", { y: 30, opacity: 0 });

      gsap.to(".ct-title", {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 1,
        ease: "power4.out",
      });
      gsap.to(".ct-anim", {
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

  const toggleScope = (s) => {
    setScope((cur) => (cur.includes(s) ? cur.filter((x) => x !== s) : [...cur, s]));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_382qjtl",
        "template_7mdyixr",
        e.target,
        "5mO70OTMScuCtCz49"
      )
      .then(
        () => toast.success("Message sent — talk soon!"),
        () => toast.error("Couldn’t send. Try again in a moment.")
      );
    e.target.reset();
    setScope([]);
  };

  const info = [
    { icon: <FaEnvelope />, label: "EMAIL", value: "amanshukla3747@gmail.com", href: "mailto:amanshukla3747@gmail.com" },
    { icon: <FaPhoneAlt />, label: "PHONE", value: "+91 9324596328", href: "tel:+919324596328" },
    { icon: <FaMapMarkerAlt />, label: "LOCATION", value: "Kalyan, Mumbai, India", href: "#" },
  ];

  const socials = [
    { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/aman-shukla-107674247/", name: "LinkedIn" },
    { icon: <FaGithub />, url: "https://github.com/ashukla333", name: "GitHub" },
    { icon: <FaTwitter />, url: "#", name: "Twitter" },
    { icon: <FaInstagram />, url: "#", name: "Instagram" },
  ];

  return (
    <section ref={ref} className="relative bg-[#050505] overflow-hidden grain">
      <div className="absolute inset-0 bg-grid-soft mask-radial opacity-50 pointer-events-none"></div>

      <div className="relative z-10 border-b border-white/[0.06] px-6 md:px-10 py-5 flex items-center justify-between font-mono text-[10px] tracking-[0.25em] text-white/50">
        <span className="ct-anim">CHAPTER 06 / CONTACT</span>
        <span className="ct-anim flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-dot"></span>
          AVAILABLE FOR HIRE
        </span>
      </div>

      <div className="relative z-10 px-6 md:px-10 pt-12 md:pt-16 pb-20">
        <div className="ct-anim section-num mb-8">06 / GET IN TOUCH</div>

        <h1 className="font-display font-bold leading-[0.9] tracking-tighter text-[14vw] sm:text-[10vw] lg:text-[7.5vw] uppercase">
          <span className="mask">
            <span className="ct-title block">Let’s build</span>
          </span>
          <span className="mask">
            <span className="ct-title block">
              <span className="font-serif-display italic font-normal text-white/40 normal-case">something </span>
              great.
            </span>
          </span>
        </h1>

        <p className="ct-anim mt-10 max-w-2xl text-lg md:text-xl text-white/75 leading-snug">
          Have a project in mind, a role to discuss, or just want to say hi?
          Send a note — I usually reply within 24 hours.
        </p>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Info card */}
          <div className="ct-anim card lg:col-span-4 p-8 flex flex-col gap-5">
            <div className="section-num">DIRECT LINES · 01</div>

            {info.map((i, idx) => (
              <a
                key={idx}
                href={i.href}
                className="flex items-start gap-4 pb-4 border-b border-white/[0.06] group last:border-0 last:pb-0"
              >
                <span className="mt-1 text-white/70 group-hover:text-white transition-colors">
                  {i.icon}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="font-mono text-[10px] tracking-[0.25em] text-white/40">
                    {i.label}
                  </div>
                  <div className="text-sm text-white truncate">{i.value}</div>
                </div>
                <FiArrowUpRight className="text-white/30 group-hover:text-white" />
              </a>
            ))}

            <div className="mt-2">
              <div className="font-mono text-[10px] tracking-[0.25em] text-white/40 mb-3">
                ELSEWHERE
              </div>
              <div className="flex flex-wrap gap-2">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="w-11 h-11 flex items-center justify-center border border-white/20 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Local time/availability */}
            <div className="mt-2 pt-5 border-t border-white/[0.06] font-mono text-[10px] tracking-[0.25em] text-white/40 flex justify-between">
              <span>MON — FRI</span>
              <span>10:00 — 19:00 IST</span>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={sendEmail}
            className="ct-anim card lg:col-span-8 p-8 md:p-10"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="section-num">PROJECT BRIEF · 02</div>
              <div className="font-mono text-[10px] tracking-[0.25em] text-white/40">
                STEP 1/1
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="font-mono text-[10px] tracking-[0.25em] text-white/40 mb-2"
                >
                  01. YOUR NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="bg-transparent border-b border-white/15 focus:border-white outline-none py-3 text-white placeholder:text-white/30 transition-colors text-base"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="font-mono text-[10px] tracking-[0.25em] text-white/40 mb-2"
                >
                  02. EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="you@email.com"
                  className="bg-transparent border-b border-white/15 focus:border-white outline-none py-3 text-white placeholder:text-white/30 transition-colors text-base"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="font-mono text-[10px] tracking-[0.25em] text-white/40 mb-3 block">
                03. PROJECT TYPE (PICK ANY)
              </label>
              <div className="flex flex-wrap gap-2">
                {scopes.map((s) => (
                  <button
                    type="button"
                    key={s}
                    onClick={() => toggleScope(s)}
                    className={`chip transition-all duration-300 ${
                      scope.includes(s)
                        ? "bg-white text-black border-white"
                        : "hover:border-white"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
              <input type="hidden" name="scope" value={scope.join(", ")} />
            </div>

            <div className="mb-6">
              <label className="font-mono text-[10px] tracking-[0.25em] text-white/40 mb-3 block">
                04. APPROXIMATE BUDGET
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {budgets.map((b) => (
                  <button
                    type="button"
                    key={b}
                    onClick={() => setBudget(b)}
                    className={`px-4 py-3 text-sm border transition-all duration-300 ${
                      budget === b
                        ? "bg-white text-black border-white"
                        : "border-white/15 hover:border-white"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
              <input type="hidden" name="budget" value={budget} />
            </div>

            <div className="flex flex-col mb-8">
              <label
                htmlFor="message"
                className="font-mono text-[10px] tracking-[0.25em] text-white/40 mb-2"
              >
                05. TELL ME ABOUT IT
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                placeholder="A few lines about the project, goals, timeline..."
                className="bg-transparent border-b border-white/15 focus:border-white outline-none py-3 text-white placeholder:text-white/30 transition-colors resize-none text-base"
              ></textarea>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="font-mono text-[10px] tracking-[0.25em] text-white/40 max-w-xs leading-relaxed">
                BY SUBMITTING YOU AGREE TO BE CONTACTED AT THE EMAIL PROVIDED.
              </p>
              <button
                type="submit"
                className="btn-fill-dark inline-flex items-center gap-3 bg-white text-black px-7 py-4 text-sm font-medium tracking-tight"
              >
                Send the brief <FiSend />
              </button>
            </div>
          </form>
        </div>

        {/* Big closing line */}
        <div className="ct-anim mt-20 pt-12 border-t border-white/[0.06]">
          <div className="section-num mb-6">OR JUST SAY HI</div>
          <a
            href="mailto:amanshukla3747@gmail.com"
            className="font-display font-bold tracking-tighter text-[10vw] sm:text-[7vw] uppercase leading-none link-underline inline-block"
          >
            HELLO@AMAN <span className="font-serif-display italic text-white/40 normal-case">.dev</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
