import Link from 'next/link'
import { useState } from 'react'

export default function Header(){
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)
  return (
    <header className="header container" role="banner">
      <div style={{display:'flex',gap:12,alignItems:'center'}}>
        <Link href="/" style={{textDecoration:'none'}} aria-label="Home">
          <h1 style={{margin:0,color:'var(--accent-strong)', fontSize:20}}>Charizze Lagarto</h1>
        </Link>
      </div>
      <nav className="nav" role="navigation" aria-label="Main navigation">
        <Link href="/" className="nav-link">Home</Link>
        <Link href="/about" className="nav-link">About</Link>
        <Link href="/projects" className="nav-link">Projects</Link>
        <Link href="/contact" className="nav-link">Contact</Link>
      </nav>
      {/* Mobile menu */}
      <button
        className="mobile-nav"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={toggle}
        style={{background:'transparent',border:'1px solid rgba(15,23,42,0.06)',padding:8,borderRadius:8}}
      >
        <span style={{display:'block',width:20,height:2,background:'var(--text)',marginBottom:4}}/>
        <span style={{display:'block',width:20,height:2,background:'var(--text)',marginBottom:4}}/>
        <span style={{display:'block',width:14,height:2,background:'var(--text)'}}/>
      </button>
      {open && (
        <div id="mobile-menu" style={{position:'absolute',top:68,right:24,background:'var(--card)',padding:12,borderRadius:8,boxShadow:'var(--shadow)'}}>
          <Link href="/" className="nav-link">Home</Link>
          <br />
          <Link href="/about" className="nav-link">About</Link>
          <br />
          <Link href="/projects" className="nav-link">Projects</Link>
          <br />
          <Link href="/contact" className="nav-link">Contact</Link>
        </div>
      )}
    </header>
  )
}
