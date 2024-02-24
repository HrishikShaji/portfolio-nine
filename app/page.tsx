"use client";

import Image from "next/image";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
	return (
		<main className=" bg-neutral-900 relative  w-full   ">
			<Hero />
			<About />
		</main>
	);
}
