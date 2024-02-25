import Image from "next/image";
import { data } from "../lib/data";

export const Hero = () => {
	return (
		<div className="snap-center h-screen p-5 sticky top-0 w-full z-0">
			<div className="flex items-center bg-neutral-700 justify-center w-full h-full rounded-3xl">
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
		</div>
	);
};
