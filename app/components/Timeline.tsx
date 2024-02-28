import gsap from "gsap";
import { useLayoutEffect, useEffect, useRef } from "react";
import { data } from "../lib/data";

export const Timeline = () => {
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
				},
			}).to(overlayRefs.current, {
				xPercent: -100,
				stagger: 0.05,
				scrollTrigger: {
					trigger: mainContainerRef.current,
					start: "top 40%",
					end: "top 10%",
					scrub: true,
				},
			});
		}, mainContainerRef);
	}, []);

	return (
		<div
			className="flex bg-neutral-700 flex-col gap-10 p-10 h-full w-full"
			ref={mainContainerRef}
		>
			<h1 className="text-6xl font-poppins font-semibold">
				Education & Experience
			</h1>
			<div className="flex gap-10  h-full w-full overflow-hidden">
				<div className="h-full w-full flex flex-col justify-center gap-4">
					{data.education.data.map((item, i) => (
						<div className="p-5 bg-white rounded-md" key={i}>
							<h1>{item.major}</h1>
						</div>
					))}
				</div>
				<div className="h-full w-full flex flex-col justify-center gap-4">
					{data.experience.data.map((item, i) => (
						<div className="p-5 bg-white rounded-md" key={i}>
							<h1>{item.company}</h1>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
