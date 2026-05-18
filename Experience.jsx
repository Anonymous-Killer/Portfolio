function Experience() {
  const log = [
    {
      date: 'SPRING 2026',
      title: 'Innovation Hacks — 3rd Place',
      company: 'ASU × MLH',
      status: 'COMPLETED',
      bullets: [
        'Awarded 3rd place for Pitch Mirror — an AI-driven interview & pitch simulation platform.',
        'Built role-specific AI agents (recruiter, investor, coding interviewer) with thread-based session progression and post-session evaluation.',
        'Demoed the end-to-end product live: document upload, adaptive questioning, and evaluation-aware feedback.',
      ],
    },
    {
      date: 'AUG 2025 —',
      title: 'M.S. Data Science & Analytics',
      company: 'Arizona State University',
      status: 'IN PROGRESS',
      bullets: [
        'Graduate coursework spanning Data Science and Robotics — focusing on Transformer-based architectures.',
        'Hands-on with LLM fine-tuning, evaluation metrics, and applied NLP research.',
        'Expected graduation: May 2027.',
      ],
    },
    {
      date: 'JAN — JUN 2024',
      title: 'Data Science Intern',
      company: 'DRDO',
      status: 'COMPLETED',
      bullets: [
        'Fine-tuned Large Language Models for NLP tasks — sentiment analysis and named entity recognition.',
        'Conducted comparative study on BERT-based models for sentiment classification.',
        'Explored generative AI tools and evaluation metrics in a professional research setting.',
      ],
    },
    {
      date: '2020 — 2024',
      title: 'B.Tech, Computer Science (AI & Robotics)',
      company: 'Vellore Institute of Technology',
      status: 'COMPLETED',
      bullets: [
        'Relevant coursework: Machine Learning, Deep Learning, Natural Language Processing.',
        'Sunhacks Hackathon participant.',
      ],
    },
  ];

  return (
    <section id="experience" className="section" style={{ background: 'var(--bg-0)' }}>
      <div className="container">
        <SectionHeader
          eyebrow="LEVEL 04 · QUEST LOG"
          eyebrowTone="green"
          title="Experience &amp; Education"
          subtitle="A chronological save file. Each entry is a quest — completed or in progress."
        />
        <div className="quest-log">
          {log.map((q, i) => (
            <PixelFrame key={i} tone={q.status === 'IN PROGRESS' ? 'yellow' : 'cyan'}>
              <div className="quest-entry">
                <div className="quest-entry__date">{q.date}</div>
                <div className="quest-entry__body">
                  <div className="quest-entry__header">
                    <h3 className="quest-entry__title">
                      {q.title} <span className="quest-entry__company">· {q.company}</span>
                    </h3>
                    <span className={`quest-entry__status ${q.status === 'IN PROGRESS' ? 'quest-entry__status--inprogress' : ''}`}>
                      {q.status}
                    </span>
                  </div>
                  <ul className="quest-entry__bullets">
                    {q.bullets.map((b, j) => <li key={j}><span>{b}</span></li>)}
                  </ul>
                </div>
              </div>
            </PixelFrame>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Experience = Experience;
