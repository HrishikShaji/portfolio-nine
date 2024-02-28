import gsap from "gsap";
import { useLayoutEffect, useEffect, useRef } from "react";

export const Contact = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const mainContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let ctx = gsap.context(() => { }, mainContainerRef);
		return () => ctx.revert();
	}, []);

	return (
		<div
			className="flex bg-neutral-700 flex-col gap-10 p-10 h-full w-full"
			ref={mainContainerRef}
		>
			<h1 className="text-6xl font-poppins font-semibold">Contact</h1>
			<div className="flex flex-col items-center justify-center gap-2 h-full w-full overflow-hidden">
				<form className="w-[50%] h-[50%] flex flex-col gap-4">
					<input
						className="w-full p-2 rounded-md focus:outline-none"
						placeholder="name"
					/>
					<input
						className="w-full p-2 rounded-md focus:outline-none"
						placeholder="email"
					/>
					<textarea
						className="w-full p-2 rounded-md focus:outline-none"
						placeholder="message"
					/>
					<button className="p-2 rounded-md bg-white">Send Message</button>
				</form>
			</div>
		</div>
	);
};
