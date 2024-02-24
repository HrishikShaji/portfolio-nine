import gsap from "gsap";
import Image from "next/image";
import { useLayoutEffect, useEffect, useRef } from "react";
import { data } from "../lib/data";

export const About = () => {
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
        className="flex flex-col p-5 gap-20  bg-neutral-600 justify-center  w-full h-full rounded-3xl"
      >
        <h1 className="text-6xl font-poppins font-semibold">ABOUT</h1>
        <div className="flex items-center gap-10">
          <Image
            src={data.personal.profileImg}
            className="h-full  rounded-3xl w-[50%] flex-1 object-cover"
            height={1000}
            width={1000}
            alt="image"
          />
          <p className="w-[50%] text-xl">{data.about.description}</p>
        </div>
      </div>
    </div>
  );
};
