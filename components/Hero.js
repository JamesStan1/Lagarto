export default function Hero(){
  return (
    <section className="hero container">
      <h2 style={{marginTop:0}}>Hi, I'm Charizze C. Lagarto</h2>
      <div style={{display:'flex',gap:20,alignItems:'center',flexWrap:'wrap'}}>
        <div style={{flex:'1 1 220px'}}>
          <p>I’m a passionate and goal-driven aspiring Project Manager who turns ideas into structured plans and challenges into opportunities.</p>
          <p>My focus: Project Planning, Team Collaboration, System Development, Usability Testing, and Software Testing.</p>
          <div style={{marginTop:12}}>
            <a href="mailto:ezzirahclagarto@email.com" className="btn">Get in touch</a>
            <a href="/projects" className="btn" style={{marginLeft:8,background:'white',color:'var(--accent-strong)',border:'1px solid rgba(79,70,229,0.06)'}}>View Projects</a>
          </div>
        </div>
        <div style={{width:'auto', height:'auto', flex:'0 0 auto'}}>
          <img src="/images/profpic.png" alt="Charizze profile" className="profile-pic" loading="lazy" />
        </div>
      </div>
    </section>
  )
}
