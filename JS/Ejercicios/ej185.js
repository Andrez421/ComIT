let contador = 1;

const timer = setInterval(() => {
    if (contador <= 10) {
        if (contador === 1) {
            console.log('Inicio');
        } else if (contador === 10) {
            console.log('Fin del contador, pasaron 10 segundos');
        } else {
            console.log(`Pasaron ${contador} segundos.`);
        }
        console.log('*'.repeat(contador));
        contador++;
    } else {
        clearInterval(timer);
    }
}, 1000);