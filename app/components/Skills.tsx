import gsap from "gsap";
import { useLayoutEffect, useEffect, useRef } from "react";
import { data } from "../lib/data";

export const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainContainerRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      gsap.from(skillRef.current, {
        yPercent: 200,
        stagger: 0.05,
        scrollTrigger: {
          trigger: mainContainerRef.current,
          start: "top bottom",
          end: "center center",
          scrub: 1,
        },
      });
    }, mainContainerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="h-full w-full flex flex-col gap-10" ref={mainContainerRef}>
      <h1 className="text-6xl font-poppins font-semibold">SKILLS</h1>
      <div className="flex gap-2 h-full w-full">
        {data.skills.data.map((skill, i) => (
          <div
            ref={(el) => (skillRef.current[i] = el)}
            key={i}
            className="bg-white h-full w-full flex relative items-end"
          >
            <div className="absolute bottom-0  transform left-[15%] ">
              <h1 className="whitespace-nowrap transform text-5xl origin-top-left -rotate-90">
                {skill.name}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
