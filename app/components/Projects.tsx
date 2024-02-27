import gsap from "gsap";
import { useLayoutEffect, useEffect, useRef } from "react";
import { data } from "../lib/data";

export const Projects = () => {
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
          },
        },
      );
    }, mainContainerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={mainContainerRef}
      className="h-full rounded-3xl w-full p-10 bg-neutral-400 flex flex-col gap-10"
    >
      <h1 className="text-6xl font-poppins font-semibold">PROJECTS</h1>
      <div className="flex items-center gap-100 h-full w-full">
        <div className="flex flex-col justify-between gap-2 h-full w-full">
          {data.projects.data.slice(0, 10).map((project, i) => (
            <div
              className="p-2 rounded-xl bg-white flex flex-grow h-full"
              key={i}
            >
              <h1>{project.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
