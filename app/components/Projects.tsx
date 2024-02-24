import gsap from "gsap";
import { useLayoutEffect, useEffect, useRef } from "react";

export const Projects = () => {
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
				className="flex items-center  bg-neutral-400 justify-center  w-full h-full rounded-3xl"
			>
				<div className="flex items-center gap-100">
					<h1 className="text-6xl font-poppins font-semibold">PROJECTS</h1>
				</div>
			</div>
		</div>
	);
};
