function ProgressSidebar({ active }) {
  const [collapsed, setCollapsed] = React.useState(false);

  const sections = [
    { id: 'hero',       level: null, label: 'BOOT SCREEN'  },
    { id: 'about',      level: '01', label: 'CHARACTER BIO' },
    { id: 'skills',     level: '02', label: 'STATS SHEET'  },
    { id: 'projects',   level: '03', label: 'QUEST BOARD'  },
    { id: 'experience', level: '04', label: 'QUEST LOG'    },
    { id: 'certs',      level: '05', label: 'ACHIEVEMENTS' },
    { id: 'contact',    level: '06', label: 'CONNECT'      },
  ];

  const activeIdx = Math.max(0, sections.findIndex(s => s.id === active));
  const pct = Math.round((activeIdx / (sections.length - 1)) * 100);
  const blocks = 10;
  const filled = Math.round((pct / 100) * blocks);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <aside
      className={`prog-sidebar${collapsed ? ' is-collapsed' : ''}`}
      aria-label="Page progress index"
    >
      {/* ── Toggle button ── */}
      <button
        className="prog-sidebar__toggle"
        onClick={() => setCollapsed(c => !c)}
        title={collapsed ? 'Expand index' : 'Collapse index'}
        aria-expanded={!collapsed}
      >
        <span className="prog-sidebar__toggle-hint">INDEX</span>
        <span className="prog-sidebar__toggle-arrow">{collapsed ? '▶' : '◀'}</span>
      </button>

      {/* ── Loading block (collapses vertically when sidebar is closed) ── */}
      <div className="prog-sidebar__loading-block">
        <div className="prog-sidebar__hdr">
          <span className="prog-sidebar__hdr-label">LOADING</span>
          <span className="prog-sidebar__hdr-pct">{pct}%</span>
        </div>
        <div
          className="prog-sidebar__loadbar"
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div className="prog-sidebar__loadbar-fill" style={{ width: `${pct}%` }} />
        </div>
        <div className="prog-sidebar__loadbar-ascii">
          {'['}{'█'.repeat(filled)}{'░'.repeat(blocks - filled)}{']'}
        </div>
      </div>

      {/* ── Section index ── */}
      <nav className="prog-sidebar__nav">
        {sections.map((s, i) => {
          const isDone   = i < activeIdx;
          const isActive = i === activeIdx;
          return (
            <React.Fragment key={s.id}>
              <button
                className={`prog-sidebar__item${isActive ? ' is-active' : ''}${isDone ? ' is-done' : ''}`}
                onClick={() => { scrollTo(s.id); setCollapsed(false); }}
                title={s.level ? `LV.${s.level} · ${s.label}` : s.label}
                aria-current={isActive ? 'location' : undefined}
              >
                <span className="prog-sidebar__dot" />
                <span className="prog-sidebar__item-text">
                  <span className="prog-sidebar__lvnum">
                    {s.level ? `LV.${s.level}` : 'START'}
                  </span>
                  <span className="prog-sidebar__lbl">{s.label}</span>
                </span>
              </button>
              {i < sections.length - 1 && (
                <div className={`prog-sidebar__seg${isDone ? ' is-done' : ''}`} />
              )}
            </React.Fragment>
          );
        })}
      </nav>
    </aside>
  );
}
window.ProgressSidebar = ProgressSidebar;
