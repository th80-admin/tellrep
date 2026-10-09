import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const root = document.documentElement;
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const DEADLINE = new Date("2026-12-31T23:59:59+01:00");
const daysLeft = () => Math.max(0, Math.ceil((DEADLINE - new Date()) / 864e5));

/* header state */
const onScroll = () => root.classList.toggle("scrolled", window.scrollY > 8);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

/* count targets that depend on today */
document.querySelectorAll('[data-count="days"]').forEach((el) => (el.textContent = String(daysLeft())));

if (reduce) {
  // CSS shows final states under prefers-reduced-motion
} else {
  /* native scrolling; smooth anchor jumps via CSS scroll-behavior */
  ScrollTrigger.config({ ignoreMobileResize: true });

  /* reveals */
  gsap.set("[data-reveal]", { opacity: 0, y: 18 });
  ScrollTrigger.batch("[data-reveal]", {
    start: "top 88%",
    once: true,
    onEnter: (els) => gsap.to(els, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.08, overwrite: true }),
  });

  /* count ups */
  const countUp = (el, delay = 0) => {
    const raw = el.dataset.count;
    const end = raw === "days" ? daysLeft() : Number(raw);
    const o = { v: 0 };
    el.textContent = "0";
    gsap.to(o, { v: end, duration: 1.4, delay, ease: "power2.out", onUpdate: () => (el.textContent = String(Math.round(o.v))) });
  };
  document.querySelectorAll("[data-count]").forEach((el) => {
    if (el.closest("[data-registry]")) return; // driven by the registry timeline
    ScrollTrigger.create({ trigger: el, start: "top 90%", once: true, onEnter: () => countUp(el) });
  });

  /* hero: arrow hits the apple */
  const hero = document.querySelector(".hero");
  if (hero) {
    const stage = hero.querySelector(".stage");
    const arrow = hero.querySelector(".arrow");
    const impact = hero.querySelector(".impact");
    const hit = hero.querySelector(".arrow .hit");
    gsap.set(hit, { opacity: 0 });
    const tl = gsap.timeline({ paused: true });
    tl.from(hero.querySelectorAll(".chip"), { opacity: 0, duration: 0.7, stagger: 0.07, ease: "power2.out" })
      .from(arrow, { x: "-=560", opacity: 0, duration: 0.5, ease: "power3.in" }, 0.2)
      .from(hero.querySelector(".bolt-shadow"), { x: -560, opacity: 0, duration: 0.5, ease: "power3.in" }, 0.2)
      .set(hit, { opacity: 1 })
      .to(impact, { x: 7, rotation: 5, transformOrigin: "50% 85%", duration: 0.08, ease: "power2.out" })
      .to(impact, { x: 0, rotation: 0, duration: 1.2, ease: "elastic.out(1, 0.28)" })
      .fromTo(arrow, { rotation: -6 }, { rotation: -4, duration: 0.9, ease: "elastic.out(1.2, 0.15)" }, "<");
    ScrollTrigger.create({ trigger: stage, start: "center 92%", once: true, onEnter: () => tl.delay(0.15).play() });
  }

  /* registry mock fills itself */
  const reg = document.querySelector("[data-registry]");
  if (reg) {
    const typed = [...reg.querySelectorAll("[data-type]")];
    const pill = reg.querySelector("[data-status]");
    const fill = reg.querySelector("[data-fill]");
    const num = reg.querySelector("[data-count]");
    const done = reg.querySelector("[data-done]");
    typed.forEach((el) => (el.textContent = ""));
    gsap.set(fill, { scaleX: 0 });
    gsap.set(done, { opacity: 0, y: 10 });
    if (num) num.textContent = "0";
    const tl = gsap.timeline({ paused: true });
    typed.forEach((el) => {
      const full = el.dataset.type;
      const o = { n: 0 };
      tl.to(o, { n: full.length, duration: Math.min(0.9, full.length * 0.028), ease: "none", onUpdate: () => (el.textContent = full.slice(0, Math.round(o.n))) });
    });
    const o = { v: 0 };
    tl.to(fill, { scaleX: 1, duration: 1.3, ease: "power2.inOut" }, "+=0.1")
      .to(o, { v: Number(num?.dataset.count || 30), duration: 1.3, ease: "power2.inOut", onUpdate: () => num && (num.textContent = String(Math.round(o.v))) }, "<")
      .call(() => { pill.textContent = "Registered"; pill.classList.add("ok"); })
      .to(done, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" });
    ScrollTrigger.create({ trigger: reg, start: "top 75%", once: true, onEnter: () => tl.play() });
  }

  /* label story */
  const story = document.querySelector("[data-story]");
  if (story) {
    const steps = [...story.querySelectorAll("[data-step]")];
    const missing = story.querySelector('[data-layer="missing"]');
    const chrep = story.querySelector('[data-layer="chrep"]');
    const stamp = story.querySelector('[data-layer="stamp"]');
    const mm = gsap.matchMedia();

    mm.add("(min-width: 900px)", () => {
      // section becomes a tall scroll track, the stage is position: sticky (CSS). No pin spacer, no layout jumps.
      story.setAttribute("data-pinned", "");
      gsap.set(steps, { opacity: 0, y: 24 });
      gsap.set(steps[0], { opacity: 1, y: 0 });
      gsap.set(missing, { opacity: 0 });
      gsap.set(chrep, { opacity: 0, y: 10 });
      gsap.set(stamp, { opacity: 0, scale: 1.6 });
      const tl = gsap.timeline({
        defaults: { ease: "power2.inOut" },
        scrollTrigger: { trigger: story, start: "top top", end: "bottom bottom", scrub: 0.5, invalidateOnRefresh: true },
      });
      const swap = (from, to) => tl.to(steps[from], { opacity: 0, y: -24, duration: 0.5 }).to(steps[to], { opacity: 1, y: 0, duration: 0.5 });
      tl.to({}, { duration: 0.4 });
      swap(0, 1);
      tl.to(missing, { opacity: 1, duration: 0.4 }, "<").to({}, { duration: 0.5 });
      swap(1, 2);
      tl.to(missing, { opacity: 0, duration: 0.4 }, "<").to(chrep, { opacity: 1, y: 0, duration: 0.5 }, "<0.2").to({}, { duration: 0.5 });
      swap(2, 3);
      tl.to(stamp, { opacity: 1, scale: 1, duration: 0.35, ease: "back.out(2.4)" }, "<0.2").to({}, { duration: 0.6 });
      ScrollTrigger.refresh();
      return () => {
        story.removeAttribute("data-pinned");
        gsap.set([...steps, missing, chrep, stamp], { clearProps: "all" });
      };
    });

    mm.add("(max-width: 899px)", () => {
      gsap.from(stamp, { opacity: 0, scale: 1.6, duration: 0.5, ease: "back.out(2.4)", scrollTrigger: { trigger: story, start: "top 60%", once: true } });
    });
  }

  /* origins */
  const org = document.querySelector("[data-origins]");
  if (org) {
    const lines = org.querySelectorAll(".ln");
    lines.forEach((p) => {
      const len = p.getTotalLength();
      p.style.strokeDasharray = `${len}`;
      p.style.strokeDashoffset = `${len}`;
    });
    const tl = gsap.timeline({ scrollTrigger: { trigger: org.querySelector(".map"), start: "top 75%", once: true } });
    tl.from(org.querySelector(".hub"), { opacity: 0, scale: 0.8, duration: 0.6, ease: "back.out(1.8)" })
      .from(org.querySelectorAll(".node"), { opacity: 0, duration: 0.5, stagger: 0.07 }, 0.15)
      .to(lines, { strokeDashoffset: 0, duration: 1.1, stagger: 0.07, ease: "power2.out" }, 0.3)
      .call(() => lines.forEach((p) => { p.style.strokeDasharray = "4 5"; p.style.strokeDashoffset = "0"; }));
  }

  window.addEventListener("load", () => ScrollTrigger.refresh());
}
