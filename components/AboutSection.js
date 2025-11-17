export default function AboutSection(){
  return (
    <section className="section container card" aria-label="About Me">
      <div className="about-grid" style={{display:'grid',gridTemplateColumns:'1fr 2fr',gap:18,alignItems:'center'}}>
        <div style={{textAlign:'center'}}>
          <img src="/images/profile.svg" alt="Charizze profile" style={{width:140,height:140,borderRadius:16,objectFit:'cover'}}/>
        </div>
        <div>
          <h3>About Me</h3>
          <p>Hi, I am Charizze C. Lagarto. I enjoy turning ideas into structured plans and challenges into opportunities. I combine creativity with strategy to deliver meaningful results, and I believe successful projects are built on communication, adaptability, and teamwork.</p>
      <h4 style={{marginTop:8}}>Education</h4>
      <ul>
        <li>Bachelor of Science in Information Technology — St. Rita’s College of Balingasag (Expected Graduation: 2026)</li>
        <li>Senior High School – STEM Strand — St. Rita’s College of Balingasag</li>
        <li>Junior High School — St. Rita’s College of Balingasag</li>
        <li>Elementary — Holy Child Montessori of Balingasag</li>
      </ul>
      <h4>Quick Facts</h4>
      <ul>
        <li>Primary Role: Project Manager</li>
        <li>Location: Philippines</li>
        <li>Availability: Open for internship or entry-level opportunities</li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/charizze-chu-lagarto-b0308b271/" target="_blank">Charizze on LinkedIn</a></li>
        <li>Gmail: <a href="mailto:ezzirahclagarto@email.com">ezzirahclagarto@email.com</a></li>
      </ul>
        </div>
      </div>
    </section>
  )
}
