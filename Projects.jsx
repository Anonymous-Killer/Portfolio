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
      demo: 'https://multilingual-misinformation-detection.onrender.com/',
      github: 'https://github.com/Anonymous-Killer/Multilingual-MIsinformation-Detection',
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
      demo: 'https://teamnotnull-innovationhacks.onrender.com/',
      github: 'https://github.com/Mitul9703/TeamNotNull_InnovationHacks',
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
      github: 'https://github.com/vikasgowda3007/sunhacks',
    },
    {
      id: 'P-04',
      name: 'Debate AI',
      tone: 'purple',
      subtitle: 'Voice-First AI Debate Judge',
      blurb: 'Full-stack debate platform with deterministic state orchestration. Participants record live arguments via a dynamic voice button; Gemini transcribes each point, NVIDIA NIM scores in real-time, and a final verdict is generated after claim extraction and evidence review.',
      mockTitle: 'DEBATE_AI',
      mockSub: 'verdict: loading…',
      stack: ['FastAPI', 'Next.js', 'Gemini', 'NVIDIA NIM', 'PostgreSQL'],
      demo: 'https://debate-orchestrator.onrender.com',
      github: 'https://github.com/Anonymous-Killer/Debate-Orchestrator',
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
          subtitle="Spin the wheel. Four shipped projects — each with a live demo."
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

                        <div className="project-card__cta">
                          {p.demo && (
                            <PixelButton size="sm" tone={p.tone} href={p.demo} target="_blank" rel="noopener noreferrer">
                              Load Game ↗
                            </PixelButton>
                          )}
                          {p.github && (
                            <PixelButton size="sm" tone="ghost" href={p.github} target="_blank" rel="noopener noreferrer">
                              GitHub ↗
                            </PixelButton>
                          )}
                        </div>
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
