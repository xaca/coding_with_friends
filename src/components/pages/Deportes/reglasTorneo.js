// Reglas de puntuación y utilidades para calcular la tabla de un torneo a partir de sus partidos

// Puntos por partido según el reglamento de cada deporte
const REGLAS = {
    // FIVB: 3-0 o 3-1 da 3 puntos al ganador; 3-2 da 2 al ganador y 1 al perdedor
    voleibol: {
        nombre: 'Voleibol',
        emoji: '🏐',
        unidad: 'sets',
        puntos(propio, rival) {
            if (propio > rival) return rival === 2 ? 2 : 3;
            return propio === 2 ? 1 : 0;
        },
    },
    // FIBA: 2 puntos por victoria y 1 por derrota
    baloncesto: {
        nombre: 'Baloncesto',
        emoji: '🏀',
        unidad: 'puntos',
        puntos(propio, rival) {
            return propio > rival ? 2 : 1;
        },
    },
};

export function reglasDe(deporte) {
    return REGLAS[deporte] || REGLAS.baloncesto;
}

export function estaJugado(partido) {
    return Array.isArray(partido.marcador) && partido.marcador.length === 2;
}

export function ganadorDe(partido) {
    if (!estaJugado(partido)) return null;
    const [local, visitante] = partido.marcador;
    if (local === visitante) return null;
    return local > visitante ? partido.local : partido.visitante;
}

// Tabla de posiciones de la fase de grupos, ordenada por puntos, victorias y diferencia
export function calcularTabla(torneo) {
    const reglas = reglasDe(torneo.deporte);
    const filas = new Map(
        torneo.equipos.map((equipo) => [
            equipo.id,
            { equipo, jugados: 0, ganados: 0, perdidos: 0, aFavor: 0, enContra: 0, puntos: 0 },
        ])
    );

    torneo.partidos
        .filter((partido) => partido.fase === 'grupos' && estaJugado(partido))
        .forEach((partido) => {
            const [golesLocal, golesVisitante] = partido.marcador;
            [
                [partido.local, golesLocal, golesVisitante],
                [partido.visitante, golesVisitante, golesLocal],
            ].forEach(([id, propio, rival]) => {
                const fila = filas.get(id);
                if (!fila) return;
                fila.jugados += 1;
                fila.aFavor += propio;
                fila.enContra += rival;
                if (propio > rival) fila.ganados += 1;
                else fila.perdidos += 1;
                fila.puntos += reglas.puntos(propio, rival);
            });
        });

    return [...filas.values()]
        .map((fila) => ({ ...fila, diferencia: fila.aFavor - fila.enContra }))
        .sort(
            (a, b) =>
                b.puntos - a.puntos ||
                b.ganados - a.ganados ||
                b.diferencia - a.diferencia ||
                b.aFavor - a.aFavor ||
                a.equipo.nombre.localeCompare(b.equipo.nombre)
        )
        .map((fila, indice) => ({ ...fila, posicion: indice + 1 }));
}

// El torneo termina cuando la final tiene ganador
export function campeonDe(torneo) {
    const final = torneo.partidos.find((partido) => partido.fase === 'final');
    return final ? ganadorDe(final) : null;
}

export function estadoDe(torneo) {
    if (campeonDe(torneo)) return 'finalizado';
    return torneo.partidos.some(estaJugado) ? 'en-curso' : 'por-empezar';
}
