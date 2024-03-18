import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const Experience = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="experience" className="pt-1 pb-10">
      {/* HEADER SECTION */}
      <div className="flex justify-center items-center mt-32">
        <motion.div
          className="w-4/3 text-center" // Center-align text content
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-6xl mb-5">
            MY <span className="text-yellow">EXPERIENCE</span>
          </p>
          <LineGradient width="w-4/3" />
          <p className="mt-10 mb-7 font-playfair text-2xl">
            My experiences include working and volunteering outside of college and volunteer work inside of college.
          </p>
        </motion.div>
      </div>

      {/* Your experience entries here */}
      <div className="w-8/9 mx-auto mt-10 text-center">
        {experienceData.map((entry, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4 + index * 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="relative">
              <div className="z-10">
                <p className="font-playfair font-semibold text-5xl">{entry.date}</p>
                <p className="font-playfair font-semibold text-3xl mt-3">
                  {entry.position}
                </p>
              </div>
            </div>
            <p className="mb-10">
              {entry.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
const experienceData = [
  {
    date: "Nov. 2023 - Mar. 2024",
    position: "Web Development Intern",
    description: "Assists staff and other interns with digital and sketched wireframes and figma designs. Create task flows and high-fidelity mockups with figma on the blog page, newletter popup page, and products page. I also got to assist other web development interns and journalism interns on providing them assistance to create meaningful pages that connects users with EEL company culture, raising 700+ users within a month from launch.",
  },
  {
    date: "Sept. 2023 - Dec. 2023",
    position: "Institutional Research Intern",
    description: "Assists staff with data tasks (e.g. entry, cleaning, collection, coding, analysis, web design, visualization, presentation) on the computer using Excel, and/or other software. Other software Includes PowerBI, Python, R, Tableau, etc. Assist in producing, editing, and proofreading professional research documents (e.g. research reports, literature searches) on the computer using Word. As appropriate given skill set, assists staff in research design and data collection. Perform general office tasks including organizing incoming data requests, emailing correspondence, updating the IR website and other digital platforms.",
  },
  {
    date: "Aug. 2023 - Nov. 2023",
    position: "Engineering TA",
    description: "Currently working as a teacher assistant in EGR110 to help students work on labs and support their preparations for upcoming experimental projects. Labs consist of using a multimeter to measure voltages of batteries and generators and ohms of resistors, finding current within a created circuit, understanding how to use Arduino IDE, how to use Autodesk Inventor, experimentation of different truss structures/patterns, etc. In the end, I will also support students along their journey toward making their draft and finalized windmill with light indicators (depending on how much energy is being received) as their project for this class.",
  },
  {
    date: "Jan. 2023 - May. 23",
    position: "Student Web Developer",
    description: "Created home landing page functionality with a login/logout feature to access personalized data. The site includes grid-based information on the specific plants grown within hydroponic farms.",
  },
  {
    date: "Aug. 2021 - Dec. 22",
    position: "TA Data Entry Grader",
    description: "Learned data entry using Microsoft Excel to report, store, and calculate scores to 22-30 students per week. Communicated with teacher(s) on different grading curriculums and adapting to their environment.",
  },
  {
    date: "May 2022 - Aug. 22",
    position: "Popeyes Team Member",
    description: "Learned important communication and teamwork skills within a fast paced environment. Fundamentally became more resiliant to daunting tasks and critical feedback. I also learned soft-skills that includes working on communication, efficiency, organization, and commitment.",
  },
];

export default Experience;