function Hero() {
  const [prompt, setPrompt] = React.useState('');
  React.useEffect(() => {
    const text = '> INITIALIZING PLAYER PROFILE...';
    let i = 0;
    const id = setInterval(() => {
      i++;
      setPrompt(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, 36);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="bg-grid" aria-hidden="true">
        <span className="bg-sun" />
      </div>
      <div className="container hero__inner">
        <div className="hero__prompt">
          {prompt}<BlinkCursor />
        </div>

        <h1 className="hero__title">ISHAAN<br/>SAHAY</h1>

        <div className="hero__chips">
          <TagPill tone="cyan">M.S. Data Science · ASU</TagPill>
          <TagPill tone="magenta">NLP · LLM Fine-Tuning</TagPill>
          <TagPill tone="yellow">Certified Ethical Hacker</TagPill>
        </div>

        <p className="hero__subtitle">
          Building AI systems. Fine-tuning models. Breaking things ethically.
          Currently leveling up in data science at Arizona State.
          Seeking Fall 2026 and Summer 2027 internships.<BlinkCursor tone="cyan" />
        </p>

        <div className="hero__cta">
          <PixelButton tone="cyan" size="lg" href="#projects"
            onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
            <PixelIcon name="joystick" size={16} tone="cyan" style={{ verticalAlign: 'baseline', marginBottom: '-3px', marginRight: '8px' }} />
            View Projects
          </PixelButton>
          <PixelButton tone="yellow" size="lg" href="#projects"
            onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Press Start
          </PixelButton>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <div className="hero__stat-value">3+</div>
            <div className="hero__stat-label">YRS · ML / NLP</div>
          </div>
          <div className="hero__stat">
            <div className="hero__stat-value">6</div>
            <div className="hero__stat-label">CERTIFICATIONS</div>
          </div>
          <div className="hero__stat">
            <div className="hero__stat-value">3</div>
            <div className="hero__stat-label">SHIPPED PROJECTS</div>
          </div>
          <div className="hero__stat" style={{ color: 'var(--neon-yellow)' }}>
            <div className="hero__stat-value" style={{ color: 'var(--neon-yellow)', textShadow: 'var(--text-glow-magenta)' }}>3rd</div>
            <div className="hero__stat-label">INNOVATION HACKS</div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
