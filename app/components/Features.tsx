import gsap from "gsap";
import { useLayoutEffect, useEffect, useRef } from "react";
import { data } from "../lib/data";

export const Features = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainContainerRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const overlayRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      gsap.set(featureRefs.current, { xPercent: 100 });
      gsap.set(featureRefs.current, { xPercent: 0 });
      tl.to(featureRefs.current, {
        xPercent: 0,
        stagger: 0.05,
        scrollTrigger: {
          trigger: mainContainerRef.current,
          start: "top bottom",
          end: "top top",
          scrub: true,
          markers: true,
        },
      }).to(overlayRefs.current, {
        xPercent: -100,
        stagger: 0.05,
        scrollTrigger: {
          trigger: mainContainerRef.current,
          start: "top 40%",
          end: "top 10%",
          scrub: true,
          markers: true,
        },
      });
    }, mainContainerRef);
  }, []);

  return (
    <div
      ref={mainContainerRef}
      className="h-full rounded-3xl w-full p-10 bg-neutral-400 flex flex-col gap-10"
    >
      <h1 className="text-6xl font-poppins font-semibold">Features</h1>
      <div className="flex  justify-between items-center gap-4 h-full w-full overflow-hidden">
        {data.features.data.map((feature, i) => (
          <div
            ref={(el) => (featureRefs.current[i] = el)}
            className="p-2 relative rounded-xl bg-white flex w-full h-[60%] overflow-hidden"
            key={i}
          >
            <div
              className="absolute top-0 left-0 rounded-xl w-full h-full bg-black"
              ref={(el) => (overlayRefs.current[i] = el)}
            ></div>
            <h1>{feature.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};
