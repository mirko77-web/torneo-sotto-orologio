// RegistrationPopup.jsx
import { useState } from 'react';

export default function RegistrationPopup({ onClose }) {
  const [teamName, setTeamName] = useState('');
  const [phone, setPhone] = useState('');
  const [players, setPlayers] = useState(Array(8).fill(''));
  const [logoChoice, setLogoChoice] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const filledCount = players.filter(p => p.trim().length > 0).length;

  const handlePlayer = (i, val) => {
    const updated = [...players];
    updated[i] = val;
    setPlayers(updated);
  };

  const handleSubmit = async () => {
    if (!teamName.trim()) { alert('Inserisci il nome della squadra!'); return; }
    if (!phone.trim()) { alert('Inserisci un numero di telefono!'); return; }
    if (filledCount < 4) { alert('Inserisci almeno 4 giocatori!'); return; }

    setLoading(true);
  const playersList = players
    .filter(p => p.trim())
    .map((p, i) => `${i + 1}. ${p}`)
    .join('%0A');

  const logoTesto = logoChoice === 'no' 
    ? 'NO - creami il logo perfavore' 
    : logoChoice === 'si' 
    ? 'SI - ho gia il mio logo' 
    : 'Non specificato';

 const messaggio = 
  `⚽ NUOVA ISCRIZIONE TORNEO SOTTO L'OROLOGIO 2026 %0A` +
  `━━━━━━━━━━━━━━━━%0A` +
  `🛡️ Squadra: ${teamName}%0A` +
  `📞 Telefono: ${phone}%0A` +  
  `👥 Giocatori (${filledCount}):%0A${playersList}%0A` +
  `🎨 Logo: ${logoTesto}%0A` +
  `━━━━━━━━━━━━━━━━`;

  const tuoNumero = ' +393478345014'; 
  const apiKey = '5077846';  

  try {
    await fetch(
      `https://api.callmebot.com/whatsapp.php?phone=${tuoNumero}&text=${messaggio}&apikey=${apiKey}`,
      { mode: 'no-cors' }
    );
  } catch (e) {
    console.log('WhatsApp inviato');
  }

  setLoading(false); 
  setSubmitted(true);
};
  return (
    <div className="reg-overlay" onClick={(e) => e.target.classList.contains('reg-overlay') && onClose()}>
      <div className="reg-popup">
        {!submitted ? (
          <>
            <button className="reg-close" onClick={onClose}>✕</button>
            <div className="reg-header">
              <span className="reg-badge">TORNEO SOTTO L'OROLOGIO 2026</span>
              <h2>Iscriviti ora!</h2>
              <p>Compila il modulo — max 8 giocatori per squadra</p>
            </div>
            <div className="reg-body">
              <div className="reg-field">
                <label>Nome della squadra</label>
                <input
                  type="text"
                  value={teamName}
                  onChange={e => setTeamName(e.target.value)}
                  placeholder="Es. nome squadra"
                />
              </div>

              <hr className="reg-divider" />

              <div className="reg-players-header">
                <span>GIOCATORI</span>
                <span className="reg-count">{filledCount} / 8</span>
              </div>

              <div className="reg-players-grid">
                {players.map((p, i) => (
                  <div key={i} className="reg-player-row">
                    <span className="reg-player-num">#{i + 1}</span>
                    <input
                      type="text"
                      value={p}
                      onChange={e => handlePlayer(i, e.target.value)}
                      placeholder="Nome e Cognome"
                    />
                  </div>
                  
                ))}
              </div>
              <div className="reg-field">
  <label>Numero di telefono</label>
  <input
    type="tel"
    value={phone}
    onChange={e => setPhone(e.target.value)}
    placeholder="Es. 3471234567"
  />
</div>

              <hr className="reg-divider" />

              <label>Hai già un logo?</label>
              <div className="reg-logo-box">
                <span className="reg-logo-icon">🎨</span>
                <p>Hai un logo per la tua squadra?<br />
                  <strong>Se non ce l'hai, lo creiamo noi per te!</strong>
                </p>
                <div className="reg-logo-btns">
                  <button
                    className={`reg-logo-btn ${logoChoice === 'si' ? 'active' : ''}`}
                    onClick={() => setLogoChoice('si')}
                  >Sì, ce l'ho</button>
                  <button
                    className={`reg-logo-btn ${logoChoice === 'no' ? 'active' : ''}`}
                    onClick={() => setLogoChoice('no')}
                  >No, createmelo!</button>
                </div>
                {logoChoice === 'no' && (
                  <p className="reg-logo-msg reg-logo-msg--yes">
                    🎨 Il nostro team creerà un logo unico per la tua squadra!
                  </p>
                )}
                {logoChoice === 'si' && (
                  <p className="reg-logo-msg reg-logo-msg--no">
                    inviaci il tuo logo tramite whatsapp.
                  </p>
                )}
              </div>

              <button className="reg-submit" onClick={handleSubmit}>
                🏆 &nbsp;Iscriviti al torneo
              </button>
              <p className="reg-note">Iscrizione confermata entro 24h · Quota €120 entro il 5 luglio </p>
            </div>
          </>
        ) : (
          <div className="reg-success">
            <div className="reg-trophy">🏆</div>
            <h3>Iscrizione inviata!</h3>
            <p>
              <strong>{teamName}</strong> hai inviato la richiesta di iscrizione. l'ufficilità avverrà quando sarà fatto il saldo della quota. GRAZIE<br />
              {logoChoice === 'no'
                ? 'Creeremo noi il tuo logo — aspetta di sentirci! te lo invieremo nel pù breve tempo possibilie.'
                : 'Ricorda di inviarci il tuo logo.'}
            </p>
            <button className="reg-submit" style={{ marginTop: '24px' }} onClick={onClose}>
              Chiudi
            </button>
          </div>
        )}
      </div>
    </div>
  );
}