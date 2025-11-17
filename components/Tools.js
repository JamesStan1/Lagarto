export default function Tools(){
  const tools = [
    {name:'VS Code', level:40},
    {name:'GitHub', level:35},
    {name:'Trello', level:70},
    {name:'Figma/Canva', level:80}
  ]
  return (
    <section className="section container">
      <div className="card">
        <h3>Tools</h3>
        <ul>
          {tools.map(t => (
            <li key={t.name}>{t.name} — {t.level}%</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
