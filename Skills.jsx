function Skills() {
  const clusters = [
    {
      title: 'AI / Machine Learning',
      icon: 'powerup',
      tone: 'cyan',
      bars: [
        { label: 'LLM Fine-Tuning', value: 88 },
        { label: 'Deep Learning',   value: 85 },
        { label: 'TensorFlow',      value: 80 },
        { label: 'CNN · RNN · DBN · MLP', value: 78 },
      ],
    },
    {
      title: 'Programming',
      icon: 'controller',
      tone: 'magenta',
      bars: [
        { label: 'Python',  value: 92 },
        { label: 'MySQL',   value: 87 },
        { label: 'R',       value: 75 },
        { label: 'C++ · C', value: 68 },
      ],
    },
    {
      title: 'Data Analysis',
      icon: 'coin',
      tone: 'yellow',
      bars: [
        { label: 'Power BI', value: 82 },
        { label: 'JMP',      value: 76 },
        { label: 'MATLAB',   value: 72 },
        { label: 'Pandas',   value: 86 },
      ],
    },
    {
      title: 'Side Skills',
      icon: 'star',
      tone: 'green',
      bars: [
        { label: 'Ethical Hacking (CEH)', value: 80 },
        { label: 'FastAPI / Backend',     value: 78 },
        { label: 'LangChain / Agents',    value: 72 },
        { label: 'Robotics',              value: 70 },
      ],
    },
  ];

  return (
    <section id="skills" className="section" style={{ background: 'var(--bg-0)' }}>
      <div className="container">
        <SectionHeader
          eyebrow="LEVEL 02 · STATS SHEET"
          eyebrowTone="magenta"
          title="Skills &amp; Abilities"
          subtitle="Numbers are self-rated and meant as relative weights. The actual proof lives in projects."
        />
        <div className="skills-grid">
          {clusters.map((c) => (
            <PixelFrame key={c.title} tone={c.tone}>
              <div className="skill-cluster__title">
                <PixelIcon name={c.icon} size={18} tone={c.tone} />
                <span>{c.title}</span>
              </div>
              <div className="skill-cluster__bars">
                {c.bars.map((b) => (
                  <StatBar key={b.label} label={b.label} value={b.value} tone={c.tone} />
                ))}
              </div>
            </PixelFrame>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Skills = Skills;
