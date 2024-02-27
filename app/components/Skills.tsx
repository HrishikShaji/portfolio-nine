"use client";
import gsap from "gsap";
import { useLayoutEffect, useEffect, useRef, useState } from "react";
import { data } from "../lib/data";
import { Skill } from "./Skill";

export const Skills = () => {
	const mainContainerRef = useRef<HTMLDivElement>(null);
	const skillRef = useRef<(HTMLDivElement | null)[]>([]);
	const overlayRef = useRef<(HTMLDivElement | null)[]>([]);
	const [active, setActive] = useState(
		Array(data.skills.data.length).fill(false),
	);

	useEffect(() => {
		let ctx = gsap.context(() => {
			gsap.to(skillRef.current, {
				width: (i) => (i === 0 ? "800px" : "150px"),
				duration: 0.5,
				ease: "back",
			});
			gsap.set(skillRef.current, { yPercent: 200 });
			const tl = gsap.timeline();
			tl.to(skillRef.current, {
				yPercent: 0,
				stagger: { each: 0.05, },
				scrollTrigger: {
					trigger: mainContainerRef.current,
					start: "top bottom",
					end: "center center",
					scrub: 1,
				},
			}).to(overlayRef.current, {
				yPercent: -100,
				stagger: { each: 0.05 },
				scrollTrigger: {
					trigger: mainContainerRef.current,
					start: "top 10%",
					end: "top top",
					scrub: 1,
					markers: true,
				},
			});

			const mouseEnter = (e: MouseEvent) => {
				gsap.to(skillRef.current, {
					width: (i) => (skillRef.current[i] === e.target ? "800px" : "150px"),
					duration: 0.5,
					ease: "back",
				});
			};

			skillRef.current.forEach((el) => {
				el?.addEventListener("mouseenter", mouseEnter);

				return () => {
					el?.removeEventListener("mouseenter", mouseEnter);
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
						onMouseEnter={() => setActive((prev) => ({ ...prev, [i]: true }))}
						onMouseLeave={() => setActive((prev) => ({ ...prev, [i]: false }))}
						ref={(el) => (skillRef.current[i] = el)}
						key={i}
						className="rounded-xl bg-white overflow-hidden h-full w-[150px] flex relative items-end "
					>
						<div
							ref={(el) => (overlayRef.current[i] = el)}
							className="rounded-xl h-full w-full z-10 absolute  bg-black origin-top"
						></div>
					</div>
				))}
			</div>
		</div>
	);
};
