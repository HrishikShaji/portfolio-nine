import gsap from "gsap";
import Image from "next/image";
import { useLayoutEffect, useEffect, useRef } from "react";
import { data } from "../lib/data";

export const About = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const mainContainerRef = useRef<HTMLDivElement>(null);
	const imageRef = useRef<HTMLImageElement>(null);
	const paragraphRef = useRef<HTMLParagraphElement>(null);

	useEffect(() => {
		let ctx = gsap.context(() => {
			const tl = gsap.timeline();
			tl.from(imageRef.current, {
				scale: 2.5,
				scrollTrigger: {
					trigger: imageRef.current,
					start: "top bottom",
					end: "center center",
					scrub: 1,
				},
			}).from(paragraphRef.current, {
				opacity: 0,
				scrollTrigger: {
					trigger: paragraphRef.current,
					start: "top 25%",
					end: "center center",
					scrub: 1,
				},
			});
		}, mainContainerRef);

		return () => ctx.revert();
	}, []);

	return (
		<div
			className="flex rounded-3xl h-full bg-neutral-600 w-full flex-col gap-10"
			ref={mainContainerRef}
		>
			<h1 className="text-6xl font-poppins font-semibold">ABOUT</h1>
			<div className="flex w-full h-full items-center gap-10">
				<div className="w-[50%] rounded-3xl h-full">
					<div className="w-[500px] h-[500px] overflow-hidden">
						<Image
							ref={imageRef}
							src={data.personal.profileImg}
							className="h-[500px]    w-[500px]  object-cover"
							height={1000}
							width={1000}
							alt="image"
						/>
					</div>
				</div>
				<div className="w-[50%] h-full">
					<p className=" text-xl" ref={paragraphRef}>
						{data.about.description}
					</p>
				</div>
			</div>
		</div>
	);
};
