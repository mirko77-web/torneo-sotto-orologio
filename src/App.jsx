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
            {[1,2,3,4].map(n => (
              <div key={n} className="sponsor-card">
                <span>SPONSOR {n}</span>
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
            <a
              href="https://www.instagram.com/sotto_l_orologio?igsh=MWRtdTY3bnNkOXI1OQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <img src="src/insta.webp" width={80} height={80} alt="instagram" />
            </a>
            <a
              href="whatsapp://send?phone=+3478345014&text=Ciao%20Torneo%20Sotto%20l'Orologio!"
              className="contact-item"
            >
              <img src="src/assets/WhatsApp.svg.webp" width={80} height={80} alt="whatsapp" />
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <p>© 2026 Torneo Sotto l'Orologio — Avetrana (TA)</p>
      </footer>

    </div>
  );
}