import gsap from "gsap";
import { useLayoutEffect, useEffect, useRef } from "react";
import { data } from "../lib/data";

export const Testimonials = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const mainContainerRef = useRef<HTMLDivElement>(null);
	const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);
	const overlayRefs = useRef<(HTMLDivElement | null)[]>([]);

	useEffect(() => {
		const coordinates = [
			{ xPercent: 100, yPercent: 100 },
			{ xPercent: 0, yPercent: 100 },
			{ xPercent: -100, yPercent: 100 },
			{ xPercent: 100, yPercent: 0 },
			{ xPercent: 0, yPercent: 0 },
			{ xPercent: -100, yPercent: 0 },
			{ xPercent: 100, yPercent: -100 },
			{ xPercent: 0, yPercent: -100 },
			{ xPercent: -100, yPercent: -100 },
		];
		let ctx = gsap.context(() => {
			const tl = gsap.timeline();
			gsap.set(testimonialRefs.current, {
				xPercent: (i) => coordinates[i].xPercent,
				yPercent: (i) => coordinates[i].yPercent,
			});
			gsap.set(overlayRefs.current, { xPercent: 0 });
			tl.to(testimonialRefs.current, {
				xPercent: 0,
				yPercent: 0,
				duration: 1,
				scrollTrigger: {
					trigger: mainContainerRef.current,
					start: "top 15%",
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
						ref={(el) => (testimonialRefs.current[i] = el)}
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
