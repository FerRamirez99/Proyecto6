"use client"
import { useState, useRef } from "react"
import ProjectCard from "./ProjectCard"
import ProjectTag from "./ProjectTag"
import { motion, useInView } from "framer-motion"
import { useTranslation } from 'react-i18next'

const ProjectSection = () => {
    const { t } = useTranslation()
    const all_tag = `${t('project_tag_1')}`

    const projects = [
        {
            id: 1,
            title: `${t('pr1_title')}`,
            description: `${t('pr1_desc')}`,
            image: "/images/project1.png",
            tag: [all_tag, "HTML", "Responsive"],
            gitURL: "https://github.com/FerRamirez99/Proyecto1",
            pageURL: "https://ferramirez99.github.io/Proyecto1/",
            tech: ["HTML ", "CSS "]
        },
        {
            id: 2,
            title: `${t('pr2_title')}`,
            description: `${t('pr2_desc')}`,
            image: "/images/project2.png",
            tag: [all_tag, "HTML", "JavaScript", "Responsive"],
            gitURL: "https://github.com/FerRamirez99/Proyecto2",
            pageURL: "https://ferramirez99.github.io/Proyecto2/",
            tech: ["HTML ", "CSS ", "JavaScript "]
        },
        {
            id: 3,
            title: `${t('pr3_title')}`,
            description: `${t('pr3_desc')}`,
            image: "/images/project3.png",
            tag: [all_tag, "HTML", "JavaScript"],
            gitURL: "https://github.com/FerRamirez99/Proyecto3",
            pageURL: "https://ferramirez99.github.io/Proyecto3/",
            tech: ["HTML ", "CSS ", "JavaScript "]
        },
        {
            id: 4,
            title: `${t('pr4_title')}`,
            description: `${t('pr4_desc')}`,
            image: "/images/project4.png",
            tag: [all_tag, "React", "Firebase", "Responsive"],
            gitURL: "https://github.com/FerRamirez99/Proyecto4",
            pageURL: "https://super-pika-a4c814.netlify.app/",
            tech: ["React ", "Firebase "]
        },
        {
            id: 5,
            title: `${t('pr5_title')}`,
            description: `${t('pr5_desc')}`,
            image: "/images/project5.png",
            tag: [all_tag, "React", "MongoDB", "Responsive"],
            gitURL: "https://github.com/FerRamirez99/Proyecto5-Ecommerce-Front",
            pageURL: "https://fabulous-genie-b3ac69.netlify.app/",
            tech: ["React ", "MongoDB ", "Express "]
        }
    ]

    const [tag, setTag] = useState(all_tag)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const handleTag = (newTag) => {
        setTag(newTag)
    }
    const filteredProjects = projects.filter((project) =>
        project.tag.includes(tag)
    )

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 }
    }

    return (
        <section id="projects" className="md:mx-4 md:px-12">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-3">My Projects</h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag
                    onClick={handleTag}
                    name={all_tag}
                    isSelected={tag === all_tag}
                />
                <ProjectTag
                    onClick={handleTag}
                    name="HTML"
                    isSelected={tag === "HTML"}
                />
                <ProjectTag
                    onClick={handleTag}
                    name="React"
                    isSelected={tag === "React"}
                />
            </div>
            <ul ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {
                    filteredProjects.map((project, index) =>
                        <motion.li
                            key={index}
                            variants={cardVariants}
                            initial="initial"
                            animate={isInView ? "animate" : "initial"}
                            transition={{ duration: 0.3, delay: index * 0.4 }}
                        >
                            <ProjectCard
                                key={project.id}
                                title={project.title}
                                description={project.description}
                                imgURL={project.image}
                                gitURL={project.gitURL}
                                pageURL={project.pageURL}
                                tech={project.tech}
                            />
                        </motion.li>
                    )
                }
            </ul>
        </section>
    )
}

export default ProjectSection