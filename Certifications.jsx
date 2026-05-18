function Certifications() {
  const certs = [
    { name: 'Certified Ethical Hacker',           issuer: 'EC-Council · May 2023', tier: 'LEGENDARY', icon: 'ghost' },
    { name: 'Meta Data Analyst',                   issuer: 'Meta',                  tier: 'GOLD',      icon: 'trophy' },
    { name: 'Microsoft Power BI Data Analyst',     issuer: 'Microsoft',             tier: 'GOLD',      icon: 'trophy' },
    { name: 'Cisco Packet Tracer',                 issuer: 'Cisco',                 tier: 'SILVER',    icon: 'star' },
    { name: 'Kaggle — Python · Pandas · Intro to ML', issuer: 'Kaggle',            tier: 'SILVER',    icon: 'star' },
    { name: 'Goethe-Zertifikat A2 (German)',       issuer: 'Goethe-Institut',       tier: 'BRONZE',    icon: 'coin' },
  ];

  const tierClass = {
    LEGENDARY: 'achievement--legendary',
    GOLD:      'achievement--gold',
    SILVER:    'achievement--silver',
    BRONZE:    'achievement--bronze',
  };

  const frameTone = (tier) => {
    if (tier === 'LEGENDARY') return 'magenta';
    if (tier === 'GOLD') return 'yellow';
    return 'cyan';
  };

  const iconTone = (tier) => {
    if (tier === 'LEGENDARY') return 'magenta';
    if (tier === 'GOLD') return 'yellow';
    if (tier === 'BRONZE') return 'cyan';
    return 'white';
  };

  return (
    <section id="certs" className="section">
      <div className="container">
        <SectionHeader
          eyebrow="LEVEL 05 · ACHIEVEMENTS UNLOCKED"
          eyebrowTone="yellow"
          title="Certifications"
          subtitle="Earned badges across security, data, and a little German on the side."
        />
        <div className="achievements-grid">
          {certs.map((c) => (
            <PixelFrame key={c.name} tone={frameTone(c.tier)}>
              <div className={`achievement ${tierClass[c.tier]}`}>
                <div className="achievement__badge">
                  <PixelIcon name={c.icon} size={28} tone={iconTone(c.tier)} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="achievement__tier">{c.tier}</div>
                  <h4 className="achievement__name">{c.name}</h4>
                  <div className="achievement__issuer">{c.issuer}</div>
                </div>
              </div>
            </PixelFrame>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Certifications = Certifications;
