import Image from "next/image";
import { data } from "../lib/data";

export const Hero = () => {
  return (
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
  );
};
