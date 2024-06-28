import { ReactNode } from "react";

type Props = {
  src: string;
  children: ReactNode;
};

export default function Project({ src, children }: Props) {
  return (
    <div className="bg-stone-300 p-4 h-[20rem] lg:h-[28rem] w-full lg:w-96 relative group duration-200 hover:bg-opacity-20">
      <img
        src={src}
        className="w-full h-[12rem] lg:h-[20rem] object-cover group-hover:brightness-50 duration-300"
      />
      <div className="absolute inset-0 text-pretty m-4 lg:m-10 text-white opacity-0 group-hover:opacity-100 duration-300">
        {children}
      </div>
    </div>
  );
}
