const usuario = {
    usermane : 'Batman',
    password : 'Alfred1960KPO!',
};

function autenticarUsuario(nombreDeUsuario, clave) {
    if (nombreDeUsuario === 'Batman' && clave === 'Alfred1960KPO!') {
        return true;
    } else {
        return false;
    }
}

if (autenticarUsuario(usuario.usermane, usuario.password)) {
    console.log(usuario);
} else {
    console.log('Usuario no autenticado');
}

