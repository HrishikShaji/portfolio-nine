"use client";

import Image from "next/image";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Container } from "./components/Container";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
	const containerRefs = useRef<(HTMLDivElement | null)[]>([]);

	useEffect(() => {
		containerRefs.current.forEach((el) => {
			gsap.fromTo(
				el,
				{
					scale: 1.1,
				},
				{
					scale: 1,
					scrollTrigger: {
						trigger: el,
						pin: el,
						start: "top top",
						end: "center 30%",
						scrub: 1,
					},
				},
			);
		});
	}, []);

	const lookup = [
		{ component: <Hero /> },
		{ component: <About /> },
		{ component: <Skills /> },
	];

	return (
		<main className=" bg-neutral-900">
			{lookup.map((item, i) => (
				<div
					key={i}
					className="h-screen p-10 sticky top-0 w-full flex justify-center items-center"
				>
					<div className="h-full w-full">{item.component}</div>
				</div>
			))}
		</main>
	);
}
