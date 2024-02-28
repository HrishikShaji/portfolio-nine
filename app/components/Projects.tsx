import gsap from "gsap";
import { useLayoutEffect, useEffect, useRef } from "react";
import { data } from "../lib/data";

export const Projects = () => {
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
			<h1 className="text-6xl font-poppins font-semibold">PROJECTS</h1>
			<div className="flex flex-col justify-between gap-2 h-full w-full overflow-hidden">
				{data.projects.data.slice(0, 10).map((project, i) => (
					<div
						ref={(el) => (projectRefs.current[i] = el)}
						className="p-2 relative rounded-xl bg-white flex w-full h-full overflow-hidden"
						key={i}
					>
						<div
							className="absolute top-0 left-0 rounded-xl w-full h-full bg-black"
							ref={(el) => (overlayRefs.current[i] = el)}
						></div>
						<h1>{project.title}</h1>
					</div>
				))}
			</div>
		</div>
	);
};
