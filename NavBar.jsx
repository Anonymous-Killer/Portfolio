function NavBar({ active = 'hero', onNav }) {
  const links = [
    { id: 'about',      label: 'About' },
    { id: 'skills',     label: 'Skills' },
    { id: 'projects',   label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'certs',      label: 'Unlocks' },
    { id: 'contact',    label: 'Contact' },
  ];
  const handle = (id) => (e) => {
    e.preventDefault();
    if (onNav) onNav(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <nav className="nav">
      <div className="container nav__inner">
        <a className="nav__brand" href="#hero" onClick={handle('hero')}>
          <img src="assets/logo.svg" alt="IS" />
          <span>ISHAAN<span style={{ color: 'var(--neon-magenta)' }}>.</span>SAHAY</span>
        </a>
        <div className="nav__links">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={handle(l.id)}
              className={`nav__link ${active === l.id ? 'is-active' : ''}`}
            >
              {l.label}
            </a>
          ))}
        </div>
        <PixelButton size="sm" tone="magenta" href="#contact" onClick={handle('contact')}>
          {'>'} Insert_Coin
        </PixelButton>
      </div>
    </nav>
  );
}
window.NavBar = NavBar;
