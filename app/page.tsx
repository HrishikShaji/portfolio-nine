"use client";

import Image from "next/image";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Container } from "./components/Container";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      containerRefs.current.forEach((card, index) => {
        const tween = gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: () => `top bottom-=100`,
            end: () => `top top+=40`,
            scrub: true,
            invalidateOnRefresh: true,
          },
          ease: "none",
        });

        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          pin: true,
          pinSpacing: false,
          id: "pin",
          end: "max",
          invalidateOnRefresh: true,
        });
      });
    });

    return () => ctx.revert();
  }, [containerRefs.current]);

  const lookup = [
    { component: <Hero /> },
    { component: <About /> },
    { component: <Skills /> },
    { component: <Projects /> },
    { component: <Contact /> },
  ];

  return (
    <main className="h-full flex flex-col gap-[400px] bg-neutral-900">
      {lookup.map((item, i) => (
        <div
          ref={(el) => (containerRefs.current[i] = el)}
          key={i}
          className="h-screen p-10  w-full flex justify-center items-center"
        >
          {item.component}{" "}
        </div>
      ))}
    </main>
  );
}
