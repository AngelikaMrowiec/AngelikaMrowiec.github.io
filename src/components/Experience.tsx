import jeweller from "../assets/pngs/jeweller.jpg";
import pim from "../assets/pngs/pim.png";
import gardens from "../assets/pngs/gardens.png";
import Project from "./Project";
import { motion } from "framer-motion";

export default function Experience() {
  const { innerWidth: width } = window;
  const x = width > 600 ? -300 : -100;
 
  return (
    <section
      id="experience"
      className="relative flex flex-col items-center justify-center min-h-screen lg:h-screen text-white mx-10 p-6 overflow-hidden"
    >
      <div className="flex lg:p-6">
        <h1 className="text-lg transition-transform duration-500 ease-out cursor-default hover:bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end hover:text-transparent hover:bg-clip-text">
          Hover for more details
          </h1>
      </div>
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
            <Project src={jeweller}>
              <ul className="list-disc ml-4">
                <li>Operating the cash register, processing returns, and handling customer complaints.</li>
                <li>Valuation and preparation of purchase agreements for gold and silver scrap.</li>
                <li>Supervision of the proper circulation of documentation for received goods.</li>
              </ul>
            </Project>
          </motion.li>
          <div className="flex text-center flex-col gap-6 lg:mt-6"> 
            <h1 className="text-lg">Customer Advisor</h1> 
            <h2>Taxor</h2>
          </div>
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
            <Project src={pim}>
              <ul className="list-disc ml-4">
                <li>Using CMS software to publish product content on the Martes Sport Group’s online stores.</li>
                <li>Preparing technical information about internal and external brand products.</li>
                <li>Creating and implementing advertising banners that increase conversion rates using Insider software.</li>
              </ul>
            </Project>
          </motion.li>
          <div className="flex text-center flex-col gap-6 lg:mt-6"> 
            <h1 className="text-lg">Product Data Management Specialist</h1> 
            <h2>Farias Sp. z o.o.</h2>
          </div>
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
            <Project src={gardens}>
              <ul className="list-disc ml-4">
                <li>Maintaining ongoing contact in English with suppliers and with clients.</li>
                <li>Responsibility for overseeing the entire product lifecycle in the luggage category.</li>
                <li>Coordinating the introduction of products created under external licenses, including collaboration with partners, and managing the production schedule and process.</li>
              </ul>
            </Project>
          </motion.li>
          <div className="flex text-center flex-col gap-6 lg:mt-6"> 
            <h1 className="text-lg">Production Planning Specialist</h1> 
            <h2>Farias Sp. z o.o.</h2>
          </div>
        </div>
      </ul>
    </section>
  );
}
