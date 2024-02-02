"use client"
import Image from "next/image"
import { useState, useTransition } from "react"
import TabButton from "./TabButton"

import { motion } from "framer-motion"
import { fadeIn } from "./utils/motionTransition"
import Link from "next/link"

const TAB_DATA = [
  {
    title: "Education", id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Full Stack Web Developer</li>
        <li>Digital Interaction Design</li>
      </ul>
    )
  },
  {
    title: "Certifications", id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Universidad del Desarrollo</li>
      </ul>
    )
  },
]

const AboutSection = () => {
  const [tab, setTab] = useState("education")
  const [isPending, startTransition] = useTransition()

  const handleChange = (id) => {
    startTransition(() => {
      setTab(id)
    })
  }

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-0 xl:gap-16 sm:py-16 xl:px-16">
        <motion.div
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="p-4 border-2 m-auto rounded-md"
        >
          <Image src="/images/profile.png" alt="Imagen" width={300} height={300} style={{ borderRadius: "6px" }} />
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mt-4 md:mt-0 text-left flex flex-col h-full"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Hello! I am a full-stack web developer with a keen eye for detail and am passionate about creating seamless, user-friendly, responsive web applications. With a strong foundation in front-end and back-end technologies, I have experience with JavaScript, React, Node.js, Express, MongoDB, HTML, and CSS, among others. I am a quick learner, and I am looking forward to expanding my knowledge and skill set.
          </p>
          <div className="mt-2">
            <Link href={"/docs/CV.pdf"} target={"_blank"} download={true}>
              <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#00FF5B] to-[#0014FF] hover:bg-slate-800 text-white mt-3">
                <span className="block bg-[#181818] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
              </button>
            </Link>
          </div>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection