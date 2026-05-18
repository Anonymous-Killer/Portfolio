function Contact() {
  const [copied, setCopied] = React.useState(false);
  const email = 'isahay@asu.edu';

  const copyEmail = () => {
    try {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch (e) {}
  };

  return (
    <section id="contact" className="section contact" style={{ background: 'var(--bg-0)' }}>
      <div className="container">
        <SectionHeader
          eyebrow="LEVEL 06 · CONNECT"
          eyebrowTone="magenta"
          title="Insert Coin"
          subtitle="Internships, collaborations, or a quick hello — all welcome."
          align="center"
        />

        <div className="contact__terminal">
          <div className="contact__terminal-bar">
            <span className="dot" /><span className="dot" /><span className="dot" />
            <span className="title">contact_player_01.sh</span>
          </div>
          <div className="contact__terminal-body">
            <div><span style={{ color: 'var(--neon-cyan)' }}>$</span> whoami</div>
            <div className="out" style={{ paddingLeft: 16 }}>Ishaan Sahay · MS Data Science · ASU '27</div>
            <div style={{ height: 8 }} />
            <div><span style={{ color: 'var(--neon-cyan)' }}>$</span> cat contact.json</div>
            <div className="out" style={{ paddingLeft: 16 }}>
              {'{'}<br/>
              <span style={{ paddingLeft: 16, display: 'inline-block' }}>
                <span className="key">"email"</span>: <span className="accent">"{email}"</span>,<br/>
                <span className="key">"phone"</span>: <span className="accent">"480.274.4568"</span>,<br/>
                <span className="key">"linkedin"</span>: <span className="accent">"linkedin.com/in/ishaan-sahay-208064202"</span>,<br/>
                <span className="key">"location"</span>: <span className="accent">"Tempe, AZ"</span>,<br/>
                <span className="key">"available"</span>: <span style={{ color: 'var(--neon-green)' }}>true</span><br/>
              </span>
              {'}'}
            </div>
            <div style={{ height: 8 }} />
            <div><span style={{ color: 'var(--neon-cyan)' }}>$</span> <BlinkCursor /></div>
          </div>
        </div>

        <div className="contact__socials">
          <PixelButton tone="cyan" size="lg" onClick={copyEmail}>
            {copied ? '✓ Email Copied' : 'Copy Email'}
          </PixelButton>
          <PixelButton tone="magenta" size="lg" href={`mailto:${email}`}>
            Send Mail →
          </PixelButton>
          <a className="pixel-btn pixel-btn--ghost pixel-btn--lg" href="https://www.linkedin.com/in/ishaan-sahay-208064202/" target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
          <a className="pixel-btn pixel-btn--ghost pixel-btn--lg" href="https://github.com/Anonymous-Killer" target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
window.Contact = Contact;
