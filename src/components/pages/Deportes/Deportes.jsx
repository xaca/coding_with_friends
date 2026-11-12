import { useEffect, useState } from 'react';
import MainLayout from '../../ui/MainLayout/MainLayout';
import {
    calcularTabla,
    campeonDe,
    estaJugado,
    estadoDe,
    ganadorDe,
    reglasDe,
} from './reglasTorneo';
import './Deportes.scss';

// Los torneos se publican editando public/torneos.json (ver readme.md).
// La tabla de posiciones y la llave final se calculan solas a partir de los marcadores.
const TORNEOS_URL = `${import.meta.env.BASE_URL}torneos.json`;

const ETIQUETAS_ESTADO = {
    'por-empezar': 'Por empezar',
    'en-curso': 'En curso',
    finalizado: 'Finalizado',
};

const ETIQUETAS_FASE = {
    grupos: 'Fase de grupos',
    semifinal: 'Semifinal',
    final: 'Final',
};

const formatoFecha = new Intl.DateTimeFormat('es-CO', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
});

// "2026-11-17" -> Date en hora local (evita el corrimiento de zona horaria)
function aFecha(fecha, hora = '00:00') {
    const [a, m, d] = fecha.split('-').map(Number);
    const [h, min] = hora.split(':').map(Number);
    return new Date(a, m - 1, d, h, min);
}

function aHora12(hora) {
    if (!hora) return '';
    const [h, m] = hora.split(':').map(Number);
    const sufijo = h >= 12 ? 'PM' : 'AM';
    return `${h % 12 || 12}:${String(m).padStart(2, '0')} ${sufijo}`;
}

function capitalizar(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}

function equipoPorId(torneo, id) {
    return torneo.equipos.find((equipo) => equipo.id === id);
}

// Elige primero un torneo en curso; si no hay, el primero de la lista
function torneoInicial(torneos) {
    return (torneos.find((torneo) => estadoDe(torneo) === 'en-curso') || torneos[0])?.id;
}

function NombreEquipo({ equipo }) {
    if (!equipo) return <span className="deportes__por-definir">Por definir</span>;
    return (
        <span className="deportes__equipo">
            <span className="deportes__color" style={{ background: equipo.color }} aria-hidden="true" />
            {equipo.nombre}
        </span>
    );
}

