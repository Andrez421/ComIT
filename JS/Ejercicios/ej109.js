function autenticarUsuario(usuario, password) {
    const usuariosValidos = {
        nacho: 'Nerd1979',
        pedro: 'Batman0217',
        marta: 'Madre2312'
    };

    if (usuariosValidos[usuario] === password) {
        return true;
    } else {
        return false;
    }
}

const usuariosPrueba = [
    { usuario: 'nacho', password: 'Nerd1979' },
    { usuario: 'pedro', password: 'Batman0217' },
    { usuario: 'marta', password: 'Madre2312' },
    { usuario: 'Andres', password: '123456' },
    { usuario: 'Sebastian', password: '654321' }
];

usuariosPrueba.forEach(({ usuario, password }) => {
    if (autenticarUsuario(usuario, password)) {
        console.log(`Bienvenido ${usuario}, te estabamos esperando`);
    } else {
        console.log('Por favor ingrese credenciales válidas');
    }
});