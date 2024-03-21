"use client"
import { Card, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const skills = [
    { name: "JavaScript", icon: "js.svg" },
    { name: "React", icon: "react.svg" },
    { name: "NextJS", icon: "nextjs.svg" },
    { name: "Express", icon: "express.svg" },
    { name: "Node.js", icon: "node-js.svg" },
    { name: "MongoDB", icon: "mongodb.svg" },
    { name: "Firebase", icon: "firebase.svg" },
    { name: "Bootstrap", icon: "bootstrap.svg" },
    { name: "TailwindCSS", icon: "tailwind.svg" },
    { name: "Git", icon: "git.svg" },
    { name: "HTML", icon: "html5.svg" },
    { name: "CSS", icon: "css3.svg" },
    { name: "Figma", icon: "figma.svg" }
]

const SkillSection = () => {
    const { t } = useTranslation();

    return (
        <section className="py-8 px-2 xl:gap-16 sm:py-16 xl:px-16 ">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">{t('skills_title')}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-8 md:gap-12 ">
                {skills.map((skill, index) => (
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        key={index}
                    >
                        <Card
                            isFooterBlurred
                            radius="lg"
                            className="bg-[#181818] group transition-all duration-300 items-center justify-center"
                        >
                            <Image
                                alt={skill.name}
                                className="object-cover p-4"
                                height={200}
                                width={200}
                                src={`/icons/${skill.icon}`}
                            />
                            <CardFooter className="overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-6 justify-center hidden group-hover:flex">
                                <p className="text-xs text-white">{skill.name}</p>
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default SkillSection