function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeader
          eyebrow="LEVEL 01 · CHARACTER BIO"
          eyebrowTone="cyan"
          title="About the Player"
          subtitle="Data Science grad student with a robotics + cybersecurity past life. I like AI systems that explain themselves."
        />
        <div className="about">
          <div className="about__prose body-prose">
            <p>
              I'm Ishaan — a Data Science graduate student at Arizona State University, with a B.Tech in Computer Science, AI &amp; Robotics from VIT. I work mostly on <span style={{ color: 'var(--neon-cyan)' }}>NLP and LLM fine-tuning</span>, with detours into deep learning, robotics, and ethical hacking.
            </p>
            <p>
              At <span style={{ color: 'var(--neon-magenta)' }}>DRDO</span>, I fine-tuned BERT-family models for sentiment analysis and named entity recognition. On the side I build AI backends — misinformation detection, interview simulation, agentic schedulers — that are designed to be transparent rather than impressive.
            </p>
            <p>
              I'm <span style={{ color: 'var(--neon-green)' }}>looking for Fall 2026 and Summer 2027 internships</span> where I can put Transformer-based models against real problems. If that's you, drop a coin in the contact section below.
            </p>
          </div>

          <PixelFrame tone="magenta">
            <Eyebrow tone="magenta">Player Card</Eyebrow>
            <div style={{ height: 16 }} />
            <dl className="about__card-meta">
              <dt>NAME</dt><dd><span className="accent">Ishaan Sahay</span></dd>
              <dt>CLASS</dt><dd>Data Scientist · ML/NLP Engineer</dd>
              <dt>BASE</dt><dd>Tempe, Arizona</dd>
              <dt>STATUS</dt><dd><span style={{ color: 'var(--neon-green)' }}>● Available · Fall 2026 / Summer 2027</span></dd>
              <dt>LANGUAGES</dt><dd>EN · DE (A2) · HI</dd>
              <dt>SPECIALS</dt><dd>LLM fine-tuning, NER, Sentiment Analysis</dd>
            </dl>
          </PixelFrame>
        </div>
      </div>
    </section>
  );
}
window.About = About;
