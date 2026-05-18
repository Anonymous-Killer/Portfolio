const { useState, useEffect, useRef } = React;

function PixelFrame({ tone = 'cyan', interactive = false, children, style, className = '', as = 'div', ...rest }) {
  const Tag = as;
  const cls = `pixel-frame pixel-frame--${tone} ${interactive ? 'is-interactive' : ''} ${className}`.trim();
  return (
    <Tag className={cls} style={style} {...rest}>
      <span className="pixel-frame__corner pixel-frame__corner--tl" />
      <span className="pixel-frame__corner pixel-frame__corner--tr" />
      <span className="pixel-frame__corner pixel-frame__corner--bl" />
      <span className="pixel-frame__corner pixel-frame__corner--br" />
      <div className="pixel-frame__body">{children}</div>
    </Tag>
  );
}

function PixelButton({ tone = 'cyan', size = 'md', children, icon, iconRight, onClick, href, type = 'button', style, target, rel }) {
  const cls = `pixel-btn pixel-btn--${tone} pixel-btn--${size}`;
  const inner = (
    <>
      {icon ? <span className="pixel-btn__icon">{icon}</span> : null}
      <span className="pixel-btn__label">{children}</span>
      {iconRight ? <span className="pixel-btn__icon">{iconRight}</span> : null}
    </>
  );
  if (href) {
    return <a className={cls} href={href} style={style} onClick={onClick} target={target} rel={rel}>{inner}</a>;
  }
  return <button className={cls} type={type} style={style} onClick={onClick}>{inner}</button>;
}

function Eyebrow({ children, tone = 'cyan', bracket = true }) {
  return (
    <div className={`eyebrow eyebrow-${tone}`} style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}>
      {bracket ? <span style={{ opacity: 0.6 }}>[</span> : null}
      <span>{children}</span>
      {bracket ? <span style={{ opacity: 0.6 }}>]</span> : null}
    </div>
  );
}

function SectionHeader({ eyebrow, eyebrowTone = 'cyan', title, subtitle, align = 'left' }) {
  return (
    <header className={`section-header section-header--${align}`}>
      {eyebrow ? <Eyebrow tone={eyebrowTone}>{eyebrow}</Eyebrow> : null}
      <h2 className="h2 section-header__title">{title}</h2>
      {subtitle ? <p className="body body-dim section-header__subtitle">{subtitle}</p> : null}
    </header>
  );
}

function TagPill({ children, tone = 'cyan' }) {
  return <span className={`tag-pill tag-pill--${tone}`}>{children}</span>;
}

function StatBar({ label, value, max = 100, tone = 'cyan', segments = 20 }) {
  const pct = Math.max(0, Math.min(1, value / max));
  const filled = Math.round(pct * segments);
  return (
    <div className={`stat-bar stat-bar--${tone}`}>
      <div className="stat-bar__row">
        <span className="stat-bar__label">{label}</span>
        <span className="stat-bar__value">{value}<span className="stat-bar__max">/{max}</span></span>
      </div>
      <div className="stat-bar__track">
        {Array.from({ length: segments }).map((_, i) => (
          <span key={i} className={`stat-bar__seg ${i < filled ? 'is-on' : ''}`} />
        ))}
      </div>
    </div>
  );
}

function BlinkCursor({ tone = 'green' }) {
  return <span className={`blink-cursor blink-cursor--${tone}`}>▌</span>;
}

function PixelIcon({ name, size = 16, tone = 'cyan', style }) {
  return (
    <span
      className={`pixel-icon pixel-icon--${tone}`}
      style={{
        display: 'inline-block',
        width: size,
        height: size,
        maskImage: `url(assets/pixel/${name}.svg)`,
        WebkitMaskImage: `url(assets/pixel/${name}.svg)`,
        maskSize: 'contain',
        WebkitMaskSize: 'contain',
        maskRepeat: 'no-repeat',
        WebkitMaskRepeat: 'no-repeat',
        ...style,
      }}
    />
  );
}

function Typewriter({ text, speed = 28, startDelay = 0, onDone }) {
  const [out, setOut] = useState('');
  useEffect(() => {
    let i = 0;
    let cancelled = false;
    const tick = () => {
      if (cancelled) return;
      if (i <= text.length) {
        setOut(text.slice(0, i));
        i++;
        setTimeout(tick, speed);
      } else if (onDone) onDone();
    };
    const t = setTimeout(tick, startDelay);
    return () => { cancelled = true; clearTimeout(t); };
  }, []);
  return <span>{out}</span>;
}

Object.assign(window, {
  PixelFrame, PixelButton, Eyebrow, SectionHeader,
  TagPill, StatBar, BlinkCursor, PixelIcon, Typewriter,
});
