import gsap from "gsap";
import { useLayoutEffect, useEffect, useRef } from "react";
import { data } from "../lib/data";

export const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        {
          rotateX: "-45deg",
          y: 200,
          scale: 0.95,
        },
        {
          y: 0,
          scale: 1,
          rotateX: "0deg",
          scrollTrigger: {
            trigger: mainContainerRef.current,
            start: "top center",
            end: "center center",
            scrub: true,
            markers: true,
          },
        },
      );
    }, mainContainerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={mainContainerRef}
      style={{ perspective: "4000px" }}
      className="h-screen p-5 sticky overflow-hidden  top-0 w-full z-0"
    >
      <div
        ref={containerRef}
        className="flex flex-col p-5 gap-20  bg-neutral-500 justify-center  w-full h-full rounded-3xl"
      >
        <h1 className="text-6xl font-poppins font-semibold">SKILLS</h1>
        <div className="grid grid-cols-4 gap-4">
          {data.skills.data.map((skill, i) => (
            <div key={i} className="p-4 bg-white rounded-3xl text-center">
              <h1 className="text-xl font-poppins">{skill.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
