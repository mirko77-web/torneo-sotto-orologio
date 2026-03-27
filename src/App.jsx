import React from 'react';
import { StaggeredMenu } from './StaggeredMenu';
import './App.css';

const menuItems = [
  { label: 'Home',         link: '#home',      ariaLabel: 'Home' },
  { label: 'Chi Siamo',    link: '#chi-siamo', ariaLabel: 'Chi Siamo' },
  { label: 'LOCANDINA',    link: '#locandina',   ariaLabel: 'Locandina' },
  { label: 'Squadre',      link: '#squadre',   ariaLabel: 'Squadre' },
  { label: 'Regolamento',  link: '#regolamento', ariaLabel: 'Regolamento' },
  { label: 'Galleria',     link: '#galleria',  ariaLabel: 'Galleria Foto' },
  { label: 'Sponsor',      link: '#sponsor',   ariaLabel: 'Sponsor' },
  { label: 'Contatti',     link: '#contatti',  ariaLabel: 'Contatti' },
];

const socialItems = [
  { label: 'Instagram', link: 'https://www.instagram.com/sotto_l_orologio?igsh=MWRtdTY3bnNkOXI1OQ%3D%3D&utm_source=qr' },
];

// ... (resto del codice invariato sopra)

export default function App() {
  return (
    <div className="main-container">

      {/* ── MENU AGGIORNATO ── */}
      <StaggeredMenu
        position="right"
        colors={['#000000', '#111111']}
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={false} // Disattivato per dare più spazio al font grande
        logoUrl="/sotto l'rologio.png" 
        menuButtonColor="#ffffff"
        openMenuButtonColor="#ff3e3e"
        accentColor="#ff3e3e"
        isFixed={true}
        menuButtonLabel="MENU" // Se il componente lo supporta, apparirà la scritta
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

Il Torneo Sotto l'Orologio nasce nel 2025 dal sogno di 4 ragazzi di Avetrana legati da un'unica, viscerale passione per il calcio. Abbiamo voluto riportare il gioco dove tutto è iniziato: nella piazza principale, sulle nostre amate ''chianche'', proprio come facevamo da bambini.

Non è solo un torneo, è una rivoluzione urbana che unisce Sport, Musica e Food. Qui celebriamo l'amicizia e il rispetto estremo, dentro e fuori dal campo.

Preparatevi a dare tutto: in palio ci sono premi in denaro e coppe per le migliori squadre, i singoli talenti e i mister che sapranno fare la differenza.
          </p>
        </div>
      </section>
      
     {/* ── LOCANDINA 2026 ── */}
<section id="locandina" className="page-section page-section--dark">
  <div className="section-inner">
    <h2 className="section-title">LOCANDINA 2026</h2>
    <p className="section-text">TORNEO SOTTO L'OROLOGIO 2026</p>
    
    <div className="locandina-container">
      {/* CORRETTO: Tolto 'public/' e chiusi i div correttamente */}
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
            <li>Partite da 10 minuti per tempo</li>
            <li>Rose composte da massimo 8 giocatori</li>
            
            <li>Arbitro unico a campo</li>
            <li>In caso di parità nei gironi: differenza reti, poi sorteggio</li>
            <li>si giocherà 5vs5</li>
            <li>il costo sarà di euro 120 a squadra</li>
            <li>tutte le squadre dovranno avere una propria divisa e comunicare il colore della maglia e i componenti agli organizzatori</li>
          <li>chiusura delle iscrizioni il 5 luglio 2026</li>
          <li>premi per le squadre vincitrici in denaro e coppe sia per la squadra e che per i singoli calciatori</li>
          </ul>

        </div>
      </section>
{/* ── GALLERIA ── */}
<section id="galleria" className="page-section page-section--dark">
  <div className="section-inner">
    <h2 className="section-title">Galleria</h2>
    <p className="section-text">alcune foto del Torneo Sotto l'Orologio 2025.</p>
    
    <div className="gallery-grid">
      {/* Qui scrivi i nomi esatti dei file che hai in public.
          Esempio: '1.jpg', '2.png', 'foto_campo.jpg', ecc.
      */}
      {[
        'public/_DSC6059.JPG', 'public/_DSC6081.JPG', 'public/_DSC6235.JPG', 
        'public/_DSC6135.JPG', 'public/_DSC6260.JPG', 'public/_DSC6288.JPG', 
        'public/_DSC6327.JPG', 'public/_DSC6507.JPG', 'public/_DSC6557.JPG', 'public/_DSC6559.JPG'
      ].map((nomeFoto, index) => (
        <div key={index} className="gallery-card">
          <img 
            src={`/${nomeFoto}`} 
            alt={`Scatto torneo ${index + 1}`} 
            className="gallery-img" 
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
            <a href="https://www.instagram.com/sotto_l_orologio?igsh=MWRtdTY3bnNkOXI1OQ%3D%3D&utm_source=qr"
               target="_blank" rel="noopener noreferrer"
               className="contact-item">
            
            instagram
            </a>
            <a href="Whatsapp://send?phone=+3478345014text=Ciao%20Torneo%20Sotto%20l'Orologio!"
               className="contact-item">
              WhatsApp
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