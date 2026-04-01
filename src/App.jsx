import React from 'react';
import { StaggeredMenu } from './StaggeredMenu';
import './App.css';

const menuItems = [
  { label: 'Home',         link: '#home',        ariaLabel: 'Home' },
  { label: 'Chi Siamo',    link: '#chi-siamo',   ariaLabel: 'Chi Siamo' },
  { label: 'LOCANDINA',    link: '#locandina',   ariaLabel: 'Locandina' },
  { label: 'Squadre',      link: '#squadre',     ariaLabel: 'Squadre' },
  { label: 'Regolamento',  link: '#regolamento', ariaLabel: 'Regolamento' },
  { label: 'Galleria',     link: '#galleria',    ariaLabel: 'Galleria Foto' },
  { label: 'Sponsor',      link: '#sponsor',     ariaLabel: 'Sponsor' },
  { label: 'Contatti',     link: '#contatti',    ariaLabel: 'Contatti' },
];

const socialItems = [
  { label: 'Instagram', link: 'https://www.instagram.com/sotto_l_orologio?igsh=MWRtdTY3bnNkOXI1OQ%3D%3D&utm_source=qr' },
];

const regole = [
  'Partite da 10 minuti per tempo',
  'Rose composte da massimo 8 giocatori',
  'Arbitro unico a campo',
  'In caso di parità nei gironi: differenza reti, poi sorteggio',
  'Si giocherà 5vs5',
  'Il costo sarà di euro 120 a squadra',
  'Tutte le squadre dovranno avere una propria divisa e comunicare il colore della maglia e i componenti agli organizzatori',
  'Chiusura delle iscrizioni il 5 luglio 2026',
  'Premi per le squadre vincitrici in denaro e coppe sia per la squadra che per i singoli calciatori',
];

const sponsors = [
  { id: 1, name: "Sponsor 1", logo: "/sponsor1.jpg" },
  { id: 2, name: "Sponsor 2", logo: "/sponsor2.png" },
  { id: 3, name: "Sponsor 3", logo: "/sponsor3.jpg" },
  { id: 4, name: "Sponsor 4", logo: "/sponsor4.png" },
];

