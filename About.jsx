function About() {
  const [loreOpen, setLoreOpen] = React.useState(false);

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

        {/* ── Full Lore ── */}
        <div className="full-lore">
          <button
            className="full-lore__toggle"
            onClick={() => setLoreOpen((o) => !o)}
            aria-expanded={loreOpen}
          >
            <span>
              <span style={{ color: 'var(--fg-3)', marginRight: 10 }}>[</span>
              Full Lore
              <span style={{ color: 'var(--fg-3)', marginLeft: 10 }}>]</span>
              <span style={{ color: 'var(--fg-3)', fontWeight: 400, letterSpacing: 'var(--tracking-normal)', textTransform: 'none', marginLeft: 16, fontSize: 'var(--fs-xs)' }}>
                {loreOpen ? 'collapse résumé' : 'expand résumé'}
              </span>
            </span>
            <span className={`full-lore__caret ${loreOpen ? 'is-open' : ''}`}>▾</span>
          </button>

          <div className={`full-lore__body ${loreOpen ? 'is-open' : ''}`}>
            <div className="full-lore__inner">

              {/* SUMMARY */}
              <div>
                <h3 className="resume-section__heading">Summary</h3>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-sm)', color: 'var(--fg-2)', lineHeight: 'var(--lh-normal)', margin: 0 }}>
                  Data Science graduate student specializing in Data Science and Robotics, with experience in fine-tuning large language models for various NLP tasks. Proficient in Python, C++, and leading machine learning libraries. Certified Ethical Hacker with a strong foundation in cybersecurity and robotics. Seeking Fall 2026 and Summer 2027 internship opportunities to apply Transformer-based models and similar algorithms to practical challenges.
                </p>
              </div>

              {/* EDUCATION */}
              <div>
                <h3 className="resume-section__heading">Education</h3>
                <div className="resume-entry">
                  <div className="resume-entry__title">M.S. Data Science &amp; Analytics</div>
                  <div className="resume-entry__date">May 2027</div>
                  <div className="resume-entry__sub">Arizona State University — Tempe, AZ</div>
                </div>
                <div className="resume-entry">
                  <div className="resume-entry__title">B.Tech, Computer Science, AI &amp; Robotics</div>
                  <div className="resume-entry__date">May 2024</div>
                  <div className="resume-entry__sub">Vellore Institute of Technology</div>
                  <ul className="resume-bullets">
                    <li><span>Relevant Coursework: Machine Learning, Deep Learning, Natural Language Processing</span></li>
                  </ul>
                </div>
              </div>

              {/* SKILLS */}
              <div>
                <h3 className="resume-section__heading">Technical Skills &amp; Certifications</h3>
                <div className="resume-skills">
                  <div className="resume-skill-row">
                    <div className="resume-skill-row__label">AI / ML</div>
                    <div className="resume-skill-row__val">LLM Fine-Tuning, Deep Learning, TensorFlow, CNN, RNN, DBN, MLP</div>
                  </div>
                  <div className="resume-skill-row">
                    <div className="resume-skill-row__label">Programming</div>
                    <div className="resume-skill-row__val">Python, MySQL, C, C++</div>
                  </div>
                  <div className="resume-skill-row">
                    <div className="resume-skill-row__label">Data Analysis</div>
                    <div className="resume-skill-row__val">JMP, Microsoft Power BI, MATLAB, R</div>
                  </div>
                  <div className="resume-skill-row">
                    <div className="resume-skill-row__label">Certifications</div>
                    <div className="resume-skill-row__val">
                      <span style={{ color: 'var(--neon-magenta)' }}>Certified Ethical Hacker</span> — EC-Council · May 2023
                    </div>
                  </div>
                  <div className="resume-skill-row">
                    <div className="resume-skill-row__label">Additional</div>
                    <div className="resume-skill-row__val">Meta Data Analyst · Microsoft Power BI Data Analyst · Cisco Packet Tracer · Kaggle (Python, Pandas, Intro to ML) · Goethe-Zertifikat A2</div>
                  </div>
                </div>
              </div>

              {/* EXPERIENCE */}
              <div>
                <h3 className="resume-section__heading">Professional Experience</h3>
                <div className="resume-entry">
                  <div className="resume-entry__title">Data Science Intern — <span style={{ color: 'var(--neon-cyan)' }}>DRDO</span></div>
                  <div className="resume-entry__date">Jan 2024 – Jun 2024</div>
                  <ul className="resume-bullets">
                    <li><span>Fine-tuned Large Language Models for NLP tasks — Sentiment Analysis and Named Entity Recognition.</span></li>
                    <li><span>Conducted comparative study on BERT-based models for sentiment classification.</span></li>
                    <li><span>Explored various Generative AI tools and evaluation metrics in a professional research setting.</span></li>
                  </ul>
                </div>
              </div>

              {/* PROJECTS */}
              <div>
                <h3 className="resume-section__heading">Projects</h3>
                <div className="resume-entry">
                  <div className="resume-entry__title">FactAI — Multilingual Misinformation Detection</div>
                  <ul className="resume-bullets">
                    <li><span>Built an AI backend for detecting misinformation in multilingual news headlines, generating a 1–10 reliability score using evidence-based verification.</span></li>
                    <li><span>Designed an end-to-end pipeline: language detection → claim normalization → evidence retrieval → deterministic scoring for explainability and reduced hallucination.</span></li>
                    <li><span>Integrated Google Fact Check &amp; Tavily APIs with NVIDIA NIM for orchestration, query planning, and evidence summarization.</span></li>
                    <li><span>Built with Python, FastAPI, and ChromaDB; outputs structured JSON (classification, confidence, reasoning, uncertainty).</span></li>
                  </ul>
                </div>
                <div className="resume-entry">
                  <div className="resume-entry__title">Pitch Mirror — AI-Driven Interview Simulation</div>
                  <ul className="resume-bullets">
                    <li><span>Built core flow and decision logic for role-specific AI agents (recruiter, investor, coding interviewer) to simulate interviews and pitch scenarios using LLMs and multimodal context.</span></li>
                    <li><span>Implemented backend orchestration and session state handling for thread-based progression, context memory, and post-session evaluation.</span></li>
                    <li><span>Integrated document uploads, external research, and real-time interactions for an adaptive, evaluation-aware practice environment.</span></li>
                  </ul>
                </div>
                <div className="resume-entry">
                  <div className="resume-entry__title">GamePro — Automated Sports Match Scheduler</div>
                  <ul className="resume-bullets">
                    <li><span>Designed and implemented agentic AI modules for autonomous task execution and decision-making workflows.</span></li>
                    <li><span>AI agent logic built with LangChain and the Gemini API; deployed for college-setting match scheduling.</span></li>
                  </ul>
                </div>
              </div>

              {/* ACTIVITIES */}
              <div>
                <h3 className="resume-section__heading">Activities</h3>
                <div className="resume-entry">
                  <div className="resume-entry__title">Hackathons</div>
                  <ul className="resume-bullets">
                    <li><span>Innovation Hacks (ASU × MLH) — <span style={{ color: 'var(--neon-yellow)' }}>3rd Place</span> for Pitch Mirror.</span></li>
                    <li><span>Sunhacks Hackathon participant.</span></li>
                  </ul>
                </div>
              </div>

              {/* DOWNLOAD */}
              <div className="full-lore__actions">
                <a
                  className="pixel-btn pixel-btn--cyan pixel-btn--sm"
                  href="assets/Resume_Ishaan_Sahay.docx"
                  download="Resume_Ishaan_Sahay.docx"
                >
                  ↓ Download Résumé
                </a>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
window.About = About;
