import Header from '../components/Header'
import Footer from '../components/Footer'
import ProjectsList from '../components/ProjectsList'
import { projects } from '../data/projects'

export default function Projects(){
  return (
    <div>
      <Header />
      <main role="main">
        <div className="container">
          <h2 style={{marginTop:12}}>Projects</h2>
        </div>
        <ProjectsList projects={projects} />
      </main>
      <Footer />
    </div>
  )
}
