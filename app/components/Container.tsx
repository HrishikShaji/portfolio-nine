import gsap from "gsap";
import { useEffect, useRef, ReactNode } from "react";

interface ContainerProps {
	children: ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
	const mainContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let ctx = gsap.context(() => {
			const tl = gsap.timeline();
			tl.from(mainContainerRef.current, {
				scale: 1.05,
				scrollTrigger: {
					trigger: mainContainerRef.current,
					start: "top center",
					end: "top top",
					scrub: 1,
				},
			}).fromTo(
				mainContainerRef.current,
				{ scale: 1 },
				{
					immediateRender: false,
					scale: 0.95,
					scrollTrigger: {
						trigger: mainContainerRef.current,
						start: "bottom center",
						end: "bottom top",
						scrub: 1,
					},
				},
			);
		}, mainContainerRef);

		return () => ctx.revert();
	}, []);

	return (
		<div
			className="h-full overflow-hidden  rounded-3xl w-full "
			ref={mainContainerRef}
		>
			{children}
		</div>
	);
};
