import gsap from "gsap";
import Image from "next/image";
import { useLayoutEffect, useEffect, useRef } from "react";
import { data } from "../lib/data";

export const About = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const mainContainerRef = useRef<HTMLDivElement>(null);
	const imageRef = useRef<HTMLImageElement>(null);
	const paragraphRef = useRef<HTMLParagraphElement>(null);

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			const tl = gsap.timeline();
			gsap.set(paragraphRef.current, { opacity: 0 });
			gsap.fromTo(
				imageRef.current,
				{ scale: 2.5 },
				{
					scale: 1,
					scrollTrigger: {
						trigger: mainContainerRef.current,
						start: "top bottom",
						end: "center center",
						scrub: 1,
					},
				},
			);
			gsap.to(paragraphRef.current, {
				opacity: 1,
				scrollTrigger: {
					trigger: mainContainerRef.current,
					start: "top 25%",
					end: "center center",
					scrub: 1,
					markers: true,
				},
			});
		}, mainContainerRef);
	}, []);

	return (
		<div className="flex h-full w-full flex-col gap-10" ref={mainContainerRef}>
			<h1 className="text-6xl font-poppins font-semibold">ABOUT</h1>
			<div className="flex items-center gap-10">
				<div className="w-[50vw] rounded-3xl h-full overflow-hidden">
					<Image
						ref={imageRef}
						src={data.personal.profileImg}
						className="h-full    w-[50vw]  object-cover"
						height={1000}
						width={1000}
						alt="image"
					/>
				</div>
				<p className="w-[50%] text-xl" ref={paragraphRef}>
					{data.about.description}
				</p>
			</div>
		</div>
	);
};
