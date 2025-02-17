function mejorJugadorArgentino(numero) {
    const jugadores = {
        18: "Nery Pumpido",
        5: "José Luis Brown",
        9: "José Cuciuffo",
        19: "Óscar Ruggeri",
        14: "Ricardo Giusti",
        16: "Julio Olarticoechea",
        2: "Sergio Batista",
        12: "Héctor Enrique",
        7: "Jorge Burruchaga",
        10: "Diego Armando Maradona",
        11: "Jorge Valdano"
    };

    const jugador = jugadores[numero] || "Carlos Bilardo";
    console.log(`${numero}, ${jugador}`);
    return jugador;
}

mejorJugadorArgentino(10); 
mejorJugadorArgentino(3);  