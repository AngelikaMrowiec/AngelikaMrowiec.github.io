import { AiFillGithub } from "react-icons/ai";
import adventure from "../assets/svgs/adventure.svg";
import { motion } from "framer-motion";

export default function Contact() {
  const { innerWidth: width } = window;
  const x = width > 1020 ? 300 : 100;

  return (
    <section
      id="contact"
      className="relative flex flex-col justify-center items-center min-h-screen lg:h-screen text-white p-6 overflow-hidden"
    >
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-2xl mb-2">Contact me:</h2>
        <a
          href="mailto:angelikasteblik@gmail.com"
          className="text-xl transition-transform duration-500 ease-out cursor-pointer hover:scale-110 hover:bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end hover:text-transparent hover:bg-clip-text"
        >
          angelikasteblik@gmail.com{" "}
        </a>
      </div>
     
      <motion.div
        initial={{ x: x, y: 100, opacity: 0, rotate: 0 }}
        whileInView={{
          x: 0,
          y: 0,
          opacity: 1,
          rotate: 12,
          transition: { duration: 1, ease: "easeOut" },
        }}
        className="absolute bottom-8 right-8 lg:right-20 h-[14rem] w-[12rem] lg:h-[28rem] lg:w-96 bg-stone-300 p-2 lg:p-4 pointer-events-none"
      >
        <div className="bg-stone-500 p-2 lg:p-4 h-[10rem] lg:h-[20rem]">
          <img src={adventure} className="h-full w-full" />
        </div>
      </motion.div>
    </section>
  );
}
