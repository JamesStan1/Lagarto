export default function ContactSection(){
  return (
    <section className="section container card">
      <h3>Contact</h3>
      <p>If you're interested in collaborating, hiring, or want to learn more, reach out:</p>
      <ul>
        <li>Email: <a href="mailto:ezzirahclagarto@email.com">ezzirahclagarto@email.com</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/charizze-chu-lagarto-b0308b271/" target="_blank">Charizze on LinkedIn</a></li>
        <li>Availability: Open for internship or entry-level opportunities</li>
      </ul>

      <form action={`mailto:ezzirahclagarto@email.com`} method="get" onSubmit={(e)=>{}}>
        <label style={{display:'block',marginTop:12}}>Subject</label>
        <input name="subject" type="text" aria-label="Subject" placeholder="Subject" style={{width:'100%',padding:8,borderRadius:6}} />
        <label style={{display:'block',marginTop:12}}>Message</label>
        <textarea name="body" rows={4} aria-label="Message" style={{width:'100%',padding:8,borderRadius:6}} placeholder={"Hi Charizze, I'm interested in"} />
        <div style={{marginTop:8}}>
          <button type="submit" className="btn">Send Email</button>
        </div>
      </form>

    </section>
  )
}
