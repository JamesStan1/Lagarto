export default function Footer(){
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Charizze C. Lagarto. Built with Next.js.</p>
        <div style={{marginTop:10}}>
          <a href="https://www.linkedin.com/in/charizze-chu-lagarto-b0308b271/" target="_blank" rel="noreferrer" aria-label="LinkedIn" style={{marginRight:8}}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z" fill="#0A66C2"/><path d="M8.339 8.62C8.34 9.523 7.59 10.27 6.686 10.27C5.784 10.27 5.036 9.523 5.036 8.62C5.036 7.717 5.784 6.97 6.686 6.97C7.59 6.97 8.34 7.717 8.339 8.62Z" fill="white"/><path d="M6.88 11.48H7.76V18.1H6.88V11.48ZM10.48 11.48H11.33V12.35C11.65 11.98 12.3 11.45 13.28 11.45C15.29 11.45 15.82 12.73 15.82 14.7V18.11H14.94V14.95C14.94 14.04 14.9 12.71 13.58 12.71C12.26 12.71 12.03 13.69 12.03 14.85V18.11H11.15V11.48H12.03V12.4C12.39 11.9 13.12 11.45 14.06 11.45C15.86 11.45 16.79 12.47 16.79 14.56V18.11H15.89V14.79C15.89 13.71 15.77 12.98 14.5 12.98C13.27 12.98 12.86 13.77 12.86 14.61V18.11H11.97V11.48H10.48Z" fill="white"/></svg>
          </a>
          <a href="mailto:ezzirahclagarto@email.com" aria-label="Email link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="4" fill="#374151"/><path d="M6 8.5L12 12L18 8.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 16.5L12 12L18 16.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
