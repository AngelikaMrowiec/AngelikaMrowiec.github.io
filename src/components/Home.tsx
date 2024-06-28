import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import { useRef } from "react";

export default function Home() {
  const [isTopLeft, setIsTopLeft] = useState(false);
  const ref = useRef(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const { innerHeight: height } = window;

  useMotionValueEvent(scrollY, "change", (latest) => {
    if(latest >= height/8 && !isTopLeft)
      setIsTopLeft(true)
    else if(latest < height/8 &&isTopLeft)
      setIsTopLeft(false)
  })

  return (

        <div className="flex justify-center items-center gap-6 min-h-svh lg:h-screen text-white">
        <motion.div ref={ref}
          layout
          className={`z-10 flex ${
            isTopLeft
              ? "fixed top-4 left-4 flex-col justify-start space-y-1"
              : "absolute flex-row space-x-4 justify-center"
          }`}
        >
          <a
            href="#about"
            className={`link ${
              isTopLeft
                ? "text-sm text-left hover:text-stone-200"
                : "transition transform duration-300 ease-in-out hover:scale-105 hover:text-stone-200"
            }`}
          >
            about
          </a>
          <div
            className={`${
              isTopLeft ? "hidden" : "border border-l-1 border-solid h-4"
            }`}
          ></div>
          <a
            href="#projects"
            className={`link ${
              isTopLeft
                ? "text-sm text-left hover:text-stone-200"
                : "transition transform duration-300 ease-in-out hover:scale-105 hover:text-stone-200"
            }`}
          >
            projects
          </a>
          <div
            className={`${
              isTopLeft ? "hidden" : "border border-l-1 border-solid h-4"
            }`}
          ></div>
          <a
            href="#contact"
            className={`link ${
              isTopLeft
                ? "text-sm text-left hover:text-stone-200"
                : "transition transform duration-300 ease-in-out hover:scale-105 hover:text-stone-200"
            }`}
          >
            contact
          </a>
        </motion.div>
      </div>
  );
}