function TablaPosiciones({ torneo }) {
    const tabla = calcularTabla(torneo);
    const { unidad } = reglasDe(torneo.deporte);
    const abreviatura = unidad === 'sets' ? 'S' : 'P';

    return (
        <section className="deportes__bloque" aria-labelledby={`tabla-${torneo.id}`}>
            <h3 id={`tabla-${torneo.id}`} className="deportes__subtitulo">
                Tabla de posiciones
            </h3>
            <div className="deportes__tabla-scroll">
                <table className="deportes__tabla">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col" className="deportes__col-equipo">Equipo</th>
                            <th scope="col" title="Partidos jugados">PJ</th>
                            <th scope="col" title="Partidos ganados">PG</th>
                            <th scope="col" title="Partidos perdidos">PP</th>
                            <th scope="col" title={`${unidad} a favor`}>{abreviatura}F</th>
                            <th scope="col" title={`${unidad} en contra`}>{abreviatura}C</th>
                            <th scope="col" title="Diferencia">DIF</th>
                            <th scope="col" title="Puntos">PTS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tabla.map((fila) => (
                            <tr key={fila.equipo.id} className={fila.posicion <= 2 ? 'deportes__fila--clasifica' : ''}>
                                <td>{fila.posicion}</td>
                                <td className="deportes__col-equipo">
                                    <NombreEquipo equipo={fila.equipo} />
                                </td>
                                <td>{fila.jugados}</td>
                                <td>{fila.ganados}</td>
                                <td>{fila.perdidos}</td>
                                <td>{fila.aFavor}</td>
                                <td>{fila.enContra}</td>
                                <td>{fila.diferencia > 0 ? `+${fila.diferencia}` : fila.diferencia}</td>
                                <td className="deportes__pts">{fila.puntos}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <p className="deportes__nota">
                {torneo.deporte === 'voleibol'
                    ? 'Puntos FIVB: 3 por ganar 3-0 o 3-1, 2 por ganar 3-2 y 1 por perder 2-3.'
                    : 'Puntos FIBA: 2 por victoria y 1 por derrota.'}{' '}
                Desempate: victorias y diferencia.
            </p>
        </section>
    );
}

function CruceLlave({ torneo, partido }) {
    const ganador = ganadorDe(partido);
    const lados = [
        [partido.local, partido.marcador?.[0]],
        [partido.visitante, partido.marcador?.[1]],
    ];

    return (
        <div className="deportes__cruce">
            {lados.map(([id, marcador], indice) => (
                <div
                    key={indice}
                    className={`deportes__cruce-lado${ganador && ganador === id ? ' deportes__cruce-lado--gana' : ''}`}
                >
                    <NombreEquipo equipo={equipoPorId(torneo, id)} />
                    <span className="deportes__cruce-marcador">{estaJugado(partido) ? marcador : '–'}</span>
                </div>
            ))}
        </div>
    );
}

function FaseFinal({ torneo }) {
    const semifinales = torneo.partidos.filter((partido) => partido.fase === 'semifinal');
    const final = torneo.partidos.find((partido) => partido.fase === 'final');
    const campeon = equipoPorId(torneo, campeonDe(torneo));

    if (!semifinales.length && !final) return null;

    return (
        <section className="deportes__bloque" aria-labelledby={`llave-${torneo.id}`}>
            <h3 id={`llave-${torneo.id}`} className="deportes__subtitulo">
                Fase final
            </h3>
            <div className="deportes__llave">
                {semifinales.length > 0 && (
                    <div className="deportes__ronda">
                        <span className="deportes__ronda-titulo">Semifinales</span>
                        {semifinales.map((partido) => (
                            <CruceLlave key={partido.id} torneo={torneo} partido={partido} />
                        ))}
                    </div>
                )}
                {final && (
                    <div className="deportes__ronda deportes__ronda--final">
                        <span className="deportes__ronda-titulo">Final</span>
                        <CruceLlave torneo={torneo} partido={final} />
                        <div className="deportes__campeon">
                            <span className="deportes__ronda-titulo">Campeón</span>
                            {campeon ? (
                                <strong>🏆 {campeon.nombre}</strong>
                            ) : (
                                <span className="deportes__por-definir">Por definir</span>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

function ListaPartidos({ torneo, titulo, partidos }) {
    if (!partidos.length) return null;

    return (
        <div className="deportes__partidos">
            <h4 className="deportes__ronda-titulo">{titulo}</h4>
            <ul>
                {partidos.map((partido) => (
                    <li key={partido.id} className="deportes__partido">
                        <div className="deportes__partido-fecha">
                            <time dateTime={partido.fecha}>{capitalizar(formatoFecha.format(aFecha(partido.fecha)))}</time>
                            <span>{aHora12(partido.hora)}</span>
                        </div>
                        <div className="deportes__partido-cruce">
                            <NombreEquipo equipo={equipoPorId(torneo, partido.local)} />
                            <span className="deportes__partido-marcador">
                                {estaJugado(partido) ? partido.marcador.join(' – ') : 'vs'}
                            </span>
                            <NombreEquipo equipo={equipoPorId(torneo, partido.visitante)} />
                        </div>
                        <span className="deportes__partido-fase">{ETIQUETAS_FASE[partido.fase] || partido.fase}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function Calendario({ torneo }) {
    const porFecha = (a, b) => aFecha(a.fecha, a.hora) - aFecha(b.fecha, b.hora);
    const proximos = torneo.partidos.filter((partido) => !estaJugado(partido)).sort(porFecha);
    const jugados = torneo.partidos.filter(estaJugado).sort(porFecha).reverse();

    return (
        <section className="deportes__bloque deportes__bloque--ancho" aria-labelledby={`calendario-${torneo.id}`}>
            <h3 id={`calendario-${torneo.id}`} className="deportes__subtitulo">
                Partidos
            </h3>
            <ListaPartidos torneo={torneo} titulo="Próximos" partidos={proximos} />
            <ListaPartidos torneo={torneo} titulo="Resultados" partidos={jugados} />
        </section>
    );
}

function Torneo({ torneo }) {
    const reglas = reglasDe(torneo.deporte);
    const estado = estadoDe(torneo);

    return (
        <article className="deportes__torneo">
            <header className="deportes__encabezado">
                <span className="deportes__tag">
                    {reglas.nombre} · {ETIQUETAS_ESTADO[estado]}
                </span>
                <h2 className="deportes__titulo">{torneo.nombre}</h2>
                {torneo.lugar && <p className="deportes__lugar">📍 {torneo.lugar}</p>}
            </header>
            <div className="deportes__grid">
                <TablaPosiciones torneo={torneo} />
                <FaseFinal torneo={torneo} />
                <Calendario torneo={torneo} />
            </div>
        </article>
    );
}

// Deportes page shows the student tournaments loaded from public/torneos.json
export default function Deportes() {
    const [torneos, setTorneos] = useState([]);
    const [seleccionado, setSeleccionado] = useState(null);
    const [estado, setEstado] = useState('cargando'); // cargando | listo | error

    useEffect(() => {
        let activo = true;
        fetch(TORNEOS_URL)
            .then((res) => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.json();
            })
            .then((datos) => {
                if (!activo) return;
                const lista = Array.isArray(datos) ? datos : [];
                setTorneos(lista);
                setSeleccionado(torneoInicial(lista));
                setEstado('listo');
            })
            .catch(() => activo && setEstado('error'));
        return () => {
            activo = false;
        };
    }, []);

    const torneo = torneos.find((item) => item.id === seleccionado);

    return (
        <MainLayout>
            <div className="deportes">
                <h1>Torneos 🏐🏀</h1>

                {estado === 'cargando' && <p className="deportes__mensaje">Cargando torneos…</p>}

                {estado === 'error' && (
                    <p className="deportes__mensaje">No pudimos cargar los torneos. Intenta de nuevo más tarde.</p>
                )}

                {estado === 'listo' && torneos.length === 0 && (
                    <p className="deportes__mensaje">Por ahora no hay torneos publicados.</p>
                )}

                {estado === 'listo' && torneos.length > 0 && (
                    <>
                        {torneos.length > 1 && (
                            <div className="deportes__selector" role="tablist" aria-label="Torneos">
                                {torneos.map((item) => (
                                    <button
                                        key={item.id}
                                        type="button"
                                        role="tab"
                                        aria-selected={item.id === seleccionado}
                                        className={`deportes__opcion${item.id === seleccionado ? ' deportes__opcion--activa' : ''}`}
                                        onClick={() => setSeleccionado(item.id)}
                                    >
                                        <span aria-hidden="true">{reglasDe(item.deporte).emoji}</span>
                                        {item.nombre}
                                    </button>
                                ))}
                            </div>
                        )}
                        {torneo && <Torneo torneo={torneo} />}
                    </>
                )}
            </div>
        </MainLayout>
    );
}
