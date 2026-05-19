function App() {
  const [active, setActive] = React.useState('hero');

  React.useEffect(() => {
    const ids = ['hero', 'about', 'skills', 'projects', 'experience', 'certs', 'contact'];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="scanlines">
      <NavBar active={active} onNav={setActive} />
      <div className="page-layout">
        <ProgressSidebar active={active} />
        <main className="page-main">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certifications />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
