import trainingAppImg from "../assets/pngs/training-app.png";
import plantShelfImg from "../assets/pngs/plant-shelf.png";
import militaryImg from "../assets/pngs/military.png";
import Project from "./Project";
import Link from "./Link";
import { motion } from "framer-motion";

export default function Projects() {
  const { innerWidth: width } = window;
  const x = width > 600 ? -300 : -100;
 
  return (
    <section
      id="projects"
      className="relative flex flex-col items-center justify-center min-h-screen lg:h-screen text-white mx-10 p-6 overflow-hidden"
    >
      <ul className="flex flex-col gap-10 lg:flex-row lg:gap-16">
        <div className="flex flex-col space-y-6 lg:space-y-10">
          <motion.li
            initial={{ x: x, y: 200, opacity: 0, rotate: -30 }}
            whileInView={{
              x: 0,
              y: 0,
              opacity: 1,
              rotate: 0,
              transition: { duration: 0.75, ease: "easeOut" },
            }}
          >
            <Project src={trainingAppImg}>
              PWA with a timer allows you to customize the number of repetitions
              and the time of exercise and break. Useful while practicing yoga or
              stretching.
              <br /> Used:
              <ul className="list-disc ml-4">
                <li>React with TypeScript,</li>
                <li>TanStack Router,</li>
                <li>API Context,</li>
                <li>Tailwind.</li>
              </ul>
            </Project>
          </motion.li>
          <motion.li
            initial={{ x: 0, y: 0, opacity: 0 }}
            whileInView={{
              x: 0,
              y: 0,
              opacity: 1,
              rotate: 0,
              transition: { duration: 1, ease: "easeIn", delay: 0.5 },
            }}
          >
            <Link urlG="https://github.com/AngelikaMrowiec/training-app" urlL="https://angelikamrowiec.github.io/training-app" />
          </motion.li>
        </div>
        <div className="flex flex-col space-y-6 lg:space-y-10">
          <motion.li
            initial={{ x: 0, y: 300, opacity: 0 }}
            whileInView={{
              x: 0,
              y: 0,
              opacity: 1,
              transition: { duration: 0.75, ease: "easeOut" },
            }}
          >
            <Project src={plantShelfImg}>
              A website helps you to systematize and schedule your plant care
              routine.
              <br /> Used:
              <ul className="list-disc ml-4">
                <li>React with TypeScript,</li>
                <li>React Router,</li>
                <li>API Context,</li>
                <li>Framer Motion,</li>
                <li>Tailwind.</li>
              </ul>
            </Project>
          </motion.li>
          <motion.li
            initial={{ x: 0, y: 0, opacity: 0 }}
            whileInView={{
              x: 0,
              y: 0,
              opacity: 1,
              rotate: 0,
              transition: { duration: 1, ease: "easeIn", delay: 0.5 },
            }}
          >
            <Link urlG="https://github.com/AngelikaMrowiec/plant-shelf" urlL="https://angelikamrowiec.github.io/plant-shelf" />
          </motion.li>
        </div>
        <div className="flex flex-col space-y-6 lg:space-y-10">
          <motion.li
            initial={{ x: x, y: 200, opacity: 0, rotate: 30 }}
            whileInView={{
              x: 0,
              y: 0,
              opacity: 1,
              rotate: 0,
              transition: { duration: 0.75, ease: "easeOut" },
            }}
          >
            <Project src={militaryImg}>
              A website used to display sales data of a store. Data is fetched
              from the backend that uses token for authorization.
              <br /> Used:
              <ul className="list-disc ml-4">
                <li>React with TypeScript,</li>
                <li>React Router,</li>
                <li>TanStack Table,</li>
                <li>Chart.js,</li>
                <li>Framer Motion,</li>
                <li>Tailwind.</li>
              </ul>
            </Project>
          </motion.li>
          <motion.li
            initial={{ x: 0, y: 0, opacity: 0 }}
            whileInView={{
              x: 0,
              y: 0,
              opacity: 1,
              rotate: 0,
              transition: { duration: 1, ease: "easeIn", delay: 0.5 },
            }}
          >
            <Link urlG="https://github.com/AngelikaMrowiec/military-records/" />
          </motion.li>
        </div>
      </ul>
    </section>
  );
}
