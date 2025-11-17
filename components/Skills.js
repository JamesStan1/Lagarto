export default function Skills(){
  const skillCategories = [
    {title: 'High Level', skills: ['Project Planning','System Analysis','Technical Documentation','Team Collaboration','Research & Presentation']},
    {title: 'Technical', skills: ['Figma','Canva','Trello']},
    {title: 'Project Management Tools', skills: ['Trello - 78%']},
    {title: 'IT Skills', skills: ['System Analysis & Design - 80%','Project Planning - 90%','Technical Documentation - 89%']},
    {title: 'Soft Skills', skills: ['Communication - 91%','Leadership - 90%','Adaptability - 88%','Creativity - 80%','Problem Solving - 90%','Teamwork - 90%']}
  ]

  const renderSkill = (s) => {
    const match = s.match(/-\s*(\d+)%$/)
    if(match){
      const val = Number(match[1])
      const label = s.replace(/-\s*\d+%$/, '').trim()
      return (
        <div key={s} style={{width:'100%'}}>
          <div style={{display:'flex',justifyContent:'space-between'}}>
            <span>{label}</span>
            <span style={{color:'var(--muted)'}}>{val}%</span>
          </div>
          <div style={{height:8,background:'#eef2ff',borderRadius:6,overflow:'hidden',marginTop:6}}>
            <div style={{height:'100%',width: `${val}%`,background:'linear-gradient(90deg, #4f46e5, #7c3aed)'}}></div>
          </div>
        </div>
      )
    }
    return <span className="skill" key={s}>{s}</span>
  }

  return (
    <section className="section container">
      <div className="card">
        <h3>Skills</h3>
        {skillCategories.map((cat)=> (
          <div key={cat.title} style={{marginBottom:12}}>
            <strong>{cat.title}</strong>
            <div className="skills-grid" style={{marginTop:8}}>
              {cat.skills.map(s => (
                <div key={s} style={{minWidth:160,maxWidth:260}}>
                  {renderSkill(s)}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
