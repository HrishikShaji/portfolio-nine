import gsap from "gsap";
import { useLayoutEffect, useEffect, useRef } from "react";
import { data } from "../lib/data";

export const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainContainerRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const overlayRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      gsap.set(projectRefs.current, { xPercent: 100 });
      gsap.set(overlayRefs.current, { xPercent: 0 });
      tl.to(projectRefs.current, {
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
      <h1 className="text-6xl font-poppins font-semibold">Testimonials</h1>
      <div className="grid grid-cols-3 gap-4 h-full w-full overflow-hidden">
        {data.testimonials.map((item, i) => (
          <div
            className="flex justify-center items-center rounded-xl bg-white w-full h-full"
            key={i}
          >
            <h1>{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};
