import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactSection from '../components/ContactSection'

export default function Contact(){
  return (
    <div>
      <Header />
      <main role="main">
        <div className="container">
          <h2 style={{marginTop:12}}>Contact</h2>
        </div>
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
