import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef } from "react";
import NavElement from "./NavElement";

export default function Home() {
  const [isTopLeft, setIsTopLeft] = useState(false);
  const ref = useRef(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const { innerHeight: height } = window;

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest >= height / 8 && !isTopLeft) setIsTopLeft(true);
    else if (latest < height / 8 && isTopLeft) setIsTopLeft(false);
  });

  return (
    <div className="flex justify-center items-center gap-6 min-h-svh lg:h-screen text-white">
      <motion.ul
        ref={ref}
        layout
        className={`z-10 flex ${
          isTopLeft
            ? "fixed top-4 left-4 flex-col justify-start space-y-0.5"
            : "absolute flex-row space-x-4 justify-center"
        }`}
      >
        <NavElement href="#about" isTopLeft={isTopLeft}>
          about
        </NavElement>
        <li>
          <div
            className={`${
              isTopLeft ? "hidden" : "border border-l-1 border-solid h-4"
            }`}
          />
        </li>
        <NavElement href="#projects" isTopLeft={isTopLeft}>
          projects
        </NavElement>
        <li>
          <div
            className={`${
              isTopLeft ? "hidden" : "border border-l-1 border-solid h-4"
            }`}
          />
        </li>
        <NavElement href="#contact" isTopLeft={isTopLeft}>
          contact
        </NavElement>
      </motion.ul>
    </div>
  );
}
