function Projects() {
  const projects = [
    {
      id: 'P-01',
      name: 'FactAI',
      tone: 'cyan',
      subtitle: 'Multilingual Misinformation Detection',
      blurb: 'AI backend that scores news headlines 1–10 for reliability. Full pipeline: language detection → claim normalization → evidence retrieval → deterministic scoring for explainability.',
      mockTitle: 'FACT-AI',
      mockSub: 'reliability: 8.4 / 10',
      stack: ['Python', 'FastAPI', 'ChromaDB', 'NVIDIA NIM', 'Tavily'],
    },
    {
      id: 'P-02',
      name: 'Pitch Mirror',
      tone: 'magenta',
      subtitle: 'AI-Driven Interview Simulation',
      blurb: 'Role-specific AI agents (recruiter, investor, coding interviewer) that simulate interview and pitch scenarios with thread-based progression and post-session evaluation.',
      mockTitle: 'PITCH_MIRROR',
      mockSub: 'session: 03 · evaluating…',
      stack: ['LLMs', 'Multimodal', 'Python', 'Session State'],
    },
    {
      id: 'P-03',
      name: 'GamePro',
      tone: 'green',
      subtitle: 'Automated Sports Match Scheduler',
      blurb: "Agentic AI modules for autonomous task execution and decision-making. Built for a college setting, planning matches so students don't have to.",
      mockTitle: 'GAME_PRO',
      mockSub: 'matches scheduled: 47',
      stack: ['LangChain', 'Gemini API', 'Python', 'Agents'],
    },
    {
      id: 'P-??',
      name: 'Coming Soon',
      tone: 'yellow',
      subtitle: 'Loading next quest…',
      blurb: 'New project incoming. Drop in another entry above to extend the wheel — the carousel adapts to any number of cards.',
      mockTitle: '???',
      mockSub: 'awaiting input▌',
      stack: ['TBD'],
      placeholder: true,
    },
  ];

  const [index, setIndex] = React.useState(0);
  const total = projects.length;
  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  React.useEffect(() => {
    const onKey = (e) => {
      const el = document.getElementById('projects');
      if (!el) return;
      const r = el.getBoundingClientRect();
      if (r.top > window.innerHeight * 0.6 || r.bottom < window.innerHeight * 0.3) return;
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [total]);

  const offsetFor = (i) => {
    let d = i - index;
    if (d > total / 2) d -= total;
    if (d < -total / 2) d += total;
    return d;
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeader
          eyebrow="LEVEL 03 · QUEST BOARD"
          eyebrowTone="cyan"
          title="Projects"
          subtitle="Spin the wheel. Three shipped projects (so far) — more entries loading."
        />

        <div className="wheel">
          <button className="wheel__nav wheel__nav--prev" onClick={prev} aria-label="Previous project">
            <span className="wheel__arrow">◀</span>
          </button>

          <div className="wheel__stage">
            <div className="wheel__track">
              {projects.map((p, i) => {
                const o = offsetFor(i);
                const isActive = o === 0;
                const isAdjacent = Math.abs(o) === 1;
                const visible = Math.abs(o) <= 1;
                return (
                  <div
                    key={p.id + i}
                    className={`wheel__slot ${isActive ? 'is-active' : ''} ${isAdjacent ? 'is-adjacent' : ''}`}
                    aria-hidden={!isActive}
                    style={{
                      transform: `translateX(${o * 62}%) rotateY(${-o * 22}deg) scale(${isActive ? 1 : 0.78})`,
                      opacity: visible ? (isActive ? 1 : 0.32) : 0,
                      zIndex: isActive ? 3 : isAdjacent ? 2 : 1,
                      pointerEvents: isActive ? 'auto' : 'none',
                    }}
                    onClick={() => !isActive && setIndex(i)}
                  >
                    <PixelFrame tone={p.tone}>
                      <div className="project-card">
                        <div className="project-card__screen">
                          <div className="project-card__screen-mock">
                            {p.mockTitle}
                            <div style={{ fontSize: 14, color: 'var(--fg-2)', textShadow: 'none', marginTop: 8, fontFamily: 'var(--font-mono)' }}>
                              {p.mockSub}{p.placeholder ? '' : <BlinkCursor />}
                            </div>
                          </div>
                        </div>

                        <div className="project-card__header">
                          <h3 className="project-card__title">{p.name}</h3>
                          <span className="project-card__id">{p.id}</span>
                        </div>

                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: `var(--neon-${p.tone})`, letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', marginTop: -8 }}>
                          {p.subtitle}
                        </div>

                        <p className="project-card__blurb">{p.blurb}</p>

                        <div className="project-card__chips">
                          {p.stack.map((s) => <TagPill key={s} tone="mute">{s}</TagPill>)}
                        </div>

                        {!p.placeholder && (
                          <div className="project-card__cta">
                            <PixelButton size="sm" tone={p.tone} href="#">Case Study →</PixelButton>
                            <PixelButton size="sm" tone="ghost" href="#">Github</PixelButton>
                          </div>
                        )}
                      </div>
                    </PixelFrame>
                  </div>
                );
              })}
            </div>
          </div>

          <button className="wheel__nav wheel__nav--next" onClick={next} aria-label="Next project">
            <span className="wheel__arrow">▶</span>
          </button>
        </div>

        <div className="wheel__hud">
          <div className="wheel__counter">
            <span className="wheel__counter-current">{String(index + 1).padStart(2, '0')}</span>
            <span className="wheel__counter-sep">/</span>
            <span className="wheel__counter-total">{String(total).padStart(2, '0')}</span>
          </div>
          <div className="wheel__dots" role="tablist">
            {projects.map((p, i) => (
              <button
                key={i}
                className={`wheel__dot ${i === index ? 'is-on' : ''}`}
                onClick={() => setIndex(i)}
                aria-label={`Go to ${p.name}`}
                aria-current={i === index}
              />
            ))}
          </div>
          <div className="wheel__hint">◀ ▶ &nbsp;TO SCROLL</div>
        </div>
      </div>
    </section>
  );
}
window.Projects = Projects;