export default function App() {
  return (
    <div className="main-container">

      {/* ── MENU ── */}
      <StaggeredMenu
        position="right"
        colors={['#111111', '#1a1a1a']}
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={false}
        logoUrl="/sotto l'rologio.png"
        menuButtonColor="#ffffff"
        openMenuButtonColor="#ff3e3e"
        accentColor="#ff3e3e"
        isFixed={true}
        menuButtonLabel="MENU"
      />

      {/* ── HOME / HERO ── */}
      <section id="home" className="hero-section">
        <div className="overlay" />
        <div className="hero-content">
          <img src="/sotto l'rologio.png" alt="Torneo Sotto l'Orologio" className="logo" />
          <h1 className="blur-text">
            <span style={{ '--delay': '0.2s' }}>TORNEO</span>
            <span style={{ '--delay': '0.5s' }}>SOTTO</span>
            <span style={{ '--delay': '0.8s' }}>L'OROLOGIO</span>
          </h1>
          <p className="subtitle">SECONDA EDIZIONE</p>
          <p className="tags">MUSIC &bull; FOOD &bull; SPORT</p>
          <span className="respect">RESPECT</span>
          <div className="event-info">
            <p className="event-date">16 · 17 · 18 · 19 LUGLIO 2026</p>
            <p className="event-place">AVETRANA (TA)</p>
          </div>
        </div>
      </section>

      {/* ── CHI SIAMO ── */}
      <section id="chi-siamo" className="page-section">
        <div className="section-inner">
          <h2 className="section-title">Chi Siamo</h2>
          <p className="section-text">
            Il Torneo Sotto l'Orologio è un evento nato ad Avetrana con l'obiettivo
            di unire sport, musica e cultura. Una manifestazione che celebra i valori
            del rispetto, dell'amicizia e della passione per il calcio.
            Dalla strada, per la strada.
            {'\n\n'}
            Il Torneo Sotto l'Orologio nasce nel 2025 dal sogno di 4 ragazzi di Avetrana
            legati da un'unica, viscerale passione per il calcio. Abbiamo voluto riportare
            il gioco dove tutto è iniziato: nella piazza principale, sulle nostre amate
            ''chianche'', proprio come facevamo da bambini.
            {'\n\n'}
            Non è solo un torneo, è una rivoluzione urbana che unisce Sport, Musica e Food.
            Qui celebriamo l'amicizia e il rispetto estremo, dentro e fuori dal campo.
            {'\n\n'}
            Preparatevi a dare tutto: in palio ci sono premi in denaro e coppe per le migliori
            squadre, i singoli talenti e i mister che sapranno fare la differenza.
          </p>
        </div>
      </section>

      {/* ── LOCANDINA 2026 ── */}
      <section id="locandina" className="page-section page-section--dark">
        <div className="section-inner">
          <h2 className="section-title">LOCANDINA 2026</h2>
          <p className="section-text">TORNEO SOTTO L'OROLOGIO 2026</p>
          <div className="locandina-container">
            <img src="/SECONDO TORNEO.jpg" width={800} alt="Locandina Ufficiale 2026" className="locandina-img" />
          </div>
        </div>
      </section>

      {/* ── SQUADRE ── */}
      <section id="squadre" className="page-section page-section--dark">
        <div className="section-inner">
          <h2 className="section-title">Squadre</h2>
          <p className="section-text">Le squadre partecipanti verranno annunciate presto.</p>
          <div className="teams-grid">
            {[1,2,3,4,5,6,7,8].map(n => (
              <div key={n} className="team-card">
                <span>Squadra {n}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REGOLAMENTO ── */}
      <section id="regolamento" className="page-section">
        <div className="section-inner">
          <h2 className="section-title">Regolamento</h2>
          <ul className="rules-list">
            {regole.map((regola, i) => (
              <li key={i} className="rule-item">{regola}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── GALLERIA ── */}
      <section id="galleria" className="page-section page-section--dark">
        <div className="section-inner">
          <h2 className="section-title">Galleria</h2>
          <p className="section-text">Alcune foto del Torneo Sotto l'Orologio 2025.</p>
          <div className="gallery-grid">
            {[
              '_DSC6059.JPG', '_DSC6081.JPG', '_DSC6235.JPG',
              '_DSC6135.JPG', '_DSC6260.JPG', '_DSC6288.JPG',
              '_DSC6327.JPG', '_DSC6507.JPG', '_DSC6557.JPG', '_DSC6559.JPG'
            ].map((nomeFoto, index) => (
              <div key={index} className="gallery-card">
                <img
                  src={`/${nomeFoto}`}
                  alt={`Scatto torneo ${index + 1}`}
                  className="gallery-img"
                  loading="lazy"
                  decoding="async"
                />
                <div className="gallery-overlay">
                  <span>SOTTO L'OROLOGIO 2025</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPONSOR ── */}
      <section id="sponsor" className="page-section">
        <div className="section-inner">
          <h2 className="section-title">Sponsor</h2>
          <p className="section-text">Vuoi sponsorizzare il torneo? Contattaci!</p>
          <div className="sponsor-grid">
            {sponsors.map(s => (
              <div key={s.id} className="sponsor-card">
                <img src={s.logo} alt={s.name} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTATTI ── */}
      <section id="contatti" className="page-section page-section--dark">
        <div className="section-inner">
          <h2 className="section-title">Contatti</h2>
          <div className="contact-list">

            <a href="https://www.instagram.com/sotto_l_orologio?igsh=MWRtdTY3bnNkOXI1OQ%3D%3D&utm_source=qr"
               target="_blank" rel="noopener noreferrer" className="contact-item">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="white">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span style={{ display: 'block', height: '20px' }} />
            </a>

            <a href="whatsapp://send?phone=+3478345014&text=Ciao%20Torneo%20Sotto%20l'Orologio!"
               className="contact-item">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>

          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <img src="public/sotto l'rologio.png" width="100" height="100" alt="Torneo Sotto l'Orologio" />
        <p>© 2026 Torneo Sotto l'Orologio — Avetrana (TA)</p>
      </footer>

    </div>
  );
}