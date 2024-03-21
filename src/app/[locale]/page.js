import TranslationsProvider from "../../components/TranslationsProvider"
import initTranslations from '../i18n'

import NavBar from "../../components/NavBar"
import HeroSection from "../../components/HeroSection"
import AboutSection from "../../components/AboutSection"
import SkillSection from "../../components/SkillSection"
import ProjectSection from "../../components/ProjectSection"
import EmailSection from "../../components/EmailSection"
import Footer from "../../components/Footer"

const i18nNamespaces = ['portfolio'];

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces)

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main className="flex min-h-screen flex-col bg-[#1f202f] md:px-14">
        <NavBar />
        <div className="container mt-24 mx-auto px-12 py-4">
          <HeroSection />
          <AboutSection />
          <SkillSection />
          <ProjectSection />
          <EmailSection />
        </div>
        <Footer />
      </main>
    </TranslationsProvider>
  )
}