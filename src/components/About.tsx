import girl from "../assets/svgs/girl.svg";
import { FaReact } from "react-icons/fa";
import { BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { motion } from "framer-motion";


export default function About() {
  const { innerWidth: width } = window;
  const { innerHeight: height } = window;


  const x = width > 850 ? -300 : -100;
  const y = height > 850 ? 100 : -100

  return (
    <div
      id="about"
      className="flex flex-row justify-center items-center w-full min-h-screen lg:h-screen text-white p-4 lg:p-6"
    >
      <div className="flex flex-col-reverse md:flex-col md:items-end w-full sm:w-1/3 md:w-1/2 space-y-10 md:space-y-6 lg:p-6">
        <h1 className="mt-5 w-full md:w-1/2 md:text-xl text-balance text-right md:text-left sm:text-pretty font-medium">
          Hello, my name is
          <span className="transition-transform duration-500 ease-out cursor-default hover:bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end hover:text-transparent hover:bg-clip-text">
            {" "}
            Angelika
          </span>
          . I was supposed to be a teacher. Instead, I'm learning to code.
        </h1>
        <motion.div
          initial={{ x: x, y: y, opacity: 0, rotate: -24 }}
          whileInView={{
            x: 0,
            y: 0,
            opacity: 1,
            rotate: 0,
            transition: { duration: 1, ease: "easeOut" },
          }}
          className="h-[14rem] w-full md:w-1/2 lg:h-[28rem] lg:w-96 bg-stone-300 p-2 lg:p-4 pointer-events-none"
        >
          <div className="w-full bg-stone-500 p-2 lg:p-4 h-[10rem] lg:h-[20rem]">
            <img src={girl} className="h-full w-full" alt="girl" />
          </div>
        </motion.div>
      </div>
      <div className="w-full sm:w-1/3 md:w-1/2 md:p-6 pl-3 lg:pl-6">
        <p className="w-full lg:w-1/2 md:text-lg text-pretty text-left">
        I like hiking, gardening, and Japanese literature. Now, I have started a new journey of web-development, and I would like to see where it takes me. 
          <br /> Education: Bachelor's degree in English Philology at the
          <a href="https://ubb.edu.pl"> University of Bielsko-Biała</a>.<br />
          Skillset:
          <div className="flex justify-center gap-6 lg:mt-6">
            <FaReact
              className="size-10 md:size-14 transition transform duration-300 ease-in-out hover:scale-110 hover:text-yellow-500"
            />
            <BiLogoTailwindCss
              className="size-10 md:size-14 transition transform duration-300 ease-in-out hover:scale-110 hover:text-yellow-500"
            />
            <BiLogoTypescript
              className="size-10 md:size-14 transition transform duration-300 ease-in-out hover:scale-110 hover:text-yellow-500"
            />
          </div>
        </p>
      </div>
    </div>
  );
}
