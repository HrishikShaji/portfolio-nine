"use client";
import gsap from "gsap";
import { useLayoutEffect, useEffect, useRef } from "react";

interface SkillProps {
	item: Record<string, any>;
}

export const Skill: React.FC<SkillProps> = ({ item }) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const headingRef = useRef<HTMLHeadingElement>(null);

	useEffect(() => {
		let ctx = gsap.context(() => {
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
			if (containerRef.current) {
				containerRef.current.addEventListener("mouseenter", mouseEnter);
				containerRef.current.addEventListener("mouseleave", mouseLeave);

				return () => {
					containerRef.current.removeEventListener("mouseenter", mouseEnter);
					containerRef.current.removeEventListener("mouseleave", mouseLeave);
				};
			}
		}, containerRef);
	}, []);

	return (
		<div
			ref={containerRef}
			className="absolute bottom-0  transform left-[15%] "
		>
			<h1
				ref={headingRef}
				className="heading whitespace-nowrap transform text-5xl origin-top-left -rotate-90"
			>
				{item.name}
			</h1>
		</div>
	);
};
