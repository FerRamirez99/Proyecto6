"use client"
import { useState, useRef } from "react"
import ProjectCard from "./ProjectCard"
import ProjectTag from "./ProjectTag"
import { motion, useInView } from "framer-motion"

const projects = [
    {
        id: 1,
        title: "Landing Page",
        description: "Landing page for a jewelry store, showing the products, categories, services provided and location.",
        image: "/images/project1.png",
        tag: ["All", "HTML", "Responsive"],
        gitURL: "https://github.com/FerRamirez99/Proyecto1",
        pageURL: "https://ferramirez99.github.io/Proyecto1/",
        tech: ["HTML ", "CSS "]
    },
    {
        id: 2,
        title: "CRUD Application",
        description: "Application to keep book records digitally using the 4 CRUD operations, through a form and table.",
        image: "/images/project2.png",
        tag: ["All", "HTML", "JavaScript", "Responsive"],
        gitURL: "https://github.com/FerRamirez99/Proyecto2",
        pageURL: "https://ferramirez99.github.io/Proyecto2/",
        tech: ["HTML ", "CSS ", "JavaScript "]
    },
    {
        id: 3,
        title: "Dashboard",
        description: "Web page with a dashboard showind data collected from a weather API displayed through graphs.",
        image: "/images/project3.png",
        tag: ["All", "HTML", "JavaScript"],
        gitURL: "https://github.com/FerRamirez99/Proyecto3",
        pageURL: "https://ferramirez99.github.io/Proyecto3/",
        tech: ["HTML ", "CSS ", "JavaScript "]
    },
    {
        id: 4,
        title: "Restaurant Application",
        description: "Web application for a restaurant that includes a home page, information page, menu and reservation section.",
        image: "/images/project4.png",
        tag: ["All", "React", "Firebase", "Responsive"],
        gitURL: "https://github.com/FerRamirez99/Proyecto4",
        pageURL: "https://super-pika-a4c814.netlify.app/",
        tech: ["React ", "Firebase "]
    },
    {
        id: 5,
        title: "E-Commerce",
        description: "E-commerce application for surf products with login, cart and payment gateway; and the backend that connects with the frontend.",
        image: "/images/project5.png",
        tag: ["All", "React", "MongoDB", "Responsive"],
        gitURL: "https://github.com/FerRamirez99/Proyecto5-Ecommerce-Front",
        pageURL: "https://fabulous-genie-b3ac69.netlify.app/",
        tech: ["React ", "MongoDB ", "Express "]
    }
]

const ProjectSection = () => {
    const [tag, setTag] = useState("All")
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
        <section id="projects" className="md:mx-4">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-3">My Projects</h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag
                    onClick={handleTag}
                    name="All"
                    isSelected={tag === "All"}
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
                            transition={{duration: 0.3, delay: index * 0.4}}
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