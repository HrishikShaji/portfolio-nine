import Image from "next/image";
import { data } from "../lib/data";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export const Hero = () => {
	const mainContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let ctx = gsap.context(() => {
			const tl = gsap.timeline();
			tl.to(mainContainerRef.current, {
				scale: 0.95,
				scrollTrigger: {
					trigger: mainContainerRef.current,
					start: "bottom center",
					end: "bottom top",
					scrub: 1,
				},
			});
		}, mainContainerRef);

		return () => ctx.revert();
	}, []);
	return (
		<div
			ref={mainContainerRef}
			className="h-full bg-neutral-700 rounded-3xl w-full flex items-center justify-center"
		>
			<div className="flex items-center gap-100">
				<Image
					src={data.personal.img}
					height={1000}
					width={1000}
					alt="image"
					className="size-[200px] rounded-full object-cover"
				/>

				<h1 className="text-6xl font-poppins font-semibold">HELLO WORLD</h1>
			</div>
		</div>
	);
};
