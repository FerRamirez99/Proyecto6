"use client"
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import ParticlesBG from "./ParticlesBG";

const HeroSection = () => {
    return (
        <section id="home">
            <div className="absolute">
                <ParticlesBG />
            </div>
            <div className="py-8 lg:py-16">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="place-self-center text-center sm:text-left md:justify-self-start sm:p-12 lg:p-24 px-0"
                >
                    <h1 className="text-white text-2xl sm:text-3xl lg:text-5xl lg:leading-snug font-extrabold">
                        <span className="">Hello, I&apos;m</span>
                        <br />
                        <span className="text-primary text-4xl sm:text-5xl lg:text-7xl mb-4">
                            Fernanda Ramírez Sancristoful
                        </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                'Web Developer',
                                500,
                                'Web Developer, Designer',
                                500,
                                'Web Developer',
                                500,
                                '',
                                500,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                </motion.div>
            </div>
        </section>
    )
}

export default HeroSection