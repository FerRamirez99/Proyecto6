import NavBar from "../components/NavBar"
import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection"
import SkillSection from "../components/SkillSection"
import ProjectSection from "../components/ProjectSection"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#1f202f] md:px-14">
      <NavBar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <SkillSection />
         <ProjectSection />
        {/*<EmailSection /> */}
      </div>     
      <Footer /> 
    </main>
  )
}