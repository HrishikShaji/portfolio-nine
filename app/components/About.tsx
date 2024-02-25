import gsap from "gsap";
import Image from "next/image";
import { useLayoutEffect, useEffect, useRef } from "react";
import { data } from "../lib/data";

export const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      gsap.set(paragraphRef.current, { opacity: 0 });
      tl.fromTo(
        imageRef.current,
        { scale: 2.5 },
        {
          scale: 1,
          scrollTrigger: {
            trigger: mainContainerRef.current,
            start: "top bottom",
            end: "center center",
            scrub: 1,
          },
        },
      )
        .fromTo(
          containerRef.current,
          {
            rotateX: "-45deg",
            y: 200,
            scale: 1.1,
          },
          {
            y: 0,
            scale: 1,
            rotateX: "0deg",
            scrollTrigger: {
              trigger: mainContainerRef.current,
              start: "top bottom",
              end: "center center",
              scrub: 1,
            },
          },
        )
        .to(paragraphRef.current, {
          opacity: 1,
          scrollTrigger: {
            trigger: mainContainerRef.current,
            start: "top 25%",
            end: "center center",
            scrub: 1,
            markers: true,
          },
        });
    }, mainContainerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={mainContainerRef}
      className="snap-center h-screen p-5 sticky overflow-hidden  top-0 w-full z-0"
    >
      <div
        ref={containerRef}
        className="flex flex-col p-5 gap-20  bg-neutral-600 justify-center  w-full h-full rounded-3xl"
      >
        <h1 className="text-6xl font-poppins font-semibold">ABOUT</h1>
        <div className="flex items-center gap-10">
          <div className="w-[50%] rounded-3xl h-full overflow-hidden">
            <Image
              ref={imageRef}
              src={data.personal.profileImg}
              className="h-full    w-full flex-1 object-cover"
              height={1000}
              width={1000}
              alt="image"
            />
          </div>
          <p className="w-[50%] text-xl" ref={paragraphRef}>
            {data.about.description}
          </p>
        </div>
      </div>
    </div>
  );
};
