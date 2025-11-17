export default function ProjectsList({projects}){
  return (
    <section className="section container">
      <h3>Projects</h3>
      <div className="projects-grid">
        {projects.map((p)=> (
          <div key={p.title} className="project-card">
            {p.image && <img src={p.image} alt={`${p.title} cover`} />}
            <h4>{p.title} <small style={{color:'var(--muted)'}}>({p.year})</small></h4>
            <p>{p.description}</p>
            <p><strong>Role:</strong> {p.role}</p>
            {p.tech && <p><strong>Tech:</strong> {p.tech}</p>}
            <div style={{marginTop:10,display:'flex',gap:10}}>
              <a className="btn" href="#" aria-label={`View ${p.title}`}>View</a>
              <a className="btn" style={{background:'#fff',color:'var(--accent-strong)',border:'1px solid rgba(79,70,229,0.12)'}} href="#" aria-label={`Source ${p.title}`}>Source</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
