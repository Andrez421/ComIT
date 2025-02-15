enum TipoDeJugador {
    ARQUERO,
    DEFENSOR,
    MEDIOCAMPISTA,
    ENGANCHE,
    DELANTERO,
  }
  
  const jugador: {
    nombre: string;
    apellido: string;
    tipoDeJugador: TipoDeJugador;
  } = {
    nombre: "Juan Roman",
    apellido: "Riquelme",
    tipoDeJugador: ENGANCHE, // Tira error
  };


export default {};