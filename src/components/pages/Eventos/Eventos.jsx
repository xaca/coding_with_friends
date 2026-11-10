import { useEffect, useState } from 'react';
import MainLayout from '../../ui/MainLayout/MainLayout';
import './Eventos.scss';

// La agenda se publica editando public/eventos.json (no hace falta tocar código).
// Formato de cada evento:
// {
//   "id": 1,
//   "etiqueta": "CHARLA ONLINE · UPB",
//   "titulo": "Nombre del evento",
//   "facilitador": "Nombre",            (opcional)
//   "rol": "Cargo del facilitador",      (opcional)
//   "lugar": "Auditorio, bloque 10",     (opcional, presencial)
//   "direccion": "Dirección",            (opcional, presencial)
//   "fecha": "2026-11-20",               (AAAA-MM-DD)
//   "horaInicio": "17:00",               (24 h)
//   "horaFin": "18:00",                  (opcional)
//   "tipo": "online" | "presencial",
//   "enlace": "https://...",             (opcional: registro o transmisión)
//   "textoBoton": "Registrarme"          (opcional)
// }
const EVENTOS_URL = `${import.meta.env.BASE_URL}eventos.json`;

const formatoFecha = new Intl.DateTimeFormat('es-CO', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
});

// "2026-11-20" + "17:00" -> Date en hora local
function aFecha(fecha, hora = '00:00') {
    const [a, m, d] = fecha.split('-').map(Number);
    const [h, min] = hora.split(':').map(Number);
    return new Date(a, m - 1, d, h, min);
}

function aHora12(hora) {
    if (!hora) return '';
    const [h, m] = hora.split(':').map(Number);
    const sufijo = h >= 12 ? 'PM' : 'AM';
    const h12 = h % 12 || 12;
    return `${h12}:${String(m).padStart(2, '0')} ${sufijo}`;
}

function capitalizar(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}

// Un evento sigue siendo "próximo" hasta que termina
function finDelEvento(evento) {
    return aFecha(evento.fecha, evento.horaFin || evento.horaInicio || '23:59');
}

function separarEventos(eventos, ahora = new Date()) {
    const ordenados = [...eventos].sort(
        (a, b) => aFecha(a.fecha, a.horaInicio) - aFecha(b.fecha, b.horaInicio)
    );
    return {
        proximos: ordenados.filter((e) => finDelEvento(e) >= ahora),
        pasados: ordenados.filter((e) => finDelEvento(e) < ahora).reverse(),
    };
}

function TarjetaEvento({ evento, pasado = false }) {
    const fecha = capitalizar(formatoFecha.format(aFecha(evento.fecha)));
    const hora = [aHora12(evento.horaInicio), aHora12(evento.horaFin)]
        .filter(Boolean)
        .join(' – ');
    const esOnline = evento.tipo === 'online';
    const titular = evento.facilitador || evento.lugar;
    const detalle = evento.rol || evento.direccion;

    return (
        <article className={`eventos__card${pasado ? ' eventos__card--pasado' : ''}`}>
            <div className="eventos__grid">
                <div className="eventos__info">
                    <span className="eventos__tag">{evento.etiqueta}</span>
                    <h3 className="eventos__title">{evento.titulo}</h3>
                    {titular && (
                        <p className="eventos__speaker">
                            {evento.facilitador && <span>Facilitador: </span>}
                            <strong>{titular}</strong>
                            {detalle && <span> &mdash; {detalle}</span>}
                        </p>
                    )}
                </div>

                <div className="eventos__fecha">
                    <span className="eventos__fecha-label">Fecha y Hora</span>
                    <time className="eventos__fecha-valor" dateTime={evento.fecha}>
                        {fecha}
                    </time>
                    {hora && <span className="eventos__hora">{hora}</span>}
                </div>

                <div className="eventos__accion">
                    {!pasado && evento.enlace && (
                        <a
                            href={evento.enlace}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="eventos__btn"
                        >
                            {evento.textoBoton || (esOnline ? 'Mirar online' : 'Registrarme')}
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                />
                            </svg>
                        </a>
                    )}
                    {pasado && <span className="eventos__finalizado">Finalizado</span>}
                </div>
            </div>
        </article>
    );
}

export default function Eventos() {
    const [eventos, setEventos] = useState([]);
    const [estado, setEstado] = useState('cargando'); // cargando | listo | error

    useEffect(() => {
        let activo = true;
        fetch(EVENTOS_URL)
            .then((res) => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.json();
            })
            .then((datos) => {
                if (!activo) return;
                setEventos(Array.isArray(datos) ? datos : []);
                setEstado('listo');
            })
            .catch(() => activo && setEstado('error'));
        return () => {
            activo = false;
        };
    }, []);

    const { proximos, pasados } = separarEventos(eventos);

    return (
        <MainLayout>
            <div className="eventos">
                <h1>Eventos 📅</h1>

                {estado === 'cargando' && (
                    <p className="eventos__mensaje">Cargando agenda…</p>
                )}

                {estado === 'error' && (
                    <p className="eventos__mensaje">
                        No pudimos cargar la agenda. Intenta de nuevo más tarde.
                    </p>
                )}

                {estado === 'listo' && (
                    <>
                        <section className="eventos__proximos" aria-labelledby="eventos-proximos">
                            <h2 id="eventos-proximos" className="eventos__seccion">
                                Próximos eventos
                            </h2>
                            {proximos.length > 0 ? (
                                <div className="eventos__lista">
                                    {proximos.map((evento) => (
                                        <TarjetaEvento key={evento.id} evento={evento} />
                                    ))}
                                </div>
                            ) : (
                                <p className="eventos__mensaje">
                                    Por ahora no hay eventos programados. ¡Pronto anunciaremos
                                    la próxima fecha!
                                </p>
                            )}
                        </section>

                        {pasados.length > 0 && (
                            <details className="eventos__pasados">
                                <summary className="eventos__seccion">
                                    Eventos pasados ({pasados.length})
                                </summary>
                                <div className="eventos__lista">
                                    {pasados.map((evento) => (
                                        <TarjetaEvento key={evento.id} evento={evento} pasado />
                                    ))}
                                </div>
                            </details>
                        )}
                    </>
                )}
            </div>
        </MainLayout>
    );
}
