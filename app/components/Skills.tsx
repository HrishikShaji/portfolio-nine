import gsap from "gsap";
import { useLayoutEffect, useEffect, useRef } from "react";
import { data } from "../lib/data";

export const Skills = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const mainContainerRef = useRef<HTMLDivElement>(null);
	const skillRef = useRef<(HTMLDivElement | null)[]>([]);

	useEffect(() => {
		let ctx = gsap.context(() => {
			const tl = gsap.timeline();
			tl.fromTo(
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
			).from(skillRef.current, {
				y: 100,
				stagger: 0.025,
				duration: 2,
				scrollTrigger: {
					trigger: mainContainerRef.current,
					start: "top bottom",
					end: "center center",
					scrub: 1,
				},
			});
		}, mainContainerRef);
		return () => ctx.revert();
	}, []);

	return (
		<div
			ref={mainContainerRef}
			className="h-screen p-5 sticky overflow-hidden  top-0 w-full z-0"
		>
			<div
				ref={containerRef}
				className="flex flex-col p-5 gap-20  bg-neutral-500 justify-center  w-full h-full rounded-3xl"
			>
				<h1 className="text-6xl font-poppins font-semibold">SKILLS</h1>
				<div className="flex gap-2 h-full w-full">
					{data.skills.data.map((skill, i) => (
						<div
							ref={(el) => (skillRef.current[i] = el)}
							key={i}
							className="bg-white h-full w-full flex relative items-end"
						>
							<div className="absolute bottom-0  transform left-[15%] ">
								<h1 className="whitespace-nowrap transform text-5xl origin-top-left -rotate-90">
									{skill.name}
								</h1>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
