"use client";
import gsap from "gsap";
import { useLayoutEffect, useEffect, useRef } from "react";

interface SkillProps {
	item: Record<string, any>;
	active: boolean;
}

export const Skill: React.FC<SkillProps> = ({ item, active }) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const headingRef = useRef<HTMLHeadingElement>(null);

	useEffect(() => {
		let ctx = gsap.context(() => {
			if (active) {
				gsap.to(headingRef.current, { opacity: 0, duration: 0.5 });
			} else {
				gsap.to(headingRef.current, { opacity: 1, duration: 0.5 });
			}
		}, containerRef);
	}, [active]);

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
