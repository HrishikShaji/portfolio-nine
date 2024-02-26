"use client";
import gsap from "gsap";
import { useLayoutEffect, useEffect, useRef } from "react";

interface SkillProps {
  item: Record<string, any>;
  active: boolean;
}

export const Skill: React.FC<SkillProps> = ({ item, active }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const skillContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (active) {
        gsap.to(headingRef.current, { opacity: 0, duration: 0.5 });
        gsap.to(skillContainer.current, { display: "block" });
      } else {
        gsap.to(headingRef.current, { opacity: 1, duration: 0.5 });
        gsap.to(skillContainer.current, { display: "none" });
      }
    }, containerRef);
  }, [active]);

  return (
    <>
      <div
        className="h-full w-full bg-green-500 hidden"
        ref={skillContainer}
      ></div>
      <div
        ref={containerRef}
        className="absolute bottom-0  transform left-[15%] "
      >
        <h1
          ref={headingRef}
          className="heading whitespace-nowrap transform text-5xl origin-top-left -rotate-90"
        >
          {item.name}
        </h1>
      </div>
    </>
  );
};
