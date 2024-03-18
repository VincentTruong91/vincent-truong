import useMediaQuery from "../hooks/useMediaQuery";
import SocialMediaIcons from "../components/SocialMediaIcons";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return(
    <section id="home" className="md:flex md:justify-between md:items-center md:h-full gap-8 md:pt-0 pt-20">

        {/*IMAGE SECTION */}
        <div className="flex justify-center basis-3/5 z-10 mt-16 md:mt-12">
            {isAboveMediumScreens ? (
                <img alt="profile" src="assets/profile-image1.png" className="z-10 w-full md:pr-20"
                />
            ) : (
                <img alt="profile" src="assets/profile-image1.png" className="z-10 w-full max-w-[700px] md:max-w-[600px]"
                />
            )}
        </div>

        {/* MAIN TEXT SECTION */}
        <div className="z-30 basis-2/5 mt-12 md:mt-32">
            {/* HEADINGS */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} variants={{hidden: {opacity: 0, x: -50}, visible: {opacity: 1, x: 0}}}>
                <p className="text-5xl font-playfair z-10 text-center md:text-start">
                    Hi! My name is Vincent Truong
                </p>

                <p className="mt-5 mb-7 text-lg text-center md:text-start">
                This portfolio the created using Tailwind, React, Framer-Motion, React Hook Form, Components, Git, Github, and Vercel. I've incorporated my Web Development, Deployment, and UI/UX Design skills with the help of Figma for my portfolio.
                </p>
            </motion.div>

            {/* CALL TO ACTION */}
            <motion.div className="flex mt-5 justify-center md:justify-start" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ delay: 0.2, duration: 0.5 }} variants={{hidden: {opacity: 0, x: -50}, visible: {opacity: 1, x: 0}}}>
                <AnchorLink 
                    className="bg-green text-deep-blue rounded-sm py-3 px-7 font-playfair
                     hover:bg-blue hover:text-white transition duration-500" 
                    onClick={() => setSelectedPage("contact")}
                    href="#contact"
                >
                    Contact Me
                </AnchorLink>
                <a href="https://www.up.edu/ir/institutional-data/undergraduate-demographics.html" 
                 target="_blank" className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5">
                    <div className="bg-brown hover:text-yellow transition duration-500 q-full h-full flex items-center justify-center font-playfair px-10">
                    IR Intern
                    </div>
                </a>
                <a href="https://www.figma.com/file/iEUNb4GQfc5PGY4q0kY7Oh/Vincent-Truong's-Portfolio-Design?type=design&node-id=22%3A223&mode=design&t=V4Wi8SR7RNaH8wBw-1" 
                 target="_blank" className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5">
                    <div className="bg-blue hover:bg-green text-black transition duration-500 q-full h-full flex items-center justify-center font-playfair px-10">
                    Figma Design
                    </div>
                </a>
            </motion.div>

            {/* MEDIA */}
            <motion.div className="flex mt-10 justify-center md:justify-start" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ delay: 0.4, duration: 0.5 }} variants={{hidden: {opacity: 0, x: -50}, visible: {opacity: 1, x: 0}}}>
                <div className="flex gap-8 font-playfair">
                    <a target="_blank" className="hover:text-blue text-xl" href="https://www.linkedin.com/in/vincent-truong-885b7a234/">LinkedIn</a>
                    <a target="_blank" className="hover:text-red text-xl" href="https://github.com/VincentTruong91">Github</a>
                    <a target="_blank" className="hover:text-green text-xl" href="https://vtruonguxui.webflow.io/">UX/UI Case Study Site</a>

                </div>
            </motion.div>
        </div>
    </section>
  );
};

export default Landing;