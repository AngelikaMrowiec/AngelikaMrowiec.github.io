import { FaReact } from "react-icons/fa";
import { BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { motion } from "framer-motion";
import trainingAppImg from "../assets/pngs/training-app.png";
import Link from "./Link";


export default function Example() {
  const { innerWidth: width } = window;
  const { innerHeight: height } = window;


  const x = width > 850 ? -300 : 0;
  const y = height > 850 ? 100 : -100

  return (
    <section
      id="project"
      className="flex flex-row justify-center items-center w-full min-h-screen lg:h-screen text-white p-4 lg:p-6"
    >
      <div className="flex flex-col-reverse md:flex-col md:items-end w-full sm:w-1/3 md:w-1/2 space-y-10 md:space-y-6 lg:p-6">
        <h1 className="mt-5 w-full md:w-1/2 md:text-xl text-balance text-right md:text-left sm:text-pretty font-medium">
          Fun project:
          <span className="transition-transform duration-500 ease-out cursor-default hover:bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end hover:text-transparent hover:bg-clip-text">
            {" "}
            Timer
          </span>
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
          className="h-[14rem] w-full md:w-1/2 lg:h-[28rem] lg:w-96 bg-stone-300 p-4 lg:p-4 pointer-events-none"
        >
            <img src={trainingAppImg} className="w-full h-[12rem] lg:h-[20rem] object-cover group-hover:brightness-50 duration-300" alt="project"/>
        </motion.div>
      </div>
      <div className="w-full sm:w-1/3 md:w-1/2 md:p-6 pl-3 lg:pl-6">
        <div className="w-full lg:w-1/2 md:text-lg text-pretty text-left">
        A while back, I needed a timer with sound notifications that let me set the number of repetitions and break intervals while stretching, so I made a simple sample version for myself. <br />        
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
          <div className="flex justify-center gap-6 lg:mt-6"> 
            <Link urlG="https://github.com/AngelikaMrowiec/training-app" urlL="https://angelikamrowiec.github.io/training-app" />
          </div>
        </div>
      </div>
    </section>
  );
}
