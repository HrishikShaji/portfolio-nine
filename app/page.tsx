"use client";

import { Hero } from "./components/Hero";
import { About } from "./components/About";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { useEffect, useRef } from "react";
import { Features } from "./components/Features";
import { Timeline } from "./components/Timeline";
import { Testimonials } from "./components/Testimonials";
import { Container } from "./components/Container";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
	const containerRefs = useRef<(HTMLDivElement | null)[]>([]);

	useEffect(() => {
		let ctx = gsap.context(() => {
			containerRefs.current.forEach((card) => {
				gsap.to(card, {
					scrollTrigger: {
						trigger: card,
						start: () => `top bottom-=100`,
						end: () => `top top+=40`,
						scrub: 2,
					},
					ease: "none",
				});

				ScrollTrigger.create({
					trigger: card,
					start: "top top",
					pin: true,
					pinSpacing: false,
					id: "pin",
					end: "max",
				});
			});
		});

		return () => ctx.revert();
	}, []);

	const lookup = [
		{ component: <Hero /> },
		{ component: <About /> },
		{ component: <Timeline /> },
		{ component: <Features /> },
		{ component: <Skills /> },
		{ component: <Projects /> },
		{ component: <Testimonials /> },
		{ component: <Contact /> },
	];

	return (
		<main className="h-full flex flex-col gap-[400px] bg-neutral-900">
			{lookup.map((item, i) => (
				<div
					ref={(el) => (containerRefs.current[i] = el)}
					key={i}
					className="h-screen p-10  w-full flex justify-center items-center"
				>
					<Container>{item.component}</Container>
				</div>
			))}
		</main>
	);
}
