import Header from '../components/Header'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import AboutSection from '../components/AboutSection'
import ProjectsList from '../components/ProjectsList'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import Achievements from '../components/Achievements'
import Tools from '../components/Tools'
import { projects } from '../data/projects'

export default function Home(){
  const recent = projects.slice(0,3)
  return (
    <div>
      <Header />
      <main role="main">
        <Hero />
        <Skills />
        <ProjectsList projects={recent} />
        <AboutSection />
        <Achievements />
        <Tools />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
