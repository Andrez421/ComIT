function saludar(...nombres) {
    nombres.forEach(nombre => {
        console.log(`Hola, ${nombre}!`);
    });
}

saludar("Nicolas", "Natalia", "Javier", "Ana");