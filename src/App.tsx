import React from 'react';
import './index.css';

const features = [
  {
    title: "Mando Profesional",
    desc: "Compatible con Xbox, PS5 y Joy-Cons. Diseñado para una navegación analógica fluida.",
    icon: "🎮"
  },
  {
    title: "Escritura Veloz",
    desc: "Diseño en rejilla optimizado que supera la lentitud de los teclados de consola tradicionales.",
    icon: "⚡"
  },
  {
    title: "Sugerencias IA",
    desc: "Autocompletado inteligente que aprende de tu vocabulario personal.",
    icon: "🧠"
  },
  {
     title: "Temas Premium",
     desc: "Personaliza tu experiencia con temas modernos y efectos visuales de alta gama.",
     icon: "🎨"
  }
];

const screenshots = [
  { url: "/screenshots/feature_keyboard_default.png", title: "Interfaz Principal" },
  { url: "/screenshots/feature_app_drawer_left.png", title: "Acceso Rápido" },
  { url: "/screenshots/feature_settings_themes.png", title: "Personalización" },
];

function App() {
  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav style={{ padding: '2rem 1.5rem', position: 'fixed', top: 0, width: '100%', zIndex: 100, backdropFilter: 'blur(20px)', borderBottom: '1px solid var(--glass-border)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.05em' }}>
            OVE<span className="gradient-text">CONTROLLER</span>
          </div>
          <a href="#waitlist" className="btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>Unirse a la Beta</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ paddingTop: '180px', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', marginBottom: '1.5rem', fontWeight: 800 }}>
            Escribe <span className="gradient-text">sin soltar</span> el mando.
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            El teclado virtual definitivo para PC diseñado específicamente para gamepads. Rápido, fluido y totalmente personalizable.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <a href="#waitlist" className="btn-primary">Ver Demo</a>
            <a href="https://github.com/JoelBeja2000" target="_blank" className="btn-primary" style={{ background: 'transparent', border: '1px solid var(--glass-border)' }}>GitHub Profile</a>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section id="showcase" style={{ background: 'rgba(99, 102, 241, 0.05)' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}>Experiencia <span className="gradient-text">visual</span> única</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {screenshots.map((s, i) => (
              <div key={i} className="glass-card" style={{ padding: '0.5rem', overflow: 'hidden' }}>
                <img src={s.url} alt={s.title} style={{ width: '100%', borderRadius: '18px', display: 'block' }} />
                <div style={{ padding: '1rem', textAlign: 'center', fontWeight: 600 }}>{s.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {features.map((f, i) => (
              <div key={i} className="glass-card">
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{f.icon}</div>
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.5rem' }}>{f.title}</h3>
                <p style={{ color: 'var(--text-muted)' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <section id="waitlist" style={{ textAlign: 'center', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container">
          <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>¿Listo para el siguiente nivel?</h2>
            <p style={{ marginBottom: '2.5rem', color: 'var(--text-muted)' }}>Estamos en fase beta privada. Únete para recibir actualizaciones y acceso exclusivo.</p>
            <div style={{ display: 'flex', gap: '0.5rem', maxWidth: '400px', margin: '0 auto' }}>
              <input type="email" placeholder="Email" style={{ flex: 1, padding: '0.8rem 1rem', borderRadius: '10px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--glass-border)', color: 'white' }} />
              <button className="btn-primary">Unirse</button>
            </div>
          </div>
          <footer style={{ marginTop: '5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            © 2026 OveController. Made with ❤️ by Oveja.
          </footer>
        </div>
      </section>
    </div>
  );
}

export default App;
