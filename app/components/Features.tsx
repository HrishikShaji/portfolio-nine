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
			gsap.set(featureRefs.current, {
				yPercent: (i) => (i % 2 === 0 ? 50 : -50),
			});
			gsap.set(overlayRefs.current, { yPercent: 0 });
			tl.to(featureRefs.current, {
				yPercent: 0,
				scrollTrigger: {
					trigger: mainContainerRef.current,
					start: "top center",
					end: "top top",
					scrub: true,
				},
			}).to(overlayRefs.current, {
				yPercent: (i) => (i % 2 === 0 ? -100 : 100),
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
