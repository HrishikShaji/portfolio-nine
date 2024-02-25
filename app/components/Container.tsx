import gsap from "gsap";
import { useLayoutEffect, useEffect, useRef, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        {
          y: 200,
          scale: 1.1,
        },
        {
          y: 0,
          scale: 1,
          scrollTrigger: {
            trigger: mainContainerRef.current,
            start: "top bottom",
            end: "center center",
            scrub: 1,
          },
        },
      );
    }, mainContainerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={mainContainerRef}
      className=" h-screen p-5 sticky overflow-hidden  top-0 w-full z-0"
    >
      <div
        ref={containerRef}
        className="flex flex-col p-5 gap-20  bg-neutral-600 justify-center  w-full h-full rounded-3xl"
      >
        {children}
      </div>
    </div>
  );
};
