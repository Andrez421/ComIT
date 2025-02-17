let jugador = {
    nombre: null,
    energia: 100,
    vidas: 3,
    perderEnergia: function(daño) {
        if (daño < 0) return;
        this.energia -= daño;
        if (this.energia < 0) this.energia = 0;
    },
    recuperarEnergia: function(energiaRecuperada) {
        if (energiaRecuperada < 0) return;
        this.energia += energiaRecuperada;
        if (this.energia > 100) this.energia = 100;
    },
    perderVida: function() {
        if (this.vidas > 0) this.vidas -= 1;
    },
    recuperarVida: function() {
        if (this.vidas < 99) this.vidas += 1;
    }
};

jugador.nombre = "Jugador1";

jugador.perderVida();
console.log(`El jugador ${jugador.nombre} tiene ${jugador.energia}% de energía y ${jugador.vidas} vidas`);

jugador.perderEnergia(10);
console.log(`El jugador ${jugador.nombre} tiene ${jugador.energia}% de energía y ${jugador.vidas} vidas`);

jugador.perderEnergia(5);
console.log(`El jugador ${jugador.nombre} tiene ${jugador.energia}% de energía y ${jugador.vidas} vidas`);

jugador.perderEnergia(15);
console.log(`El jugador ${jugador.nombre} tiene ${jugador.energia}% de energía y ${jugador.vidas} vidas`);

jugador.perderEnergia(20);
console.log(`El jugador ${jugador.nombre} tiene ${jugador.energia}% de energía y ${jugador.vidas} vidas`);

jugador.recuperarEnergia(10);
console.log(`El jugador ${jugador.nombre} tiene ${jugador.energia}% de energía y ${jugador.vidas} vidas`);

jugador.perderEnergia(30);
console.log(`El jugador ${jugador.nombre} tiene ${jugador.energia}% de energía y ${jugador.vidas} vidas`);

jugador.perderEnergia(40);
console.log(`El jugador ${jugador.nombre} tiene ${jugador.energia}% de energía y ${jugador.vidas} vidas`);

jugador.perderVida();
console.log(`El jugador ${jugador.nombre} tiene ${jugador.energia}% de energía y ${jugador.vidas} vidas`);

jugador.perderVida();
console.log(`El jugador ${jugador.nombre} tiene ${jugador.energia}% de energía y ${jugador.vidas} vidas`);

jugador.recuperarVida();
console.log(`El jugador ${jugador.nombre} tiene ${jugador.energia}% de energía y ${jugador.vidas} vidas`);

jugador.recuperarVida();
console.log(`El jugador ${jugador.nombre} tiene ${jugador.energia}% de energía y ${jugador.vidas} vidas`);

jugador.recuperarVida();
console.log(`El jugador ${jugador.nombre} tiene ${jugador.energia}% de energía y ${jugador.vidas} vidas`);

jugador.perderVida();
console.log(`El jugador ${jugador.nombre} tiene ${jugador.energia}% de energía y ${jugador.vidas} vidas`);