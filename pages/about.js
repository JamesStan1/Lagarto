import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutSection from '../components/AboutSection'
import Skills from '../components/Skills'
import Achievements from '../components/Achievements'
import Tools from '../components/Tools'

export default function About(){
  return (
    <div>
      <Header />
      <main role="main">
        <div className="container">
          <h2 style={{marginTop:12}}>About</h2>
        </div>
        <AboutSection />
        <Skills />
        <Achievements />
        <Tools />
      </main>
      <Footer />
    </div>
  )
}
