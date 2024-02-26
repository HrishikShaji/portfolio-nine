import gsap from "gsap";
import { useLayoutEffect, useEffect, useRef } from "react";

export const Contact = () => {
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
      <div className="flex items-center gap-100">
        <h1 className="text-6xl font-poppins font-semibold">CONTACT</h1>
      </div>
    </div>
  );
};
