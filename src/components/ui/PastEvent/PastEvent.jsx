import './PastEvent.scss';
// OpenPastEvent function opens a past event preview in a new tab
function OpenPastEvent(){

  const childUrl = window.open('/preview', '_blank');
  childUrl.document.open('text/html', 'replace');
  childUrl.document.write(htmlContent);

}
// PastEvent component displays a list of past events
function PastEvent(){
    const eventos = [
        { id: '01', emoji: '🌱', title: 'CWF - CONF (el inicio)' },
        { id: '02', emoji: '🍼', title: 'CWF - Renacimiento' },
        { id: '03', emoji: '🎙️', title: 'CWF - Día de la mujer' },
        { id: '04', emoji: '🕵️', title: 'CWF - Hackerone' },
        { id: '05', emoji: '🕹️', title: 'CWF - VR / Touchdesigner' },
        { id: '06', emoji: '🖲️', title: 'CWF - Design / WebGL' },
        { id: '07', emoji: '🏛️', title: 'CWF - G.D.S. / Hacking Interviews' },
        { id: '08', emoji: '⚔️', title: 'CWF - React vs Angular' }
    ];

    return (
        <section id="eventos_anteriores" className="eventos-anteriores">
            <h2>Eventos anteriores</h2>
            <ul className="lista-generica">
                {eventos.map((evento) => (
                    <li key={evento.id}>
                        {evento.emoji}{' '}
                        <a 
                            href={`/archivo/${evento.id}/index.html`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => {
                                e.preventDefault();
                                const childUrl = window.open(`/archivo/${evento.id}/index.html`, '_blank');
                            }}
                        >
                            {evento.title}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}
export default PastEvent;