import gsap from "gsap";
import Image from "next/image";
import { useLayoutEffect, useEffect, useRef } from "react";
import { data } from "../lib/data";

export const About = () => {
	const mainContainerRef = useRef<HTMLDivElement>(null);
	const imageRef = useRef<HTMLImageElement>(null);
	const paragraphRef = useRef<HTMLParagraphElement>(null);

	useEffect(() => {
		let ctx = gsap.context(() => {
			const tl = gsap.timeline();
			tl.from(imageRef.current, {
				scale: 1.5,
				scrollTrigger: {
					trigger: mainContainerRef.current,
					start: "top bottom",
					end: "center center",
					scrub: 1,
				},
			}).from(paragraphRef.current, {
				opacity: 0,
				scrollTrigger: {
					trigger: mainContainerRef.current,
					start: "top 40%",
					end: "top 25%",
					scrub: 1,
				},
			});
		}, mainContainerRef);

		return () => ctx.revert();
	}, []);

	return (
		<div
			className="flex bg-neutral-700 flex-col gap-10 p-10 h-full w-full"
			ref={mainContainerRef}
		>
			<h1 className="text-6xl font-poppins font-semibold">About</h1>
			<div className="flex w-full h-full items-center gap-10">
				<div className="w-[50%]  h-full">
					<div className="w-full rounded-3xl h-full overflow-hidden">
						<Image
							ref={imageRef}
							src={data.personal.profileImg}
							className="h-full    w-fit  object-cover"
							height={1000}
							width={1000}
							alt="image"
						/>
					</div>
				</div>
				<div className="w-[50%] h-full flex items-center">
					<p className=" text-xl" ref={paragraphRef}>
						{data.about.description}
					</p>
				</div>
			</div>
		</div>
	);
};
