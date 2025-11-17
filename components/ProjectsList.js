export default function ProjectsList({projects}){
  return (
    <section className="section container">
      <h3>Projects</h3>
      <div className="projects-grid">
        {projects.map((p)=> (
          <div key={p.title} className="project-card">
            {p.image && <img src={p.image} alt={`${p.title} cover`} title={p.title} />}
            {p.liveUrl && (
              <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open ${p.title} live site`} style={{position:'absolute',right:12,top:12,textDecoration:'none'}}>
                <span style={{background:'#16a34a',color:'#fff',padding:'4px 8px',borderRadius:8,fontSize:12,fontWeight:700}}>Live</span>
              </a>
            )}
            <h4>{p.title} <small style={{color:'var(--muted)'}}>({p.year})</small></h4>
            <p>{p.description}</p>
            <p><strong>Role:</strong> {p.role}</p>
            {p.tech && <p><strong>Tech:</strong> {p.tech}</p>}
            <div style={{marginTop:10,display:'flex',gap:10}}>
              <a
                className="btn"
                href={p.liveUrl || '#'}
                aria-label={`View ${p.title}`}
                target={p.liveUrl? '_blank' : '_self'}
                rel={p.liveUrl ? 'noopener noreferrer' : undefined}
              >View</a>
              {p.source && (
                <a className="btn" style={{background:'#fff',color:'var(--accent-strong)',border:'1px solid rgba(79,70,229,0.12)'}} href={p.source} target="_blank" rel="noopener noreferrer" aria-label={`Source ${p.title}`}>Source</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
