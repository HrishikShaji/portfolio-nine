"use client";
import gsap from "gsap";
import { useLayoutEffect, useEffect, useRef } from "react";
import { data } from "../lib/data";

export const Skills = () => {
	const mainContainerRef = useRef<HTMLDivElement>(null);
	const skillRef = useRef<(HTMLDivElement | null)[]>([]);
	const overlayRef = useRef<(HTMLDivElement | null)[]>([]);

	useEffect(() => {
		let ctx = gsap.context(() => {
			gsap.set(skillRef.current, { yPercent: 200 });
			const tl = gsap.timeline();
			tl.to(skillRef.current, {
				yPercent: 0,
				stagger: { each: 0.05, from: "center" },
				scrollTrigger: {
					trigger: mainContainerRef.current,
					start: "top bottom",
					end: "center center",
					scrub: 1,
				},
			}).to(overlayRef.current, {
				yPercent: -100,
				stagger: { each: 0.05, from: "center" },
				scrollTrigger: {
					trigger: mainContainerRef.current,
					start: "top 10%",
					end: "top top",
					scrub: 1,
					markers: true,
				},
			});

			const mouseEnter = (e: MouseEvent) => {
				gsap.to(e.target, {
					width: "800px",
					duration: 0.75,
				});
			};
			const mouseLeave = (e: MouseEvent) => {
				gsap.to(e.target, {
					width: "150px",
					duration: 0.75,
				});
			};

			skillRef.current.forEach((el) => {
				el?.addEventListener("mouseenter", mouseEnter);
				el?.addEventListener("mouseleave", mouseLeave);

				const heading = el?.getElementsByClassName("heading");

				return () => {
					el?.removeEventListener("mouseenter", mouseEnter);
					el?.removeEventListener("mouseleave", mouseLeave);
				};
			});
		}, mainContainerRef);
	}, []);

	return (
		<div
			className="h-full rounded-3xl w-full p-10 bg-neutral-400 flex flex-col gap-10"
			ref={mainContainerRef}
		>
			<h1 className="text-6xl font-poppins font-semibold">SKILLS</h1>
			<div className="flex gap-2 h-full w-full">
				{data.skills.data.map((skill, i) => (
					<div
						ref={(el) => (skillRef.current[i] = el)}
						key={i}
						className="bg-white overflow-hidden h-full w-[150px] flex relative items-end "
					>
						<div
							ref={(el) => (overlayRef.current[i] = el)}
							className="h-full w-full z-10 absolute mix-blend-difference bg-white origin-top"
						></div>
						<div className="absolute bottom-0  transform left-[15%] ">
							<h1 className="heading whitespace-nowrap transform text-5xl origin-top-left -rotate-90">
								{skill.name}
							</h1>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
